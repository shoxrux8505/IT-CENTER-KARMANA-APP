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
      <ul class="dropdown">
        <li>
          <lord-icon src="https://cdn.lordicon.com/fwafvpnq.json" trigger="loop"
            colors="primary:#ffffff,secondary:#08a88a" style="width: 50px; height: 50px">
          </lord-icon>Aloqa markazi:<a href="#">939621361</a>
        </li>
        <li>
          <lord-icon src="https://cdn.lordicon.com/zzcjjxew.json" trigger="loop"
            colors="primary:#ffffff,secondary:#08a88a" style="width: 50px; height: 50px">
          </lord-icon>Markaz Manzil <a class="manzil" href="#">Eski Shahar Telegraph</a>
        </li>
        <li>
          <lord-icon src="https://cdn.lordicon.com/qhgmphtg.json" trigger="loop" delay="6000"
            colors="primary:#ffffff,secondary:#08a88a" style="width:50px;height:50px">
          </lord-icon>
          Ish vaqti:.. <a class="time-work" href="#">Tues-Sat: 8:00-18:00 Mon-Fri: 8:00-20:00 </a>

        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import "./css-component/nav.css";
export default {
  name: "navbar",
  components: {
    // have not
  },
};
</script>

<style>
@media screen and (max-width: 390px) {
  navbar {
    width: 100%;
    display:flex;
    align-items: center;
    justify-content: center;
  }
}
</style>