<template>
  <div class="row mx-1 my-3">
    <label 
      class="col fw-bold"
      :for="id">{{ label }}</label>
      <select 
      class="col form-select" 
      :id="id" :value="currentValue"
      @input="$emit('input', $event.target.value)"
    >
      <option
        v-for="option in options" 
        :key="option[1]" 
        :value="option[1]"
      >
      {{ option[0] }}</option>
    </select>
  </div>
</template>

<script>

export default {
  name: 'SelectInput',
  emits: ['input'],
  props: {
    id: String,
    label: String,
    options: Array,
    currentValue: String,
  },
}

</script>

<style scoped>

</style>