<template>
  <div>
    <MainContainer />
    <router-view></router-view>
  </div>
</template>

<script>

import MainContainer from '../components/MainContainer.vue';

export default {
  name: 'MathFactsView',
  components: {
    MainContainer,
  }
}
</script>
