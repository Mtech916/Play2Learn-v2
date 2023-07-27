<template>
  <div id="app">
    <HeaderNavBar />
    <!-- <HomeView /> -->
    <router-view></router-view>
    <!-- <MainContainer /> -->
    <FooterBar />
  </div>
</template>

<script>

import HeaderNavBar from './components/layout/HeaderNavBar';
// import HomeView from '@/views/HomeView'
// import MainContainer from './components/MainContainer';
import FooterBar from './components/layout/FooterBar';

export default {
  name: 'app',
  components: {
    HeaderNavBar,
    // HomeView,
    // MainContainer,
    FooterBar,
  }
}
</script>

<style>

footer,
header {
  background-color: #3f7cad;
}

</style>
