<template>
  <div id="interact">
    <button class="btn" @click="showAlert">Click me!</button>
    <button class="btn" @click="toggleDarkMode">Toggle Dark Mode</button>
  </div>
</template>

<script setup>
// Methods
const showAlert = () => {
  alert("Hello, welcome to my personal profile page!");
};

const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
};
</script>