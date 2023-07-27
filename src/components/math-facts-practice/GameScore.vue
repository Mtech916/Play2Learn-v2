<template>
  <strong>Score: {{ score }}</strong>  
</template>

<script>

export default {
  name: 'GameScore',
  props: {
    score: Number
  }
}

</script>