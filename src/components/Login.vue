<template>
  <v-container>
    <v-row justify-center aling-center>
      <v-card style="border-radius: 10px" class="d-flex justify-center align-end flex-row flex-wrap">
        <v-col cols="11" class="login-google">
          <v-img :src="require('@/assets/images/icon_google.png')"></v-img>
        </v-col>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name : 'Login'
}
</script>

<style lang="less" scoped>
  .login-google {

  }
</style>
