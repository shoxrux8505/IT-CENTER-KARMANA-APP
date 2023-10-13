<template>
  <LoadingSpinner v-if="loading" />
  <div id="app" v-else>
    <!-- <top-nav></top-nav> -->
    <navComponent />
    <HomeContent />
    <!-- <NewSlCards> </NewSlCards> -->
    <slider-part></slider-part>
    <TeamCard />
    <FormValid />
    <MapLocation />
    <Footer></Footer>
    <top-nav></top-nav>
  </div>
</template>
  
<script>

import TeamCard from "./components/TeamCard.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "../node_modules/swiper/modules";
import navComponent from "./components/component/navComponent.vue";
import saidBarComponent from "./components/component/saidBarComponent.vue";
import HomeContent from "./components/HomeContent.vue";
import TopNav from "./components/component/TopNav.vue";
import SliderPart from "./SliderPart.vue";
import NewSlCards from "./components/NewSlCards.vue";
import FormValid from "./components/FormValid.vue";
import DemoSlider from "./DemoSlider.vue";
import LoadingSpinner from "./components/LoadingSpinner.vue";
import MapLocation from "./components/MapLocation.vue";
import Footer from "./Footer.vue";

// import CourSes from './components/component/CourSes.vue';
export default {
  name: "App",
  components: {
    HomeContent,
    saidBarComponent,
    navComponent,
    Swiper,
    SwiperSlide,
    TopNav,
    NewSlCards,
    MapLocation,
    SliderPart,
    FormValid,
    DemoSlider,
    TeamCard,
    LoadingSpinner,
    Footer



    // mentorlar
  },
  data() {
    return {
      loading: true,
    };
  },
  mounted() {
    window.addEventListener("load", () => {
      setInterval(() => {
        this.loading = false
      }, +2500)
    })
  }

};

</script>

<style>
body {
  font-family: sans-serif;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}

.loading-indicator {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  font-size: 18px;
  color: #333;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>