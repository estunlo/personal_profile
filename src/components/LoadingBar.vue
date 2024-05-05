<template>
  <v-progress-linear color="teal darken-3"
                     id="loading"
                     indeterminate
                     height="6">
  </v-progress-linear>
</template>

<script>
export default {
  name : 'LoadingBar'
}
</script>

<style scoped lang="less">
  #loading {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 7;
  }
</style>
