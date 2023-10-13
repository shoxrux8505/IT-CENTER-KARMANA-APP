<template>
    <h1>BIZNING MANZIL
        <lord-icon src="https://cdn.lordicon.com/fihkmkwt.json" trigger="loop" colors="primary:#121331,secondary:#89cc29"
            style="width:70px;height:70px">
        </lord-icon>
    </h1>
    <div class="map-content" id="map" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <div class="map">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3049.8012201603337!2d65.34996527574272!3d40.146711372029856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f51c7fe55aabd5d%3A0xf37db1dec1aa792c!2sIT%20Center%20Karmana!5e0!3m2!1sru!2s!4v1696680853197!5m2!1sru!2s"
                width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Map-App',
    components: {
        // ////

    }
}

</script>

<style>
h1 {
    display: flex;
    align-items: center;
    justify-content: center;
}

.map-content {
    width: 100%;
    padding: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url('./component/main.jpg');

}

.map-content .map {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition-delay: 1s;
    transition-duration: 1s;
    transition: 0.5s ease;
}

.map-content .map:hover {
    outline: 10px solid #E7F5FB;
}
</style>