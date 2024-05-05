<template>
  <tui-image-editor :include-ui="useDefaultUI"></tui-image-editor>
</template>

<script>
import { ImageEditor } from '@toast-ui/vue-image-editor'

export default {
  name : 'Demo',

  components : {
    'tui-image-editor' : ImageEditor
  },

  data () {
    return {
      useDefaultUI : true
    }
  }
}
</script>

<style scoped>

</style>
