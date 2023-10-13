<template>
    <h1 id="team">XODIMLAR</h1>
    <div class="Team-content">

        <div class="cards" data-aos="fade-up" data-aos-duration="1500">
            <div class="card">
                <div class="card-img"></div>
                <div class="card-text">
                    <h2>Abdullaev Shoxrux</h2>
                    <p>
                        Front-END <br>
                        <small>Mentor</small>
                    </p>

                </div>
                <div class="card-icon">
                    <div class="icon-social">
                        <span>
                            <a href="https://t.me/lndwix" target="_blank">
                                <img src="./component/tg.png" alt="">
                            </a>
                        </span>
                        <span class="insta">
                            <a href="https://www.instagram.com/woxmen_w/" target="_blank">
                                <img src="./component/insta.jpg" alt="">
                            </a>
                        </span>
                    </div>
                    <div class="sponsor">
                        <img width="100px" src="./component/logo22.png" alt="">
                    </div>
                </div>
            </div>
            <div class="card" data-aos="fade-down" data-aos-duration="1500">
                <div class="card-img"></div>
                <div class="card-text">
                    <h2>Abduraxmonov Shaxram</h2>
                    <p>
                        Manager
                    </p>

                </div>
                <div class="card-icon">
                    <div class="icon-social">
                        <span>
                            <a href="#">
                                <img src="./component/tg.png" alt="">
                            </a>
                        </span>
                        <span class="insta">
                            <a href="#">
                                <img src="./component/insta.jpg" alt="">
                            </a>
                        </span>
                    </div>
                    <div class="sponsor">
                        <img width="100px" src="./component/logo22.png" alt="">
                    </div>
                </div>
            </div>
            <div class="card" data-aos="fade-up" data-aos-duration="1500">
                <div class="card-img"></div>
                <div class="card-text">
                    <h2>Gaybullayev Umidjon</h2>
                    <p>
                        Back-END <br>
                        <small>Mentor</small>
                    </p>

                </div>
                <div class="card-icon">
                    <div class="icon-social">
                        <span>
                            <a href="#">
                                <img src="./component/tg.png" alt="">
                            </a>
                        </span>
                        <span class="insta">
                            <a href="#">
                                <img src="./component/insta.jpg" alt="">
                            </a>
                        </span>
                    </div>
                    <div class="sponsor">
                        <img width="100px" src="./component/logo22.png" alt="">
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>

export default {
    name: 'team-card',
    components: {
        // components not
    }
}

</script>
<style scoped>
/* media */
/* h1 {} */

@media screen and (max-width: 390px) {
    .Team-content {
        width: 100%;
    }

    .cards {
        flex-direction: column;
        row-gap: 20px;
    }
}

:root {

    --text-color: #6f6f6f;
    --text-color2: #89cc29;
    --bg-color: #323232;
    --dark-bg: #242526;
    --icon-bg: #E7F5FB;
    --h1-size: 50px;

}

.Team-content {
    width: 100%;
    padding: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url('./component/net.png');
    background-size: contain;
}

.Team-content .cards {
    display: flex;
    align-items: center;
    justify-content: center;
    background: url('./component/net.png');
    background-size: cover;
}

.Team-content .cards .card {
    width: 360px;
    height: 350px;
    border-radius: 10px;
    border: 2px solid var(--text-color2);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    row-gap: 10px;
    -webkit-box-shadow: -5px 46px 25px -16px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: -5px 46px 25px -16px rgba(34, 60, 80, 0.2);
    box-shadow: -5px 46px 25px -16px rgba(34, 60, 80, 0.2);

    /* background: url('./component/net.png');
    background-size: contain; */
}

.Team-content .cards .card .card-img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: url('./component/sp.gif');
    background-size: cover;
    filter: drop-shadow(0 0 10px var(--text-color2));
}

.Team-content .cards .card .card-text {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.Team-content .cards .card .card-text h2 {
    font-size: 30px;
    font-weight: 700;
}

.Team-content .cards .card .card-text p {
    font-size: 20px;
    color: var(--text-color2);
}

.Team-content .cards .card .card-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    ;
    gap: 50px;
}

.Team-content .cards .card .card-icon .icon-social {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
}

.Team-content .cards .card .card-icon span {
    display: block;

}

.Team-content .cards .card .card-icon .insta {
    position: relative;
    left: -12px;
}

.Team-content .cards .card .card-icon .sponsor {
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.Team-content .cards .card .card-icon span a img {
    width: 30px;
    height: 30px;

}
</style>


