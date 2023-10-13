<template>
    
    <div class="image-card-slider">
      <transition name="slide-fade" mode="out-in">
        <div :key="currentIndex" class="image-card">
          <img :src="images[currentIndex]" alt="Card Image" />
        </div>
      </transition>
  
      <div class="controls">
        <button @click="prev" class="prev-button">Previous</button>
        <button @click="next" class="next-button">Next</button>
      </div>
    </div>
  </template>
  
  <script>
  import news from './components/component/news.jpg'
  export default {
    name:"demo-slider",
    data() {
      return {
        currentIndex: 0,
        images: [
          news,
          'image2.jpg',
          'image3.jpg',
          // Add more image paths here
        ],
      };
    },
    methods: {
      next() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      },
      prev() {
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
      },
    },
  };
  </script>
  
  <style scoped>
  .image-card-slider {
    text-align: center;
    position: relative;
  }
  
  .image-card {
    display: inline-block;
    transition: all 0.5s;
  }
  
  img {
    max-width: 300px;
    height: auto;
  }
  
  .controls {
    margin-top: 10px;
  }
  
  .prev-button,
  .next-button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    margin: 0 10px;
    cursor: pointer;
  }
  
  .slide-fade-enter-active,
  .slide-fade-leave-active {
    transition: opacity 0.5s;
  }
  
  .slide-fade-enter, .slide-fade-leave-to /* .slide-fade-leave-active in <2.1.8 */ {
    opacity: 0;
  }
  </style>
  