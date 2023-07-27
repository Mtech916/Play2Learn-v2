<template>
  <h1 id="game-heading" class="row justify-content-center pt-3 pb-2">Anagram Hunt</h1>

  <div id="anagram-start" class="d-none container-fluid">
    <div class="row justify-content-md-center">
      
      <div class="col col-sm-2 col-md-2 justify-content-center">
        <label for="word-length">Word Length</label>
      </div>
      <div class="col col-sm-2 col-md-2 mb-3">
        <input 
          type="number" 
          id="word-length" 
          class="p-1"
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
          <button class="col-sm-6 col-md-6 btn btn-primary">
            Play
          </button>
        </div>
      </div>
    </div>
  </div>

  <div id="anagram-play" class="d-none row">
    <h2 class="col-6 text-center h4 fw-bold">Score: 1</h2>
    <h2 class="col-6 text-center h4 fw-bold">Time Left: 18</h2>
    <hr>
    
    <div class="row justify-content-center">
      
      <p class="text-center fs-1">beard (2 left)</p>
      <label for="anagram-input" class="visually-hidden">Type Here:</label>
      <input 
      type="text" 
      id="anagram-input"
      class="col-2 p-2"
      name="anagram-input"
      placeholder="type here"
      >
      
      <div class="row justify-content-center">
        <ol class="col col-3 list list-numbered mt-3">
          <li class="list-item">bread</li>
          <li class="list-item">read</li>
          <li class="list-item">red</li>
        </ol>
      </div>
      
    </div>
  </div>

  <div id="anagram-final-results" class="row text-center">
    <h1 class="times-up">Time's Up!</h1>
    <p class="fs-1 fw-bold">You Got</p>
    <p class="final-score">7</p>
    <p class="fw-bold ">Anagrams</p>

    <div class="row g-1 align-items-center justify-content-center">
      <button class="col-sm-6 col-md-6 btn btn-primary">
        Play Again
      </button>
    </div>
    <div class="row g-1 align-items-center justify-content-center">
      <button class="col-sm-6 col-md-6 btn btn-secondary">
        Back to Start Screen
      </button>
    </div>
    
  </div>

</template>

<script>
  export default {
    name: 'AnagramHunt'
  }
</script>

<style scoped>

#anagram-start {
  width: 800px;
}

#anagram-play,
#anagram-final-results {
  font-size: 1.6em;
  margin: auto;
  width: 90%;
}

#game-heading {
  font-size: 3rem;
}

.times-up {
  font-size: 2.75rem;
}

.final-score {
  font-size: 5rem;
}

</style>