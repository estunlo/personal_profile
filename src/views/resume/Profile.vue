<template>
  <section style="width: 100%;">
    <v-col cols="12" lg="11" class="pa-0">
      <div class="d-flex justify-space-between align-center">
        <span
          :class="`${$vuetify.breakpoint.xsOnly ? 'headline' : 'display-1'}`"
          class="font-weight-medium teal--text text--darken-3"
          style="letter-spacing: 3px !important;"
          >PROFILE</span
        >

        <div v-if="isContentEditable">
          <v-btn
            text
            icon
            color="teal darken-3"
            @click="editMode = true"
            v-if="!editMode"
          >
            <v-icon>mdi-pencil</v-icon>
          </v-btn>

          <v-btn
            text
            icon
            color="teal darken-3"
            @click="editMode = false"
            v-if="editMode"
          >
            <v-icon>mdi-cancel</v-icon>
          </v-btn>

          <v-btn
            text
            icon
            color="teal darken-3"
            @click="updateProfile"
            v-if="editMode"
          >
            <v-icon>mdi-file-upload</v-icon>
          </v-btn>
        </div>
      </div>
      <div class="section-grid"></div>
    </v-col>

    <template v-if="editMode">
      <v-col cols="12" lg="11" class="my-4 pa-0">
        <v-textarea
          outlined
          label="profile detail"
          hide-details
          v-model="profile_props"
        ></v-textarea>
      </v-col>
    </template>

    <template v-else>
      <v-col cols="12" lg="11" class="my-4 pa-0">
        <span class="grey--text text--darken-2 body-2">{{
          profile_props
        }}</span>
      </v-col>
    </template>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Profile",

  props: ["profile_props"],

  computed: {
    ...mapState(["isContentEditable"])
  },

  methods: {
    disableEditMode() {
      this.editMode = false;
    },

    updateProfile() {
      console.log(this.profile_props);
      this.$firebase
        .updateResumeDetail({ profile: this.profile_props })
        .then(() => {
          this.disableEditMode();
        });
    }
  },

  data() {
    return {
      editMode: false
    };
  }
};
</script>

<style scoped></style>
