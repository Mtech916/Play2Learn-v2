<template>
  <div class="row mx-1 my-3">
    <button 
      class="form-control btn btn--raised btn-outline-light rounded-3 fs-5"
      @click="$emit('play-button-click')"
    >
    Play!</button>
  </div>
</template>

<script>

export default {
  name: 'PlayButton',
}

</script>
