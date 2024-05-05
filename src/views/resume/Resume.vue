<template>
  <v-container fluid class="pa-0" style="overflow-y: auto;" id=resume>
    <v-fade-transition>
      <v-row justify="center" align="start" class="mb-5 mt-12 mx-auto" v-if="!fetching">
        <v-col cols="10" ref="header" class="d-flex justify-start align-start flex-wrap flex-row pa-0">
          <v-col cols="8" sm="9" md="9" lg="9" xl="9" class="d-flex flex-wrap flex-row align-content-sm-start align-content-lg-center pa-0">
            <!--      Name      -->
            <v-col cols="12" class="pa-0">
              <span :class="`${ $vuetify.breakpoint.xsOnly ? 'display-1' : 'display-2' }`">{{ detail.name }}</span>

            </v-col>

            <!--      Title      -->
            <v-col cols="12" :class="`mb-${ $vuetify.breakpoint.xsOnly ? 0 : 5 } pa-0`">
              <span class="teal--text text--darken-3" :class="`${ $vuetify.breakpoint.xsOnly ? 'body-2' : 'title' }`">{{ detail.title }}</span>
            </v-col>

            <!--    phone      -->
            <v-col cols="12" lg="6" class="d-flex align-center pa-0">
              <v-icon :size="16" class="mr-1" color="teal darken-3">mdi-phone</v-icon>
              <span class="caption font-weight-bold">{{ detail.phone }}</span>
            </v-col>

            <!--      email      -->
            <v-col cols="12" lg="6" class="d-flex align-center pa-0" :class="`mt-${ $vuetify.breakpoint.xsOnly ? 2 : 0 }`">
              <v-icon :size="$vuetify.breakpoint.xsOnly ? 13 : 15" class="mr-1" color="teal darken-3">mdi-at</v-icon>
              <span class="caption font-weight-bold">{{ detail.email }}</span>
            </v-col>

            <!--    location      -->
            <v-col cols="12" lg="6" class="d-flex align-center pa-0">
              <v-icon :size="$vuetify.breakpoint.xsOnly ? 13 : 16" class="mr-1" color="teal darken-3">mdi-map-marker</v-icon>
              <span class="caption font-weight-bold">{{ detail.location }}</span>
            </v-col>
          </v-col>

          <!--    ICON      -->
          <v-col cols="3" class="d-flex align-center pa-0">
            <v-img :src="require('@/assets/images/my_awesome_picture.jpg')"
                   :max-width="$vuetify.breakpoint.xsOnly ? 110 : 160"
                   style="border-radius: 5px;">
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0"
                       align="center"
                       justify="center">
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-col>

          <v-col cols="12" lg="8" ref="left-section" class="d-flex justify-start align-start flex-row flex-wrap mt-5 pa-0" :class="`mr-${ $vuetify.breakpoint.xsOnly ? 0 : 5 }`">
            <!--    PROFILE      -->
            <Profile :profile_props="detail.profile"></Profile>

            <!--    EXPERIENCE      -->
            <Experience :experience_props="detail.experience"></Experience>
          </v-col>

          <v-col cols="12" lg="4" ref="right-section" class="d-flex justify-start align-start flex-row flex-wrap mt-5 pa-0" :class="`mr-${ $vuetify.breakpoint.xsOnly ? 0 : 5 }`">
            <!--    SKILLS      -->
            <Skill :skill_props="detail.skills"></Skill>

            <!--    TOOLS      -->
            <v-col cols="12" class="mt-5 pa-0">
              <div class="d-flex justify-space-between align-center">
                <span :class="`${ $vuetify.breakpoint.xsOnly ? 'headline' : 'display-1' }`" class="font-weight-medium teal--text text--darken-3" style="letter-spacing: 3px !important;">TOOLS</span>
              </div>
              <div class="section-grid"></div>
            </v-col>

            <v-col cols="12" class="my-4 d-flex justify-start align-start flex-row flex-wrap pa-0">
              <span class="grey--text text--darken-4 body-2 mr-4 px-3 mt-3 skill font-weight-medium"
                    v-for="(tool, index) in detail.tools"
                    :key="index">{{ tool }}</span>
            </v-col>

            <!--    EDUCATION      -->
            <v-col cols="12" class="mt-5 pa-0">
              <span :class="`${ $vuetify.breakpoint.xsOnly ? 'headline' : 'display-1' }`" class="font-weight-medium teal--text text--darken-3" style="letter-spacing: 3px !important;">EDUCATION</span>
              <div class="section-grid"></div>
            </v-col>

            <v-col cols="12" class="my-4 d-flex flex-column pa-0">
              <span class="title">{{ detail.education.degree }}</span>
              <span class="subtitle-1 font-weight-black teal--text text--darken-3 mt-2">{{ detail.education.college }}</span>
              <v-col cols="12" class="d-flex align-center pa-0">
                <v-icon :size="$vuetify.breakpoint.xsOnly ? 13 : 16" class="mr-1" color="grey darken-3">mdi-calendar-month-outline</v-icon>
                <span class="body-2 grey--text text--darken-2">{{ detail.education.startAt }} - {{ detail.education.endAt }}</span>
              </v-col>
            </v-col>

            <!--    LANGUAGES      -->
            <v-col cols="12" class="mt-5 pa-0">
              <span :class="`${ $vuetify.breakpoint.xsOnly ? 'headline' : 'display-1' }`" class="font-weight-medium teal--text text--darken-3" style="letter-spacing: 3px !important;">LANGUAGE</span>
              <div class="section-grid"></div>
            </v-col>

            <v-col cols="12" class="my-4 d-flex justify-start align-start flex-row flex-wrap pa-0">
            <span class="grey--text text--darken-4 body-2 mr-4 px-3 mt-3 skill font-weight-medium"
                  v-for="(lang, index) in detail.languages"
                  :key="index">{{ lang }}</span>
            </v-col>
          </v-col>
        </v-col>
      </v-row>
    </v-fade-transition>
  </v-container>
</template>

<script>
import Experience from './Experience'
import Profile from './Profile'
import Skill from './Skill'

export default {
  created () {
    this.getResumeDetail()
  },

  components : {
    Skill,
    Experience,
    Profile
  },

  methods : {
    async getResumeDetail () {
      let resumeDetail = await this.$firebase.resumeDetail()
      if (resumeDetail) {
        this.detail = { ...resumeDetail }
        this.fetching = false
      }
    }
  },

  data () {
    return {
      fetching : true,

      detail : {
        education  : {
          college : '',
          degree  : '',
          endAt   : '',
          startAt : ''
        },
        phone      : '',
        location   : '',
        linkedin   : '',
        name       : '',
        title      : '',
        email      : '',
        experience : [],
        profile    : '',
        skills     : [],
        languages  : []
      }
    }
  }
}
</script>

<style lang="less" scoped>

</style>
