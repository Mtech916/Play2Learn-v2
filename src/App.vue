<template>
  <div id="app">
    <HeaderNavBar />

    <router-view></router-view>

    <FooterBar />
  </div>
</template>

<script>

import HeaderNavBar from './components/layout/HeaderNavBar';
import FooterBar from './components/layout/FooterBar';

export default {
  name: 'app',
  components: {
    HeaderNavBar,
    FooterBar,
  }
}
</script>

<!-- <style>

footer,
header {
  background-color: #3f7cad;
}

</style> -->
