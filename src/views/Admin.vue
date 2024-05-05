<template>
  <div class="label">green</div>
</template>

<script>

export default {
  name : 'Admin',

  created () {
    class Screen {
      constructor (width, height, dimensions) {
        this.width = width
        this.height = height
      }

      diagonal () {
        return Math.sqrt(Math.pow(this.width, 2) + Math.pow(this.height, 2))
      }

      set dimensions (definition) {
        var dimensions = definition.split('x')
        this.width = parseInt(dimensions[0])
        this.height = parseInt(dimensions[1])
      }
    }

    let width = 500
    let height = 600
    let screen = new Screen(width, height)
    screen.width = 800
    console.log(screen.diagonal()) // Should print 1000.
    screen.dimensions = '400x300'
    console.log(screen.diagonal()) // Should print 500.
    console.log(screen.width)
    console.log(screen.height)
  },

  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
</style>
