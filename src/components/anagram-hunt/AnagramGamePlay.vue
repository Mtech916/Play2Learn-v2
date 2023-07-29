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
            v-for="anagram in guessedAnagrams"
            :key="anagram"
            class="list-item"
          >
            {{ anagram }}
          </li>
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
        guessedAnagrams: [],
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
          this.endGame();
        }
      },
      getRandomWordFromArray(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
      },
      nextWord() {
        if (this.currentAnagrams.length === 0) {
          this.fetchNewAnagrams();
        }
        const randomIndex = Math.floor(Math.random() * this.currentAnagrams.length);
        this.currentWord = this.currentAnagrams[randomIndex][0];
        this.currentAnagrams = this.currentAnagrams[randomIndex].slice(1);
      },
      fetchNewAnagrams() {
        const words = anagrams[this.wordLength];
        this.currentAnagrams = [...words];
      },
      checkAnswer() {
        const lowerCaseInput = this.userInput.toLowerCase().trim();

        if (this.currentAnagrams.includes(lowerCaseInput)) {
          this.score++;
          this.currentAnagrams = this.currentAnagrams.filter(anagram => anagram !== lowerCaseInput);
          this.guessedAnagrams.push(lowerCaseInput);
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