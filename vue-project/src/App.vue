<template>
  <div id="app">
    <header-component></header-component>
    <div class="container">
      <about-me></about-me>
      <education></education>
      <experience></experience>
      <hobbies-interests></hobbies-interests>
      <goals-dreams></goals-dreams>
      <image-gallery></image-gallery>
      <links></links>
      <interact-section></interact-section>
      <comment-section></comment-section>
    </div>
    <footer-component></footer-component>
  </div>
</template>

<style>
body {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  line-height: 1.6;
  background-color: #f4f4f9;
  color: #333;
  transition: background-color 0.5s ease, color 0.5s ease;
}

.container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

ul {
  list-style: none;
  padding: 0;
}

ul li {
  background: #fff;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

ul li img {
  border-radius: 5px;
}

h2 {
  color: #4CAF50;
}

.btn {
  display: inline-block;
  background: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 1rem;
  text-align: center;
}

.btn:hover {
  background: #45a049;
}

body.dark-mode, body.dark-mode * {
  background-color: #333;
  color: #f4f4f9;
}
</style>