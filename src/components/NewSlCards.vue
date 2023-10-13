<template>
    
    <div class="news-card">
      <h2>YANGILIKLAR</h2>
        
      <div class="news-content-slider">
        <div class="pagination">
          <button class="prev-button"><ion-icon name="arrow-back-outline"></ion-icon></button>
        </div>
        <div class="card-slider-container">
        <div class="card-slider">
          <div class="card">
            <img src="./cardsImg/3d.svg" alt="Card 1">
            <h2>Card 1</h2>
            <p>Description for Card 1.</p>
          </div>

          <div class="card">
            <img src="./cardsImg/frontend.svg" alt="Card 3">
            <h2>Card 3</h2>
            <p>Description for Card 3.</p>
          </div>
          <div class="card">
            <img src="./cardsImg/3d.svg" alt="Card 3">
            <h2>Card 3</h2>
            <p>Description for Card 3.</p>
          </div>
          <div class="card">
            <img src="./cardsImg/backend.svg" alt="Card 3">
            <h2>Card 3</h2>
            <p>Description for Card 3.</p>
          </div>
          <div class="card">
            <img src="./cardsImg/frontend.svg" alt="Card 3">
            <h2>Card 3</h2>
            <p>Description for Card 3.</p>
          </div>
          <div class="card">
            <img src="./cardsImg/frontend.svg" alt="Card 3">
            <h2>Card 3</h2>
            <p>Description for Card 3.</p>
          </div>
          <div class="card">
            <img src="./cardsImg/frontend.svg" alt="Card 3">
            <h2>Card 3</h2>
            <p>Description for Card 3.</p>
          </div>
          <div class="card">
            <img src="./cardsImg/frontend.svg" alt="Card 3">
            <h2>Card 3</h2>
            <p>Description for Card 3.</p>
          </div>
        </div>
      </div>
      <div class="pagination">
          <button class="next-button"><ion-icon name="arrow-forward-outline"></ion-icon></button>
        </div>
      </div>
    </div>
</template>
<script>
import '../components/component/css-component/newsSlider.css'
export default{
    name:'newSl-card',
    components:{
        // 
    },
    
}

</script>

<style scoped>
.news-card{
    width: 100%;
    padding: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    row-gap: 10px;
    background: url('./cardsImg/net3.png') no-repeat;
   
  }
 
</style>