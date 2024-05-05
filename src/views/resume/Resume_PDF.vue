<template>
  <v-container fluid class="pa-0" style="overflow-y: auto;" id="resume">
    <v-fade-transition>
      <v-row
        justify="center"
        aling="start"
        class="mb-5 mt-12 mx-auto"
        v-if="!fetching"
      >
        <v-col
          cols="10"
          ref="header"
          class="d-flex justify-start align-start flex-wrap flex-row pa-0"
        >
          <v-col
            cols="12"
            class="d-flex flex-wrap flex-row align-content-sm-start align-content-lg-center pa-0"
          >
            <!--      Name      -->
            <v-col cols="12" class="pa-0">
              <span class="display-2">{{ detail.name }}</span>
            </v-col>

            <!--      Title      -->
            <v-col cols="12" class="mt-0 mb-3 pa-0">
              <span
                class="teal--text text--darken-3 font-weight-medium"
                :class="
                  `${$vuetify.breakpoint.xsOnly ? 'body-2' : 'display-1'}`
                "
                >{{ detail.title }}</span
              >
            </v-col>

            <!--    phone      -->
            <v-col cols="3" class="d-flex align-center pa-0">
              <v-icon :size="16" class="mr-1" color="teal darken-3"
                >mdi-phone</v-icon
              >
              <span class="caption font-weight-bold">{{ detail.phone }}</span>
            </v-col>

            <!--      email      -->
            <v-col
              cols="3"
              class="d-flex align-center pa-0"
              :class="`mt-${$vuetify.breakpoint.xsOnly ? 2 : 0}`"
            >
              <v-icon :size="15" class="mr-1" color="teal darken-3"
                >mdi-at</v-icon
              >
              <span class="caption font-weight-bold">{{ detail.email }}</span>
            </v-col>

            <!--    location      -->
            <v-col cols="3" class="d-flex align-center pa-0">
              <v-icon :size="16" class="mr-1" color="teal darken-3"
                >mdi-map-marker</v-icon
              >
              <span class="caption font-weight-bold">{{
                detail.location
              }}</span>
            </v-col>
          </v-col>

          <!--    ICON      -->
          <!--          <v-col cols="3" class="d-flex align-center justify-center pa-0">-->
          <!--            <v-img :src="require('@/assets/images/my_awesome_picture.jpg')"-->
          <!--                   :max-width="160"-->
          <!--                   style="border-radius: 5px;">-->
          <!--              <template v-slot:placeholder>-->
          <!--                <v-row class="fill-height ma-0"-->
          <!--                       align="center"-->
          <!--                       justify="center">-->
          <!--                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>-->
          <!--                </v-row>-->
          <!--              </template>-->
          <!--            </v-img>-->
          <!--          </v-col>-->

          <v-col
            cols="8"
            ref="left-section"
            class="d-flex justify-start align-start flex-row flex-wrap mt-8 pa-0"
          >
            <!--    PROFILE      -->
            <v-col cols="11" class="pa-0">
              <span
                class="display-1 font-weight-medium teal--text text--darken-3"
                style="letter-spacing: 3px !important;"
                >PROFILE</span
              >
              <div class="section-grid"></div>
            </v-col>

            <v-col cols="11" class="my-4 pa-0">
              <span class="grey--text text--darken-2 body-2">{{
                detail.profile
              }}</span>
            </v-col>

            <!--    EXPERIENCE      -->
            <v-col cols="11" class="mt-5 pa-0">
              <span
                class="display-1 font-weight-medium teal--text text--darken-3"
                style="letter-spacing: 3px !important;"
                >EXPERIENCE</span
              >
              <div class="section-grid"></div>
            </v-col>

            <v-col
              cols="11"
              class="mt-4 mb-0 d-flex flex-row flex-wrap py-0 pl-3 pr-0"
              v-for="(exp, mainIndex) in detail.experience"
              :key="mainIndex"
            >
              <v-col cols="12" class="px-0 py-4" v-if="mainIndex > 0">
                <div class="divider-line"></div>
              </v-col>
              <v-col cols="12" class="pa-0">
                <span class="headline">{{ exp.position }}</span>
              </v-col>

              <v-col cols="12" class="pa-0">
                <span class="teal--text text--darken-4">{{ exp.company }}</span>
              </v-col>
              <v-col cols="4" class="d-flex align-center pa-0">
                <v-icon :size="16" class="mr-1" color="grey darken-3"
                  >mdi-calendar-month-outline</v-icon
                >
                <span class="caption grey--text text--darken-3 font-weight-bold"
                  >{{ exp.startAt }} - {{ exp.endAt }}</span
                >
              </v-col>
              <v-col cols="6" class="d-flex align-center pa-0">
                <v-icon :size="16" class="mr-1" color="grey darken-2"
                  >mdi-map-marker</v-icon
                >
                <span
                  class="caption grey--text text--darken-2 font-weight-bold"
                  >{{ exp.location }}</span
                >
              </v-col>
              <v-col
                cols="12"
                class="d-flex align-center mt-4 pa-0"
                v-for="(des, desIndex) in exp.description"
                :key="desIndex"
              >
                <ul class="job-description">
                  <li style="font-size: 13px;">{{ des }}</li>
                </ul>
              </v-col>
            </v-col>
          </v-col>

          <v-col
            cols="4"
            ref="right-section"
            class="d-flex justify-start align-start flex-row flex-wrap mt-8 pa-0"
          >
            <!--    SKILLS      -->
            <v-col cols="12" class="pa-0">
              <span
                class="display-1 font-weight-medium teal--text text--darken-3"
                style="letter-spacing: 3px !important;"
                >TECH STACK</span
              >
              <div class="section-grid"></div>
            </v-col>

            <v-col
              cols="12"
              class="my-4 d-flex justify-start align-start flex-row flex-wrap pa-0"
            >
              <span
                class="grey--text text--darken-4 body-2 mr-4 px-3 mt-3 skill font-weight-medium"
                v-for="(skill, index) in detail.skills"
                :key="index"
                >{{ skill }}</span
              >
            </v-col>

            <!--    TOOLS      -->
            <v-col cols="12" class="mt-5 pa-0">
              <span
                class="display-1 font-weight-medium teal--text text--darken-3"
                style="letter-spacing: 3px !important;"
                >TOOLS</span
              >
              <div class="section-grid"></div>
            </v-col>

            <v-col
              cols="12"
              class="my-4 d-flex justify-start align-start flex-row flex-wrap pa-0"
            >
              <span
                class="grey--text text--darken-4 body-2 mr-4 px-3 mt-3 skill font-weight-medium"
                v-for="(tool, index) in detail.tools"
                :key="index"
                >{{ tool }}</span
              >
            </v-col>

            <!--    EDUCATION      -->
            <v-col cols="12" class="mt-5 pa-0">
              <span
                class="display-1 font-weight-medium teal--text text--darken-3"
                style="letter-spacing: 3px !important;"
                >EDUCATION</span
              >
              <div class="section-grid"></div>
            </v-col>

            <v-col cols="12" class="my-4 d-flex flex-column pa-0">
              <span class="title">{{ detail.education.degree }}</span>
              <span
                class="subtitle-1 font-weight-black teal--text text--darken-3 mt-2"
                >{{ detail.education.college }}</span
              >
              <v-col cols="12" class="d-flex align-center pa-0">
                <v-icon :size="16" class="mr-1" color="grey darken-3"
                  >mdi-calendar-month-outline</v-icon
                >
                <span class="body-2 grey--text text--darken-2"
                  >{{ detail.education.startAt }} -
                  {{ detail.education.endAt }}</span
                >
              </v-col>
            </v-col>

            <!--    LANGUAGES      -->
            <v-col cols="12" class="mt-5 pa-0">
              <span
                class="display-1 font-weight-medium teal--text text--darken-3"
                style="letter-spacing: 3px !important;"
                >LANGUAGE</span
              >
              <div class="section-grid"></div>
            </v-col>

            <v-col
              cols="12"
              class="my-4 d-flex justify-start align-start flex-row flex-wrap pa-0"
            >
              <span
                class="grey--text text--darken-4 body-2 mr-4 px-3 mt-3 skill font-weight-medium"
                v-for="(lang, index) in detail.languages"
                :key="index"
                >{{ lang }}</span
              >
            </v-col>
          </v-col>
        </v-col>
      </v-row>
    </v-fade-transition>
  </v-container>
</template>

<script>
// import axios from 'axios'

export default {
  created() {
    this.getResumeDetail();
  },

  methods: {
    async getResumeDetail() {
      let resumeDetail = await this.$firebase.resumeDetail();
      if (resumeDetail) {
        this.detail = {
          ...resumeDetail,
          experience: resumeDetail.experience
        };
        this.fetching = false;
      }
    }
  },

  data() {
    return {
      fetching: true,

      detail: {
        education: {
          college: "",
          degree: "",
          endAt: "",
          startAt: ""
        },
        phone: "",
        location: "",
        linkedin: "",
        name: "",
        title: "",
        email: "",
        experience: [],
        profile: "",
        skills: [],
        languages: []
      }
    };
  }
};
</script>

<style lang="less" scoped>
#resume {
  .section-grid {
    height: 2px;
    background-color: #00695c;
  }

  .job-description {
    list-style-position: inside;
    list-style: disc;
  }

  .skill {
    border-bottom: 1px solid black;
  }
}
</style>
