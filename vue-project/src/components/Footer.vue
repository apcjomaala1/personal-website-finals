<template>
  <footer>
    <p>&copy; {{ currentYear }} John Michael Maala. All rights reserved.</p>
  </footer>
</template>

<script setup>
import { computed } from 'vue';

const currentYear = computed(() => new Date().getFullYear());
</script>

<style scoped>
footer {
  text-align: center;
  padding: 1rem 0;
  background: #333;
  color: white;
  margin-top: 2rem;
}
</style>