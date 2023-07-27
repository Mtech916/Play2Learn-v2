<template>
  <strong>Time Left: {{ timeLeft }}</strong>  
</template>

<script>

export default {
  name: 'GameTimer',
  props: {
    timeLeft: Number,
  }
}

</script>