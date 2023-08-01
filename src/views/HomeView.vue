<template>
  <main id="home-view">
    <div class="container-fluid">
      <h1 class="d-flex flex-start text--lg py-5">Happy Clients Say...</h1>

      <ClientQuotes />

      <AvailableGames />

    </div>
  </main>

</template>

<script>

  import ClientQuotes from '@/components/layout/ClientQuotes.vue';
  import AvailableGames from '@/components/layout/AvailableGames.vue';

  export default {
    name: 'HomeView',
    components: {
      ClientQuotes,
      AvailableGames
    },
  }

</script>

<style scoped>

#home-view {
  margin-bottom: 100px;
}

@media (max-width: 760px) {
  #home-view {
    margin-bottom: 70px;
  }
}

</style>