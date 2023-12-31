<template>
  <div id="game-container" class="text-center">

  <!-- Results -->

    <transition name="slide">
      <template v-if="timeLeft === 0">
        <div>
          <h2>Time's Up!</h2>
          <strong class="big">You Answered</strong>
          <div class="huge">{{ score }}</div>
          <strong class="big">Questions Correctly</strong>
          <div class="col">
            <button 
              class="btn btn--raised btn-outline-light rounded-3 form-control m-1"
              @click="restart()">
                Play Again with Same Settings
            </button>
            <button 
              class="btn btn-secondary rounded-3 form-control m-1"
              @click="config()">
                Change Settings
            </button>
          </div>
        </div>
      </template>
    </transition>

<!-- Play Game -->

    <transition name="slide-right">
      <template v-if="timeLeft > 0">
        <div>
          <div class="row border-bottom" id="scoreboard">
            <div class="col px-3 text-right">
              <GameScore :score="score" /> 
            </div>
            <div class="col px-3 text-right">
              <GameTimer :timeLeft="timeLeft" />
            </div>
          </div>
          <div :class="equationClass" id="equation">
            <GameEquation 
                :question="question"
                :answer="+input"
                :answered="answered"
              />
          </div>
          <div class="row" id="buttons">
            <div class="col">
              <button 
                class="btn btn-primary number-button"
                v-for="button in buttons" 
                :key="button"
                @click="setInput(button)"
              >
              {{ button }}</button>
              <button 
                class="btn btn-primary" 
                id="clear-button"
                @click="clear"
              >
              Clear</button>
            </div>
          </div>
        </div>
      </template>
    </transition>
  </div>
</template>
  
<script>

  import GameScore from './GameScore.vue';
  import GameTimer from './GameTimer.vue';
  import GameEquation from './GameEquation.vue';

  import { randInt } from '../../helpers/helpers';
  
  export default {
    name: "GamePlay",
    components: {
      GameScore,
      GameTimer,
      GameEquation,
    },
    data() {
      return {
        buttons: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
        input: '',
        operands: { num1: '1', num2: '1' },
        answered: false,
        score: 0,
        gameLength: 30,
        timeLeft: 0,
      };
    },
    props: {
      operation: String,
      maxNumber: String,
    },
    methods: {
    config() {
      this.$router.push('/math-facts');
    },
    // this setInput might be useful lesson 4 chptr 11
    setInput(value) {
      this.input += String(value);
      this.input = String(Number(this.input));
      this.answered = this.checkAnswer(
        this.input,
        this.operation,
        this.operands
      );
      if (this.answered) {
        setTimeout(this.newQuestion, 300);
        this.score++;
      }
    },
    clear() {
      this.input = '';
    },
    getRandNumbers(operator, low, high) {
      let num1 = randInt(low, high);
      let num2 = randInt(low, high);
      const numHigh = Math.max(num1, num2);
      const numLow = Math.min(num1, num2);

      if(operator === '-') {
        // Make sure higher num comes first
        num1 = numHigh;
        num2 = numLow;
      }

      if (operator === '/') { 
        if(num2 === 0) {
          // No division by zero
          num2 = randInt(1, high);
        }
        num1 = (num1 * num2);
      }
        return {num1, num2};
      },
      checkAnswer(userAnswer, operation, operands) {
        if (isNaN(userAnswer)) return false; // User hasn't answered

        let correctAnswer;
        switch(operation) {
          case '+':
            correctAnswer = operands.num1 + operands.num2;
            break;
          case '-':
            correctAnswer = operands.num1 - operands.num2;
            break;
          case 'x':
            correctAnswer = operands.num1 * operands.num2;
            break;
          default: // division
            correctAnswer = operands.num1 / operands.num2;
        }
          return (parseInt(userAnswer) === correctAnswer);
      },
      newQuestion() {
        this.input= '';
        this.answered= false;
        this.operands = this.getRandNumbers(this.operation, 0, this.maxNumber);
      },
      startTimer() {
        window.addEventListener('keyup', this.handleKeyUp);

        this.timeLeft = this.gameLength;
        if (this.timeLeft > 0) {
          this.timer = setInterval(() => {
            this.timeLeft--;
            if (this.timeLeft === 0) {
              clearInterval(this.timer);
              window.removeEventListener('keyup', this.handleKeyUp);
            }
          }, 1000);
        }
      },
      restart() {
        this.score = 0;
        this.startTimer();
        this.newQuestion();
      },
      handleKeyUp(e) {
        e.preventDefault(); // prevent the normal behavior of the key
        if (e.keyCode === 32 || e.keyCode === 13) {
          // space/Enter
          this.clear();
        } else if (e.keyCode === 8) {
          // backspace
          this.input = this.input.substring(0, this.input.length - 1);
        } else if (!isNaN(e.key)) {
          this.setInput(e.key);
        }
      },
    },
    mounted() {
      this.newQuestion();
      this.startTimer();
    },
    computed: {
      question() {
        const num1 = this.operands.num1;
        const num2 = this.operands.num2;
        const equation = `${num1} ${this.operation} ${num2}`;
        return equation;
        },
      equationClass() {
        if (this.answered) {
          return 'row text-primary my-2 fade';
        } else {
          return 'row text-secondary my-2';
        }
      },
    },
  };
  
</script>

<style scoped>

/* button sytels */

  button.number-button {
    background-color: var(--primary);
    border-radius: .25em;
    font-size: 3em;
    height: 2em;
    margin: .1em;
    text-align: center;
    width: 2em;
  }

  #clear-button {
    background-color: var(--primary);
    border-radius: .25em;
    font-size: 3em;
    height: 2em;
    margin: .1em;
    text-align: center;
    width: 4.2em;
  }

  #scoreboard {
    font-size: 1.5em;
  }

/* Time's Up sytels */

  .big {
    font-size: 1.5em;
  }

  .huge {
    font-size: 5em;
  }

/* Time's Up Transitions */


  .slide-leave-active,
  .slide-enter-active {
    position: absolute;
    top: 56px;
    transition: 1s;
    width: 380px;
  }
  .slide-enter-from {
    transform: translate(-100%, 0);
    transition: opacity .5s;
  }
  .slide-leave-to {
    transform: translate(100%, 0);
    opacity:0;
  }
  .slide-right-leave-active,
  .slide-right-enter-active {
    position: absolute;
    top: 56px;
    transition: 1s;
    width: 380px;
  }
  .slide-right-enter-from {
    transform: translate(100%, 0);
    transition: opacity .5s;
  }
  .slide-right-leave-to {
    transform: translate(-100%, 0);
    opacity:0;
  }

</style>