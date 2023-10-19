<template>
  <body>
    <div class="main-content" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
      <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <h1>
              BIZ BILAN <br />
              KELAJAK KASBLARINI O'RGANING !
            </h1>
            <a href="./component/center2.jpg" target="_blank">
              <img src="./component/center2.jpg" class="d-block w-100" alt="..." />
            </a>
          </div>
          <div class="carousel-item">
            <img src="./component/markaz.jpg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="./component/room2.jpg" class="d-block w-100" alt="..." />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <!-- Home -->
    </div>
    <div class="wave">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#89cc29" fill-opacity="1"
          d="M0,224L48,213.3C96,203,192,181,288,165.3C384,149,480,139,576,149.3C672,160,768,192,864,202.7C960,213,1056,203,1152,165.3C1248,128,1344,64,1392,32L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
        </path>
      </svg>
    </div>
    <div class="contentbox" id="loyiha">
      <div class="sphera">
        <h1>
          IT PARK LOYIHALARI ORQALI <br />
          IMKONIYATLARGA EGA <br />
          BO'LING!
        </h1>
        <div class="project-box">
          <div class="box" data-aos="fade-right">
            <div class="img-box">
              <img class="kkk" src="./component/i.webp" alt="" />
            </div>
            <div class="text-box">
              <h4>KELAJAK KASBLARI</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nesciunt, corrupti architecto. Perspiciatis, tempore itaque.
              </p>
              <button class="box-btn"><a href="https://yoshlardaftari.uz/applications/create/center?child_field_ids=42,45"
                  target="_blank">Ariza Topshirish</a></button>
            </div>
          </div>
          <div class="box" data-aos="fade-left">
            <div class="img-box">
              <img src="./component/scientist.png" alt="" />
            </div>
            <div class="text-box">
              <h4>IT HAMSHIRA</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nesciunt, corrupti architecto. Perspiciatis, tempore itaque.
              </p>
              <button class="box-btn"><a
                  href="https://yuz.uz/news/elektron-tizim-bilan-ishlaydigan-it-operator--hamshira-lavozimi-joriy-etiladi"
                  target="_blank">Malumot Olish</a></button>
            </div>
          </div>
          <!-- <div class="box"></div> -->
        </div>
      </div>
    </div>
    <div :class="'cr-container'">
      <h1 id="kurslar">BIZNING KURSLARIMIZ</h1>
      <div class="card-container">
        <div class="card-wrapper" data-aos="fade-up" data-aos-duration="3000">
          <div class="card light" id="kurslar">
            <div class="text-overlay">
              <img src="../components/cardsImg/3d.svg" alt="3d max" />
              <h2 class="back-h2">3DMAX</h2>
              <i class="fa-solid fa-address-card"></i>
            </div>
            <div class="purchase-button-container">
              <h2>3DMAX</h2>
              <div class="price">420 000 <small>so`m/ oy</small></div>
              <div class="details-text">
                <span>10-12 o`quvchi</span>
                <span>Davomiligi 8-9 oy</span>
                <span>Haftasiga 3 kun</span>
                <span><a class="white" href="#">Kursga Yozilish</a></span>
              </div>
            </div>
          </div>
        </div>
        <div class="card-wrapper" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
          <div class="card dark">
            <div class="text-overlay">
              <img src="./cardsImg/frontend.svg" alt="frontend" />
              <h2 class="back-h2 front">FRONTEND</h2>
              <i class="fa-solid fa-address-card"></i>
            </div>
            <div class="purchase-button-container">
              <h2>FRONTEND</h2>
              <div class="price">320 000 <small>so`m/ oy</small></div>
              <div class="details-text">
                <span>10-12 o`quvchi</span>
                <span>duration 6-9month</span>
                <span>3 times a week</span>
                <span class="white"><a href="#">Kursga Yozilish</a></span>
              </div>
            </div>
          </div>
        </div>
        <div class="card-wrapper" data-aos="fade-up" data-aos-duration="3000">
          <div class="card light">
            <div class="text-overlay">
              <img src="./cardsImg/backend.svg" alt="" />
              <h2 class="back-h2">BACKEND</h2>
              <i class="fa-solid fa-address-card"></i>
            </div>
            <div class="purchase-button-container">
              <h2>BACKEND</h2>
              <div class="price">420 000 <small>so`m/ oy</small></div>
              <div class="details-text">
                <span>10-12 o`quvchi</span>
                <span>duration 8-9month</span>
                <span>3 times a week</span>
                <span><a class="white" href="#">Kursga Yozilish</a></span>
              </div>
            </div>
          </div>
        </div>
        <div class="card-wrapper" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
          <div class="card dark">
            <div class="text-overlay">
              <img src="./cardsImg/3d.svg" alt="" />
              <h2 class="back-h2 design">GRAFIK DIZAYN</h2>
              <i class="fa-solid fa-address-card"></i>
            </div>
            <div class="purchase-button-container">
              <h2>GRAFIK DIZAYN</h2>
              <div class="price">320 000 <small>so`m/ oy</small></div>
              <div class="details-text">
                <span>10-12 o`quvchi</span>
                <span>duration 8-9month</span>
                <span>3 times a week</span>
                <span><a href="#">Kursga Yozilish</a></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
// import required modules
import "./component/css-component/home.css";
export default {
  name: "home-content",
  components: {},
};
</script>


<style>
.main-content {
  position: relative;
  right: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  /* background: url('./component/markaz.jpg') no-repeat; */
}

.carousel-item h1 {
  width: 100%;
  height: 100%;
  position: absolute;
  /* top: 400px; */
  left: 100px;
  filter: drop-shadow(0 0 10px #88cc29a4);
  padding: 10px 15px;
  color: #ffffff;
  font-size: 50px;
  font-weight: 700;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-fade {
  width: 100%;
}

.contentbox {
  position: relative;
  top: -300px;
  width: 100%;
  padding: 60px;
  /* background: #2c2c2c2c; */
  display: flex;
  align-items: center;
  justify-content: center;
}

.contentbox .sphera {
  width: 100%;
  height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 56px;
  background: url("./component/about.png");
  background-size: cover;
  text-align: center;
}

@media screen and (max-width: 390px) {
  body {
    overflow-x: hidden;
  }

  .main-content {
    width: 100%;
    /* padding: 20px; */
    display: flex;
    align-items: baseline;
  }

  .carousel-fade {
    width: 100%;
    transform: scale(1.4);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 100px;
    margin-top: 100px;
  }

  .carousel-item h1 {
    font-size: 30px;
  }

  .card-container {
    width: 100%;
    flex-direction: column;
    row-gap: 30px;
  }

  .project-box {
    position: relative;
    top: 30px;
    left: 50px;
    width: 100%;
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    row-gap: 50px;
  }

  .project-box .box {
    position: relative;
    
    padding: 20px;
    transform: scale(0.5);
  }

  .project-box h1 {
    transform: scale(0.8);
  }

  .project-box h1::before {
    content: '';

  }

  .contentbox .sphera h1 {
    position: relative;
    top: 50px;
    left: 50px;
    font-size: 23px;
  }
}
</style>
