<template>
  <div id="anagram-final-results" class="row text-center">
    <h1 class="times-up">Time's Up!</h1>
    <p class="fs-1 fw-bold">You Got</p>
    <p class="final-score">{{ score }}</p>
    <p class="fw-bold ">Anagrams</p>

    <div class="row g-1 align-items-center justify-content-center">
      <button 
        class="col-sm-6 col-md-6 btn btn-primary"
        @click="restartGame"
      >
        Play Again
      </button>
    </div>
    <div class="row g-1 align-items-center justify-content-center">
      <button 
        class="col-sm-6 col-md-6 btn btn-secondary"
        @click="backToConfig"
      >
        Back to Start Screen
      </button>
    </div>
    
  </div>
</template>

<script>
  export default {
    name: 'AnagramGameOver',
    props: {
      score: Number
    },
    methods: {
      restartGame() {
        this.$emit('restart-game');
      },
      backToConfig() {
        this.$emit('back-to-config');
      },
    },
  }
</script>

<style scoped>

#anagram-final-results {
  font-size: 1.6em;
  margin: auto;
  width: 90%;
}

.times-up {
  font-size: 2.75rem;
}

.final-score {
  font-size: 5rem;
}

</style>