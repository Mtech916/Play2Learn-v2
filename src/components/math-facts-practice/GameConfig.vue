<template>

  <div id="config-container">
    <SelectInput 
        :currentValue="operation" 
        label="Operation" id="operation"  
        v-model="operation" 
        :options="operations"
        @input="(o) => (this.operation = o)" 
      />
    <SelectInput 
        :currentValue="maxNumber" 
        label="Maximum Number" 
        id="max-number" 
        v-model="maxNumber" 
        :options="numbers" 
        @input="(n) => (this.maxNumber = n)"
      />
      <div class="row justify-content-center pt-3">
        <div>
          <ol class="list list-numbered fs-5">
            <li class="list-item">Select an Opation</li>
            <li class="list-item">Press <span class="fw-bold">Play!</span></li>
            <li class="list-item">How many problems can you solve in 30 seconds?</li>
          </ol>
        </div>
      </div>
    <PlayButton @play-button-click="play"/>
  </div>

</template>

<script>

import SelectInput from './SelectInput.vue';
import PlayButton from './PlayButton.vue';

export default {
  name: "GameConfig",
  components: {
    SelectInput,
    PlayButton,
  },
  data() {
    return {
      operations: [
        ['Addition', '+'],
        ['Subtraction', '-'],
        ['Multiplication', 'x'],
        ['Division', '/']
      ],
      operation: '+',
      maxNumber: '10',
    };
  },
  methods: {
    play() {
      this.$router.push({
        name: 'GamePlay',
        query: {
          operation: this.operation,
          maxNumber: this.maxNumber,
        },
      });
    },
  },
  computed: {
    numbers() {
      const numbers = [];
      for (let number = 2; number <= 100; number++) {
        numbers.push([number, number]);
      }
        return numbers;
    },
  },
};

</script>