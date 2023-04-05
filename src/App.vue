<template>
  <html lang="ar" dir="rtl" class="shabnam-font">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- <mainPage/> -->
    <router-view class="header"></router-view>
    <router-view class="page" name="page"></router-view>
  </html>
</template>

<script>

// import mainPage from './components/mainPage.vue'
export default {
  name: 'App',
  components: {
    // mainPage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

@font-face {
  font-family: fontShabnam;
  src: url('./assets/fonts/shabnam-font-v2.4.0/Shabnam.eot');
  src: url('./assets/fonts/shabnam-font-v2.4.0/Shabnam.eot?#iefix') format('fontShabnam-opentype'),
       url('./assets/fonts/shabnam-font-v2.4.0/Shabnam.woff') format('woff'),
       url('./assets/fonts/shabnam-font-v2.4.0/Shabnam.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

.shabnam-font {
  font-family: fontShabnam;
}

@import "vue-select/dist/vue-select.css";

</style>
