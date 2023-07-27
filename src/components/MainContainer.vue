<template>
  <main id="main-container">

    <!-- Config -->
    <!-- Results and Game Container -->
    <GameConfig />
    <RouterView></RouterView>

  </main>
</template>

<script>

import GameConfig from '../components/math-facts-practice/GameConfig.vue';

export default {
  name: 'MainContainer',
  components: {
    GameConfig
  }
}

</script>

<style scoped>

#main-container {
  margin: auto;
  width: 380px;
  height: calc(100vh - 100px);
}


</style>