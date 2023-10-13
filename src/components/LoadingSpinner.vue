<!-- LoadingSpinner.vue -->
<template>
   <div class="load-content">
    <div class="loading-spinner">
      <img src="./component/IMG_2837.png" alt="">
      <div class="spinner">
      </div>
    </div>
   </div>
  </template>
  
  <style scoped>
  :root {

--text-color: #6f6f6f;
--text-color2: #89cc29;
--bg-color: #323232;
--dark-bg: #242526;
--icon-bg: #E7F5FB;
--h1-size: 50px;
--outline-color: #a9df5eb7;

}
  .load-content{
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #333;
  }
  .loading-spinner {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  
  .spinner {
    border: 4px solid transparent;
    border-top: 10px solid var(--text-color2);
    border-radius: 50%;
    width: 250px;
    height: 250px;
    animation: spin 2s linear infinite;
  }
   img{
    width: 190px;
    position: absolute;
    filter: drop-shadow(0 0 10px var(--text-color2));
  }
  @media screen and (max-width: 390px) {
    .load-content{
      height: 100vh;
    }
    .load-content .loading-spinner{
      transform: scale(0.8);
    }
  }
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  </style>
  