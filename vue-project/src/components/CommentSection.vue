<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { supabase } from '../lib/supabaseClient';
import CommentForm from './CommentForm.vue';

const comments = ref([]);
const loading = ref(true);
const error = ref('');
let subscription = null;

const fetchComments = async () => {
  loading.value = true;
  error.value = '';
  
  try {
    const { data, error: fetchError } = await supabase
      .from('comments')
      .select('*')
      .order('created_at', { ascending: false });

    if (fetchError) {
      console.error('Error fetching comments:', fetchError);
      error.value = `Failed to load comments: ${fetchError.message}`;
    } else {
      comments.value = data;
    }
  } catch (err) {
    console.error('Unexpected error:', err);
    error.value = 'An unexpected error occurred while loading comments';
  } finally {
    loading.value = false;
  }
};

const subscribeToComments = () => {
  subscription = supabase
    .channel('public:comments')
    .on('postgres_changes', 
      { 
        event: 'INSERT', 
        schema: 'public', 
        table: 'comments' 
      }, 
      (payload) => {
        // Check if the comment is already in the list to avoid duplicates
        if (!comments.value.some(comment => comment.id === payload.new.id)) {
          comments.value = [payload.new, ...comments.value];
        }
      }
    )
    .subscribe((status) => {
      console.log('Subscription status:', status);
      if (status !== 'SUBSCRIBED') {
        console.warn('Failed to subscribe to realtime updates');
      }
    });
};

const handleCommentAdded = (newComment) => {
  // Add the new comment to the list if realtime subscription fails
  if (newComment && !comments.value.some(comment => comment.id === newComment.id)) {
    comments.value = [newComment, ...comments.value];
  }
  // Optional: refresh all comments
  fetchComments();
};

onMounted(() => {
  fetchComments();
  subscribeToComments();
});

onUnmounted(() => {
  if (subscription) {
    supabase.removeChannel(subscription);
  }
});
</script>

<template>
  <div class="comment-section">
    <h2>Comments</h2>

    <!-- Comment Form Component -->
    <CommentForm @commentAdded="handleCommentAdded" />

    <div v-if="loading" class="loading">Loading comments...</div>
    <div v-if="error" class="error-message">{{ error }}</div>

    <div v-if="!loading && !comments.length" class="no-comments">
      No comments yet. Be the first to comment!
    </div>

    <ul v-if="comments.length" class="comment-list">
      <li v-for="comment in comments" :key="comment.id">
        <strong>{{ comment.author }}</strong>
        <p>{{ comment.content }}</p>
        <small>{{ new Date(comment.created_at).toLocaleString() }}</small>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.comment-section {
  max-width: 500px;
  margin: auto;
  font-family: Arial, sans-serif;
}

.comment-list {
  list-style-type: none;
  padding: 0;
}

.comment-list li {
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
}

.comment-list strong {
  color: #333;
}

.comment-list small {
  display: block;
  color: #777;
  margin-top: 5px;
}

.loading {
  text-align: center;
  color: #666;
  margin: 20px 0;
}

.error-message {
  color: #dc3545;
  margin: 15px 0;
  padding: 10px;
  background-color: #f8d7da;
  border-radius: 5px;
}

.no-comments {
  text-align: center;
  color: #666;
  margin: 20px 0;
  font-style: italic;
}
</style>