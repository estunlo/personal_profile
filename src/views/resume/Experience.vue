<template>
  <section>
    <v-col cols="12" lg="11" class="mt-5 pa-0">
      <div class="d-flex justify-space-between align-center">
        <span
          :class="`${$vuetify.breakpoint.xsOnly ? 'headline' : 'display-1'}`"
          class="font-weight-medium teal--text text--darken-3"
          style="letter-spacing: 3px !important"
          >EXPERIENCE</span
        >
        <div v-if="isContentEditable">
          <v-btn
            text
            icon
            color="teal darken-3"
            @click="activateEditMode"
            v-if="!editMode"
          >
            <v-icon>mdi-pencil</v-icon>
          </v-btn>

          <v-btn
            large
            text
            icon
            color="teal darken-3"
            @click="addNewExperienceObj"
            v-if="editMode"
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>

          <v-btn
            text
            icon
            color="teal darken-3"
            @click="disableEditMode"
            v-if="editMode"
          >
            <v-icon>mdi-cancel</v-icon>
          </v-btn>

          <v-btn
            text
            icon
            color="teal darken-3"
            @click="updateExperience"
            v-if="editMode"
          >
            <v-icon>mdi-file-upload</v-icon>
          </v-btn>
        </div>
      </div>
      <div class="section-grid"></div>
    </v-col>

    <template v-if="editMode">
      <v-col
        cols="12"
        lg="11"
        class="mt-4 mb-0 d-flex flex-row flex-wrap py-0 pl-3 pr-0"
        v-for="(exp, mainIndex) in experience_props"
        :key="mainIndex"
      >
        <v-col cols="12" class="px-0 py-4" v-if="mainIndex > 0">
          <div class="divider-line"></div>
        </v-col>

        <v-col cols="12" class="pa-0">
          <v-text-field label="Position" v-model="exp.position"></v-text-field>
        </v-col>
        <v-col cols="12" class="pa-0">
          <v-text-field label="Company" v-model="exp.company"></v-text-field>
        </v-col>
        <v-col cols="12" class="d-flex align-center pa-0">
          <v-icon
            :size="$vuetify.breakpoint.xsOnly ? 13 : 16"
            class="mr-1"
            color="grey darken-3"
            >mdi-calendar-month-outline</v-icon
          >
          <v-text-field
            label="Start At"
            v-model="exp.startAt"
            class="mr-3"
          ></v-text-field>
          -
          <v-text-field
            label="End At"
            v-model="exp.endAt"
            class="ml-3"
          ></v-text-field>
        </v-col>
        <v-col cols="12" class="d-flex align-center pa-0">
          <v-icon
            :size="$vuetify.breakpoint.xsOnly ? 13 : 16"
            class="mr-1"
            color="grey darken-2"
            >mdi-map-marker</v-icon
          >
          <v-text-field label="Location" v-model="exp.location"></v-text-field>
        </v-col>
        <v-col
          cols="12"
          class="d-flex align-center mt-4 pa-0"
          v-for="(des, desIndex) in exp.description"
          :key="desIndex"
        >
          <v-textarea
            outlined
            :label="`Description ${desIndex + 1}`"
            v-model="exp.description[desIndex]"
            hide-details
          ></v-textarea>
        </v-col>
        <v-col cols="12" class="d-flex justify-end px-0">
          <v-btn
            color="teal darken-3"
            outlined
            class="px-2 py-1"
            @click="addDescriptionSlot(exp.description, mainIndex)"
            >New Slot</v-btn
          >
        </v-col>
      </v-col>
    </template>

    <template v-else>
      <v-col
        cols="12"
        lg="11"
        class="mt-4 mb-0 d-flex flex-row flex-wrap py-0 pl-3 pr-0"
        v-for="(exp, mainIndex) in experience_props"
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

        <v-col cols="6" lg="4" class="d-flex align-center pa-0">
          <v-icon
            :size="$vuetify.breakpoint.xsOnly ? 13 : 16"
            class="mr-1"
            color="grey darken-3"
            >mdi-calendar-month-outline</v-icon
          >
          <span class="caption grey--text text--darken-3 font-weight-bold"
            >{{ exp.startAt }} - {{ exp.endAt }}</span
          >
        </v-col>
        <v-col cols="6" lg="6" class="d-flex align-center pa-0">
          <v-icon
            :size="$vuetify.breakpoint.xsOnly ? 13 : 16"
            class="mr-1"
            color="grey darken-2"
            >mdi-map-marker</v-icon
          >
          <span class="caption grey--text text--darken-2 font-weight-bold">{{
            exp.location
          }}</span>
        </v-col>
        <v-col
          cols="12"
          lg="12"
          class="d-flex align-center mt-4 pa-0"
          v-for="(des, desIndex) in exp.description"
          :key="desIndex"
        >
          <ul class="job-description">
            <li style="font-size: 13px">{{ des }}</li>
          </ul>
        </v-col>
      </v-col>
    </template>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Experience",

  props: ["experience_props"],

  created() {},

  computed: {
    ...mapState(["isContentEditable"])
  },

  methods: {
    activateEditMode() {
      this.editMode = true;
      this.experience_props.forEach(props => {
        if (!props.description.length) {
          props.description.push("");
        }
      });
    },

    disableEditMode() {
      this.editMode = false;
    },

    addNewExperienceObj() {
      this.experience_props.unshift(this.experienceObj);
    },

    addDescriptionSlot(certainArray, expIndex) {
      if (!certainArray[certainArray.length - 1]) return false;
      this.experience_props[expIndex].description.push("");
    },

    updateExperience() {
      this.experience_props.forEach(props => {
        props.description = props.description.filter(des => des !== "");
      });

      this.$firebase
        .updateResumeDetail({ experience: this.experience_props })
        .then(() => {
          this.disableEditMode();
        });
    }
  },

  data() {
    return {
      editMode: false,

      experienceObj: {
        company: "",
        description: [""],
        endAt: "",
        startAt: "",
        position: "",
        location: ""
      }
    };
  }
};
</script>
