<template>
  <section>
    <h2>Picture Gallery</h2>
    <div class="gallery" ref="gallery">
      <img v-for="image in images" :src="image.src" :alt="image.alt" :key="image.alt">
    </div>
    <button class="btn" @click="scrollLeft">Left</button>
    <button class="btn" @click="scrollRight">Right</button>
  </section>
</template>

<script setup>
import { ref, defineProps } from 'vue';

// Define props
const props = defineProps({
  images: {
    type: Array,
    default: () => [
      { src: '/cat.jpg', alt: 'Cat' },
      { src: '/cat_2.jpg', alt: 'Cat 2' },
    ]
  }
});

// Reference to gallery element
const gallery = ref(null);

// Methods
const scrollLeft = () => {
  gallery.value.scrollBy({ left: -300, behavior: 'smooth' });
};

const scrollRight = () => {
  gallery.value.scrollBy({ left: 300, behavior: 'smooth' });
};
</script>

<style scoped>
.gallery {
  display: flex;
  overflow-x: auto;
  gap: 10px;
  scroll-snap-type: x mandatory;
}

.gallery img {
  scroll-snap-align: center;
  height: auto;
  border-radius: 10px; 
  object-fit: contain;
  width: 100%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.gallery img:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease;
}

.gallery::-webkit-scrollbar {
  display: none;
}

.gallery {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>