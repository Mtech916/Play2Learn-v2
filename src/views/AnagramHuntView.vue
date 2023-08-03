<template>
  <h1 id="game-heading" class="row justify-content-center py-5">Anagram Hunt</h1>
  
  <AnagramConfig v-if="!gameStarted" @start-game="startGame" />
  <AnagramGamePlay v-else-if="gameStarted && !gameOver" :wordLength="wordLength" @end-game="onEndGame" @update-score="updateScore"/>
  <AnagramGameOver v-else :score="score" @restart-game="restartGame" @back-to-config="backToConfig" />

</template>



<script>

import AnagramConfig from '../components/anagram-hunt/AnagramConfig.vue';
import AnagramGamePlay from '../components/anagram-hunt/AnagramGamePlay.vue';
import AnagramGameOver from '../components/anagram-hunt/AnagramGameOver.vue';

  export default {
    name: 'AnagramHunt',
    components: {
      AnagramConfig,
      AnagramGamePlay,
      AnagramGameOver
    },
    data() {
      return {
        gameStarted: false,
        gameOver: false,
        wordLength: null,
        selectedAnagrams: [],
        score: 0,
      }
    },
    methods: {
      startGame(wordLength) {
        this.wordLength = wordLength;
        this.gameStarted = true;
      },
      updateScore(newScore) {
        this.score = newScore;
      },
      onEndGame() {
      this.gameOver = true;
      },
      restartGame() {
        this.score = 0;
        this.selectedAnagrams = [];
        this.gameStarted = true;
        this.gameOver = false;
      },
      backToConfig() {
        this.wordLength = null;
        this.score = 0;
        this.gameStarted = false;
        this.gameOver = false;
      },
    }
  }
</script>
