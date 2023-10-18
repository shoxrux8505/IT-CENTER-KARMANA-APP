<template>
  <div class="navbar">
    <button class="logo">
      <img :width="'200px'" src="./logo22.png" alt="" />
    </button>
    <ul class="md-none">
      <li><a :href="'#loyiha'">LOYIHALAR</a></li>
      <li><a :href="'#kurslar'">KURSLAR</a></li>
      <li><a :href="'#'">YANGILIKLAR</a></li>
      <li><a :href="'#team'">XODIMLAR</a></li>
    </ul>
    <div class="btn-box">
      <button class="btn-nav">
        <a href="#form">Kursga yozilish</a>
        <!-- <lord-icon
          src="https://cdn.lordicon.com/zpxybbhl.json"
          trigger="loop"
          colors="primary:#121331,secondary:#FFFFFFF"
          style="width: 50px; height: 50px"
        >
        </lord-icon> -->
      </button>
      <div class="menu-bar">
        <button class="bar" @click="toggleMenu"> <ion-icon name="menu-outline"></ion-icon></button>
      </div>
    </div>
  </div>
  <ul v-if="menuOpen" class="menu">
    <li><a :href="'#loyiha'">LOYIHALAR</a></li>
    <li><a :href="'#kurslar'">KURSLAR</a></li>
    <li><a :href="'#'">YANGILIKLAR</a></li>
    <li><a :href="'#team'">XODIMLAR</a></li>
    <button> <a href="#form">Kursga yozilish</a></button>
  </ul>
</template>

<script>
import "./css-component/nav.css";
export default {
  name: "navbar",
  components: {
    // have not
  },
  data() {
    return {
      menuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    }
  }
};
</script>

<style>
:root {

  --text-color: #6f6f6f;
  --text-color2: #89cc29;
  --bg-color: #323232;
  --dark-bg: #242526;
  --icon-bg: #E7F5FB;
  --h1-size: 50px;

}

.menu {
  width: 250px;
  font-family: sans-serif;
  font-weight: 700;
  position: fixed;
  list-style: none;
  line-height: 50px;
  top: 100px;
  right: 0;
  padding: 20px;
  text-align: center;
  transition: 0.5s ease;
  background: var(--bg-color);
  z-index: 1;
}

.menu li {
  padding: 6px 8px;
  margin: 10px 0;
  transition: 0.5s ease;
}

.menu a {
  text-decoration: none;
  color: #FFF;
  font-size: 18px;
}
.menu button{
  padding: 5px 7px;
  border-radius: 15px;
  border: 2px solid var(--text-color2)  ;
  background: var(--text-color2);
}

.btn-box .menu-bar {
  display: none;
}

.btn-box .menu-bar .bar {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  background: #fff;
  border: 2px solid var(--text-color2);
  border-radius: 10px;


}

@media screen and (max-width: 390px) {
  .navbar {
    position: fixed;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;

  }

  .menu-bar ion-icon {
    display: block;
  }

  .navbar .btn-box .btn-nav {
    display: none;

  }

  .navbar .btn-box .menu-bar {
    display: block;
    border-radius: 20px;
  }
}
</style>