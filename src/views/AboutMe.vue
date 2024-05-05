<template>
  <v-container fluid class="pa-0" id="about-me">
    <header class="header-section">
      <div class="text-center">
        <p :class="`${$vuetify.breakpoint.xsOnly ? 'headline' : 'display-1'}`">Hello, My name is Chester.</p>
        <p :class="`${$vuetify.breakpoint.xsOnly ? 'headline' : 'display-1'}`">I am a Front-end Developer.</p>
      </div>
    </header>
    <main class="main-section">
      <v-container>
        <v-row>
          <v-col cols="12" sm="9" md="9" lg="9" xl="9">
            <p class="title">About me</p>
            <p class="subtitle-1 grey--text text--darken-1">I am front-end developer with 3+ years of experience, specializes in web development, focused on crafting clean & user‑friendly experiences. Currently I am working as a front-end developer at <a class="hkm" href="https://www.onlinerepublic.com/" target="_blank">Online Republic</a>. Outside of work, I am a fan of travel, movie, snowboarding and games.</p>
          </v-col>

          <v-col cols="12" sm="3" md="3" lg="3" xl="3">
            <p class="title">Contact</p>
            <v-row class="flex-column ml-3">
              <div v-for="(icon, index) in icons" :key="index" class="contact-item" @click="externalLink(icon.href)">
                <v-icon size="33" color="grey darken-4" class="mr-2 mb-1 contact-icon" :class="icon.class">{{ icon.icon }}</v-icon>
                <span class="body-1">{{ icon.text }}</span>
              </div>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </main>
    <footer v-if="$vuetify.breakpoint.xsOnly" class="footer-section py-1">
      <span class="caption ml-4 grey--text text--darken-2">&copy; 2019 Chester Lo</span>
    </footer>
  </v-container>
</template>

<script>
import { ref } from '@vue/composition-api'
import { externalLink } from '../lib/functions'

export default {
  setup () {
    let icons = ref([
      {
        icon  : 'mdi-linkedin',
        href  : 'https://www.linkedin.com/in/chester-lo-a89128121/',
        class : 'linkedin',
        text  : 'LinkedIn'
      },
      {
        icon  : 'mdi-facebook',
        href  : 'https://www.facebook.com/chester.lo.71/',
        class : 'facebook',
        text  : 'Facebook'
      },
      {
        icon  : 'mdi-email',
        href  : 'mailto: chester8484@gmail.com',
        class : 'email',
        text  : 'Email'
      }
    ])

    return {
      icons,
      externalLink
    }
  }
}
</script>

<style lang="less" scoped>
  #about-me {
    height: 100vh;
    position: relative;
    background-color: #fafafa;

    .header-section {
      padding: 140px 15px;
      background-color: #f5f8fa;
      border-bottom: 1px solid rgba(0,0,0,.125);
      filter: grayscale(100%);
      background-size: cover;
      background-position: bottom;
      p {
        font-family: libre baskerville,Georgia,serif !important;
      }
    }

    .main-section {
      max-width: 700px;
      margin: 50px auto 0;

      .hkm {
        color: #00695C;
        font-family: merriweather,serif !important;
        font-style: italic;
        font-weight: 700;
        font-size: 18px;
      }

      .contact-item {
        cursor: pointer;
        &:hover {
          color: #00695C !important;

          .contact-icon {
            color: #00695C !important;
          }
        }
      }
    }

    .footer-section {
      width: 100%;
      border-top: 1px solid rgba(0,0,0,.125);
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }

  @media only screen and (max-width: 600px) {
    .header-section {
      background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(../assets/images/IMG_20190303_143319.jpg);
      margin-top: 0 !important;
      border-top: 0 !important;
      padding: 60px 15px !important;
      p {
        color: #fafafa;
      }
    }

    .main-section {
      margin-top: 20px !important;
    }
  }
</style>
