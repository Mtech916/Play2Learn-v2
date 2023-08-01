<template>
  <div class="row mx-1 my-3">
    <button 
      class="form-control btn btn--raised rounded-3"
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
