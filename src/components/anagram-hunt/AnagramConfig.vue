<template>
  <div id="anagram-config" class="container-fluid">
    <div class="row justify-content-md-center">
      
      <div class="col col-sm-2 col-md-2 justify-content-center">
        <label for="word-length">Word Length</label>
      </div>
      <div class="col col-sm-4 col-md-4 mb-3">
        <input 
          type="number" 
          id="word-length" 
          class="p-1"
          v-model="wordLength"
          name="word-length" 
          placeholder="ex. 5"
        >
      </div>
      <div class="row justify-content-center">
        <div class="col col-sm-4 col-md-4">
          <ol class="list list-numbered">
            <li class="list-item">Choose Word Length.</li>
            <li class="list-item">Press <span class="fw-bold">Play!</span></li>
            <li class="list-item">How many anagrams can you find in a minute?</li>
          </ol>
        </div>
        <div class="row g-1 align-items-center justify-content-center">
          <button 
            class="col-sm-6 col-md-6 btn btn-primary"
            @click='play'
          >
            Play
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AnagramConfig',
    data() {
      return {
        wordLength: null,
      };
    },
    methods: {
      play() {
        if (this.wordLength && this.wordLength > 0) {
          this.$emit('start-game', this.wordLength);
        }
      }
    }
  }
</script>

<style scoped>

#anagram-config {
  width: 800px;
}

</style>