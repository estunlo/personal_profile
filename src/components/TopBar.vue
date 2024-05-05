<template>
  <nav class="top-bar-container">
    <div class="nav-list">
      <router-link :to="item.link" v-for="(item, index) in items" :key="index" class="nav-item grey--text text--darken-1 subtitle-1 font-weight-medium mb-5">{{ item.text }}</router-link>
    </div>
  </nav>
</template>

<script>

export default {
  name : 'TopBar',

  data : () => ({
    items : [
      {
        text : 'About Me',
        link : '/'
      },
      {
        text : 'Resume',
        link : '/resume'
      }]
  })
}
</script>

<style scoped lang="less">
  .top-bar-container {
    padding-top: 24px;
    display: flex;
    justify-content: flex-end;
    align-content: center;

    .nav-list {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      padding: 0;

      .nav-item {
        list-style: none;
        padding: 23px 35px;
        margin: 0 20px;
        height: 35px;
        line-height: 3px !important;
        position: relative;
        transition: 0.5s;
        border: 2px solid transparent;
        cursor: pointer;
        text-decoration: none;

        &:hover {
          &::before, &::after {
            transform: scale(1);
          }
        }

        &::before, &::after {
          width: 100%;
          height: 100%;
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          transform: scale(0);
          transition: 0.5s;
        }

        &::before {
          border-bottom: 2px solid #757575;
          transform-origin: 0 100%;
        }

        &::after {
          transform-origin: 100% 0%;
        }
      }
    }
  }

  @media only screen and (max-width: 600px) {
    .nav-list {
      border-bottom: 1px solid rgba(0, 0, 0, .125);
      justify-content: center !important;
    }
  }

  @media only screen and (min-width: 1264px) {
    .top-bar-container {
      display: none !important;

    }
  }
</style>
