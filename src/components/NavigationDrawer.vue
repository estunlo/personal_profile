<template>
  <v-navigation-drawer width="270"
                       app>
    <v-container style="height: 100%;" class="white--text nav-container">
      <v-row class="flex-column align-center py-12">
        <span class="display-1 my-3">Chester Lo</span>
        <span class="headline font-weight-light">Front-end Developer</span>
      </v-row>
      <v-row class="flex-column align-center">
        <router-link :to="item.link" v-for="(item, index) in items" :key="index" class="nav-item grey--text text--lighten-2 body-1 mb-5">{{ item.text }}</router-link>
      </v-row>
      <div class="bottom contact">
        <v-icon size="20" color="white" class="mr-2 mb-1 contact-icon" :class="icon.class" v-for="(icon, index) in icons" :key="index" @click="openLink(icon.href)">{{ icon.text }}</v-icon>
      </div>
      <!--      <div class="bottom contact">-->
      <!--        <div class="item">-->
      <!--          <v-icon size="20" color="white" class="mr-2 mb-1">mdi-email</v-icon>-->
      <!--          <a target="_blank" class="body-2" href="mailto: chester8484@gmail.com">Email me</a>-->
      <!--        </div>-->
      <!--        <div class="item">-->
      <!--          <v-icon size="20" color="white" class="mr-2 mb-1">mdi-linkedin-box</v-icon>-->
      <!--          <a target="_blank" class="body-2" href="https://www.linkedin.com/in/chester-lo-a89128121/">LinkedIn</a>-->
      <!--        </div>-->
      <!--      </div>-->
    </v-container>
  </v-navigation-drawer>
</template>

<script>
export default {
  name : 'NavigationDrawer',

  methods : {
    openLink (href) {
      window.open(href, '_blank')
    }
  },

  data : () => ({
    items : [
      {
        text : 'About Me',
        link : '/'
      },
      {
        text : 'Resume',
        link : '/resume'
      }],

    icons : [
      {
        text  : 'mdi-email',
        href  : 'mailto: chester8484@gmail.com',
        class : 'email'
      },
      {
        text  : 'mdi-linkedin',
        href  : 'https://www.linkedin.com/in/chester-lo-a89128121/',
        class : 'linkedin'
      },
      {
        text  : 'mdi-facebook',
        href  : 'https://www.facebook.com/chester.lo.71/',
        class : 'facebook'
      }
    ]
  })
}
</script>

<style lang="less">
  .nav-container {
    background-image: linear-gradient(rgba(0, 0, 0, 0.86), rgba(0, 0, 0, 0.86)), url(../assets/images/IMG_20190228_145728.jpg);
    background-size: cover;
    height: 100%;
    position: relative;

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
        border-bottom: 2px solid #F5F5F5;
        border-left: 2px solid #F5F5F5;
        transform-origin: 0 100%;
      }

      &::after {
        border-top: 2px solid #F5F5F5;
        border-right: 2px solid #F5F5F5;
        transform-origin: 100% 0%;
      }
    }

    .bottom {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0));
    }

    .contact {
      display: flex;
      justify-content: center;
      align-content: center;
      padding: 200px 0 70px;

      .contact-icon {
        cursor: pointer;
        transition: .2s;

        &:hover {
          &.email {
            color : rgb(233, 81, 65) !important;
          }

          &.linkedin {
            color : rgb(62, 153, 227) !important;
          }

          &.facebook {
            color : rgb(67, 166, 246) !important;
          }
        }
      }
    }

    /*.contact {*/
    /*  display: flex;*/
    /*  flex-flow: column;*/
    /*  justify-content: center;*/
    /*  align-content: center;*/
    /*  padding: 200px 0 70px;*/

    /*  .item {*/
    /*    margin: 0 auto 15px 35%;*/
    /*    position: relative;*/
    /*    transition: 0.5s;*/
    /*    border-bottom: 1px solid transparent;*/
    /*    cursor: pointer;*/

    /*    &:hover {*/
    /*      &::before, &::after {*/
    /*        transform: scale(1);*/
    /*      }*/
    /*    }*/

    /*    &::before, &::after {*/
    /*      width: 100%;*/
    /*      content: '';*/
    /*      position: absolute;*/
    /*      bottom: 0;*/
    /*      transform: scale(0);*/
    /*      transition: 0.5s;*/
    /*    }*/

    /*    &::before {*/
    /*      border-bottom: 1px solid #FFFFFF;*/
    /*      transform-origin: 0 100%;*/
    /*    }*/

    /*    &::after {*/
    /*      transform-origin: 100% 0%;*/
    /*    }*/

    /*    a {*/
    /*      color: inherit;*/
    /*      text-decoration: none;*/
    /*    }*/
    /*  }*/

    /*}*/
  }
</style>
