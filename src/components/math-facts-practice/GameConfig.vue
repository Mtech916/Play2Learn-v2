<template>

  <div id="config-container">
    <h1>Play2Learn</h1>
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
      this.$router.push(
        '/play/' + encodeURIComponent(this.operation) + '/' + this.maxNumber
      );
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