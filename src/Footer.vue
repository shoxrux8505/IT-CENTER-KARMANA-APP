<template>
    <div class="footer">
        <div class="footer-logo">
            <img src="./components/component/IMG_2837.png" alt="">
        </div>
        <ul>
            <li><a href="#">Biz haqimizda</a></li>
            <li><a href="#">Kurslar</a></li>
            <li><a href="#">IT loyihalar</a></li>
            <li><a href="#">Xodimlar</a></li>
            <li><a href="#">Aloqa</a></li>
        </ul>
        <div class="call-box">
            <div class="numbers">
                <div class="icon"><ion-icon name="call-outline"></ion-icon></div>
                <div class="num">
                    <a href="#" maillto="+998939621361">+99893 962 13 61</a>
                    <a href="#" maillto="+998939621361">+99893 962 13 61</a>
                </div>
            </div>
            <div class="social-media">
                <li><a href="#"><ion-icon name="logo-instagram"></ion-icon></a></li>
                <li><a href="#"><ion-icon name="logo-github"></ion-icon></a></li>
                <li><a href="#"><ion-icon name="paper-plane-outline"></ion-icon></a></li>
                <li><a href="#"><ion-icon name="logo-facebook"></ion-icon></a></li>
            </div>
        </div>
    </div>
</template>
<script>
export default
    {
        name: 'footer',
        components: {
            // add
        }
    }
</script>
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

.footer {
    width: 100%;
    padding: 80px;
    background: #3A3A3A;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.footer .footer-logo img {
    width: 270px;
    height: 85px;

}

.footer ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
}

.footer ul li a {
    text-decoration: none;
    font-size: 20px;
    color: #FFf;
    transition: 0.1s ease;
    text-transform: uppercase;
}

.footer ul li a:hover {
    color: var(--text-color2);
}

.footer .call-box {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    row-gap: 25px;
}

.footer .call-box .numbers {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
}

.footer .call-box .numbers .icon {
    width: 50px;
    height: 50px;
    background: #FFF;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    font-weight: 700;
    transition: 0.5s ease;
}

.footer .call-box .numbers .icon:hover {
    background: #89cc29;
    color: #FFF;
}

.footer .call-box .numbers .num {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    row-gap: 4px;
}

.footer .call-box .numbers .num a {
    color: #FFF;
    font-size: 20px;
    font-weight: 700;
    transition: 0.1s ease;
}

.footer .call-box .numbers .num a:hover {
    color: #89cc29;
}

.footer .call-box .social-media {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    gap: 20px;
    position: relative;
    top: 50px;
    left: 100px;
}

.footer .call-box .social-media li {
    width: 50px;
    height: 50px;
    background: #FFF;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.1s ease;

}

.footer .call-box .social-media li:hover {
    background: #89cc29;
}

.footer .call-box .social-media li a {
    color: #242526;
    font-size: 30px;
    transition: 0.5s ease;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;

}

.footer .call-box .social-media li:hover a {
    color: #FFF;
}

@media screen and (max-width: 390px) {
    .footer {
        width: 100%;
        row-gap: 10px;
        flex-direction: column;
    }

    .footer ul {
        flex-direction: column;
    }
    .footer .call-box .social-media{
        position: relative;
        left: -0px;
       
    }
}</style>