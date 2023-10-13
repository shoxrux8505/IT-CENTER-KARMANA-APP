<template>
  <div class="card-container">
    <div class="card-wrapper">
      <div class="card light">
        <div class="text-overlay">
          <h2>3DMAX</h2>
          <div class="price">$40 <small>/ month</small></div>
          <div class="details-text">
            <span>15 contributors</span>
            <span>duration 8-month</span>
            <span>3 times a week</span>
          </div>
        </div>
        <div class="purchase-button-container">
          <h2 class="back-h2">3DMAX</h2>
          <i class="fa-solid fa-address-card"></i>
          <div class="purchase-button light">Registration</div>
        </div>
      </div>
    </div>
    <div class="card-wrapper">
      <div class="card dark">
        <div class="text-overlay">
          <h2>FRONTEND</h2>
          <div class="price">$35 <small>/ month</small></div>
          <div class="details-text">
            <span>15 contributors</span>
            <span>duration 6-9month</span>
            <span>3 times a week</span>
          </div>
        </div>
        <div class="purchase-button-container">
          <h2 class="back-h2">FRONTEND</h2>
          <i class="fa-solid fa-address-card"></i>
          <div class="purchase-button dark">Registration</div>
        </div>
      </div>
    </div>
    <div class="card-wrapper">
      <div class="card light">
        <div class="text-overlay">
          <h2>BACKEND</h2>
          <div class="price">$35 <small>/ month</small></div>
          <div class="details-text">
            <span>10 contributors</span>
            <span>duration 8-9month</span>
            <span>3 times a week</span>

          </div>
        </div>
        <div class="purchase-button-container">
          <h2 class="back-h2">BACKEND</h2>
          <i class="fa-solid fa-address-card"></i>
          <div class="purchase-button light">Registration</div>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
export default{
    name:'CoursesCard',
    components:{
        // have not
    }
}
</script>
<style>

@import url("https://fonts.googleapis.com/css2?family=Libre+Baskerville&family=Source+Sans+Pro:wght@400;700&display=swap");
body {
  margin: 0;
  height: 100vh;
  background-color: #ffffff;
  font-family: "Libre Baskerville", serif;
  font-family: "Source Sans Pro", sans-serif;
}

/* media */
@media screen and (min-width: 390px){
  .card-container{
   
  }
}
.card {
  width: 230px;
  height: 325px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  position: relative;
  perspective: 1000px;
  transform: perspective(1000px) translateY(0);
  transform-style: preserve-3d;
  transition: transform 0.8s ease-in-out;
}
.card.dark {
  background-color: #10b801;
  color: #fbfbfb;
}
.card.dark .purchase-button {
  border: 1px solid rgb(0, 0, 0);
}
.card.light {
  background-color: #fbfbfb;
  color: #272727;
}
.card.light .purchase-button {
  border: 1px solid rgb(0, 0, 0);
}

.card-container {
  display: flex;
}

.card-wrapper:hover .card {
  transform: rotateY(179deg);
  z-index: 2;
}
.card-wrapper:hover .card .text-overlay {
  opacity: 0;
  transform-style: preserve-3d;
  z-index: 1;
}
.card-wrapper:hover .card .purchase-button-container {
  opacity: 1;
}

.text-overlay {
  transform: perspective(1000px) translateY(0) translateZ(80px);
  transition: transform 0.8s ease-in-out, opacity 1s ease;
  pointer-events: none;
  width: 100%;
  perspective: inherit;
  padding-top: 50px;
}

h1 {
  color: #10b801;
}

h2 {
  font-size: 0.9rem;
  text-align: center;
  font-weight: 500;
}

.price {
  text-align: center;
  font-size: 1.8rem;
  font-weight: 900;
  margin: 20px;
}
.card.dark .purchase-button-container{
  color: rgb(255, 255, 255);
  

}

.purchase-button-container {
  color: #10b801;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  left: 0;
  top: 0;
  transform: perspective(1000px) rotateY(179deg) translateY(0) translateZ(80px);
  opacity: 0;
  z-index: -1;
  transition: transform 0.8s ease-in-out, opacity 1s ease;
  width: 100%;
  height: 100%;
}
.purchase-button-container .purchase-button {
  padding: 10px 40px;
  border-radius: 50px;
  font-size: 1.2rem;
  transition: background-color 0.25s ease, color 0.25s ease;
  cursor: pointer;
}
.purchase-button-container .purchase-button.light:hover {
  background-color: #77ef6c;
  color: #fbfbfb;
}
.purchase-button.dark{
  background-color: #77ef6c;
}
.purchase-button-container .purchase-button.dark:hover {
  background-color:  #ffffff;
  color: #10b801;
}

.details-text {
  margin-top: 20px;
  display: flex;
  gap: 10px 10px;
  align-items: center;
  text-align: center;
  flex-direction: column;
  color: #464646;
  font-size: 0.75rem;
}

small {
  font-size: 0.75rem;
  font-weight: 100;
  color: #858585;
}

.fa-solid {
  font-size: 3rem;
  margin-bottom: 2rem;
}

.back-h2 {
  font-size: 2rem;
  margin-top: 0;
}

</style>