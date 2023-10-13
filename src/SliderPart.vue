<template  data-aos="zoom-in">
  <h1 class="title">IT-CENTER YANGILIKLARI</h1>
  <div class="Content-news-slider" 
 
  >
    <Carousel id="activeClasses" :itemsToShow="3.95" :wrapAround="true" >
      <Slide v-for="slide in cards" :key="slide" class="slider-content">
        <div class="carousel__item" >
          <div class="img-card">

          </div>
          <!-- {{ slide.img }}
          <img :src="require(`./components/component/${slide.img}.jpg`)" alt=""> -->
          <h1>{{ slide.title }}</h1>
          <p>{{ slide.description }}</p>
          <button class="news-btn"><a href="#">Kursga Yozilish</a></button>
        </div>

      </Slide>

      <template #addons>
        <Navigation class="navigation" />
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>
  
<script>
import { defineComponent } from "vue";
import {
  Carousel,
  Pagination,
  Navigation,
  Slide,
} from "../node_modules/vue3-carousel/dist/carousel.es";
import "../node_modules/vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "Basic",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      cards: [
        { id: 1, title: "Ulgurib qoling !", description: "🔥 Yangi Web dasturlash Front-end kursiga qabul boshlandi!  ", img:'news1.jpg' },
        { id: 2, title: "Ulgurib qoling !", description: "🔥 Yangi Web dasturlash Back-end kursiga qabul boshlandi! ", img: 'news1.jpg' },
        { id: 3, title: "Ulgurib qoling !", description: "🔥 Yangi Kapyuter Savodxonlik kursiga qabul boshlandi !", img: 'news1.jpg' },
        // Add more cards as needed
      ],

    };
  },
});
</script>
  
<style  scoped>
:root {

  --text-color: #6f6f6f;
  --text-color2: #89cc29;
  --bg-color: #323232;
  --dark-bg: #242526;
  --icon-bg: #E7F5FB;
  --h1-size: 50px;

}

body {
  overflow-x: hidden;
}

.title {
  background: url('./components/component/net.png');
}

.news-btn {
  width: 150px;
  height: 40px;
  background: #FFF;
  border: 2px solid var(--text-color2);
  border-radius: 8px;
  transition: 0.5s ease;

}

.news-btn a {
  color: var(--text-color2);
}

.news-btn:hover {
  background: var(--text-color2);
}

.news-btn:hover a {
  color: #FFF;
}

h1 {
  text-align: center;
  font-weight: 700;
}

.carousel__item {
  width: 350px;
  padding: 30px;
  background: url('./components/component/net.png');
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 10px;
}

.carousel__item h1 {
  font-size: 20px;
}

.carousel__next {
  width: 50px;
  height: 50px;
  background: var(--text-color2);
  display: flex;
  align-items: center;
  justify-content: center;

}

@media screen and (max-width: 390px) {
  .Content-news-slider {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    overflow: hidden;


  }

  .slider-content {
    width: 90%;
  }

  #activeClasses {
    width: 300px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;



  }

  #activeClasses .slider-content {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }

  #activeClasses .slider-content .carousel__item {
    transform: scale();
  }
}

/* .slider-content{
} */
.Content-news-slider {
  width: 100%;
  padding: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

#activeClasses {
  width: 800px;
}

#activeClasses .carousel__slide {
  padding: 5;
}

#activeClasses .carousel__viewport {
  perspective: 2000px;
}

#activeClasses .carousel__track {
  transform-style: preserve-3d;
}

#activeClasses .carousel__slide--sliding {
  transition: 0.5s;
}

#activeClasses .carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

#activeClasses .carousel__slide--active~.carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

#activeClasses .carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

#activeClasses .carousel__slide.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

#activeClasses .carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1);
}

#gallery .carousel__item {
  height: 300px;
}

#thumbnails .carousel__item {
  min-height: 100px;
  cursor: pointer;
}
</style>