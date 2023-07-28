<template>
  <div id="anagram-game-play" class="row">
    <h2 class="col-6 text-center h4 fw-bold">Score: {{ score }}</h2>
    <h2 class="col-6 text-center h4 fw-bold">Time Left: {{ timeLeft }}</h2>
    <hr>
    
    <div class="row justify-content-center">
      
      <p class="text-center fs-1">{{ currentWord }} ({{ currentAnagrams.length }} left)</p>
      <label for="anagram-input" class="visually-hidden">Type Here:</label>
      <input 
      v-model="userInput"
      @keyup.enter="checkAnswer"
      type="text" 
      id="anagram-input"
      class="col-2 p-2"
      name="anagram-input"
      placeholder="type here"
      >
      
      <div class="row justify-content-center">
        <ol class="col col-3 list list-numbered mt-3">
          <li
            v-for="anagram in currentAnagrams"
            :key="anagram"
            class="list-item"
          >
            {{ anagram }}
          </li>
          <!-- <li class="list-item">bread</li>
          <li class="list-item">read</li>
          <li class="list-item">red</li> -->
        </ol>
      </div>
      
    </div>
  </div>
</template>

<script>

import anagrams from '@/data/anagrams.js';

  export default {
    name: 'AnagramGamePlay',
    props: {
      wordLength: Number
    },
    data() {
      return {
        currentWord: '',
        currentAnagrams: [],
        userInput: '',
        score: 0,
        timeLeft: 60,
        timer: null,
      };
    },
    methods: {
      startGame() {
        this.currentAnagrams = anagrams[this.wordLength];
        this.timer = setInterval(this.updateTimer, 1000);
        this.nextWord();
      },
      endGame() {
        clearInterval(this.timer);
        this.$emit('end-game');
      },
      updateTimer() {
        if (this.timeLeft > 0) {
          this.timeLeft--;
        } else {
          clearInterval(this.timer);
          this.$emit('end-game');
        }
      },
      nextWord() {
        if (this.currentAnagrams.length === 0) {
          this.endGame();
          return;
        }
        const words = anagrams[this.wordLength];
        const randomArray = words[Math.floor(Math.random() * words.length)];
        this.currentWord = randomArray[0];
        this.currentAnagrams = randomArray.slice(1);
      },
      checkAnswer() {
        const lowerCaseInput = this.userInput.toLowerCase().trim();

        if (this.currentAnagrams.includes(lowerCaseInput)) {
          this.score++;
          this.currentAnagrams = this.currentAnagrams.filter(anagram => anagram !== lowerCaseInput);
          this.userInput = '';
          if (this.currentAnagrams.length === 0) {
            this.nextWord();
          }
        }
      },
    },
    mounted() {
      this.startGame();
    }
  }
</script>

<style scoped>

#anagram-game-play {
  font-size: 1.6em;
  margin: auto;
  width: 90%;
}

</style>