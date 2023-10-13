<template>
 <div class="est">
  <p><a target="_blank" href="https://t.me/woxmen_w">Created by WoxWeb | <span>2023</span></a></p>
 </div>
</template>
<script>
import './css-component/topNav.css'
export default {
  name: "topNav",
  components: {
    //  have not component
  },
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
--outline-color: #a9df5eb7;

}
.est{
  width: 100%;
  padding: 20px;
  background:var(--text-color2) ;
  color: #FFF;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.est p a{
  color: #FFF;
  font-size: 18px;
  font-weight: 700;
}
</style>