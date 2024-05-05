<template>
  <section>
    <v-col cols="12" class="pa-0">
      <div class="d-flex justify-space-between align-center">
        <span :class="`${ $vuetify.breakpoint.xsOnly ? 'headline' : 'display-1' }`" class="font-weight-medium teal--text text--darken-3" style="letter-spacing: 3px !important;">TECH STACK</span>
        <div v-if="isContentEditable">
          <v-btn text icon color="teal darken-3" @click="editMode = true" v-if="!editMode">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>

          <v-btn text icon color="teal darken-3" @click="editMode = false" v-if="editMode">
            <v-icon>mdi-cancel</v-icon>
          </v-btn>

          <v-btn text icon color="teal darken-3" @click="updateSkills" v-if="editMode">
            <v-icon>mdi-file-upload</v-icon>
          </v-btn>
        </div>
      </div>
      <div class="section-grid"></div>
    </v-col>

    <template v-if="editMode">
      <v-row>
        <v-col cols="4"
               class="py-0 px-3"
               v-for="(skill, index) in skill_props"
               :key="index">
          <v-text-field v-model="skill_props[index]" hide-details></v-text-field>
        </v-col>
      </v-row>
    </template>

    <template v-else>
      <v-col cols="12" class="my-4 d-flex justify-start align-start flex-row flex-wrap pa-0">
              <span class="grey--text text--darken-4 body-2 mr-4 px-3 mt-3 skill font-weight-medium"
                    v-for="(skill, index) in skill_props"
                    :key="index">{{ skill }}</span>
      </v-col>
    </template>

  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name : 'Skill',

  props : ['skill_props'],

  computed : {
    ...mapState(['isContentEditable'])
  },

  methods : {
    updateSkills () {
      this.skill_props = this.skill_props.filter(props => props)

      this.$firebase.updateResumeDetail({ skills : this.skill_props }).then(() => {
        this.editMode = false
      })
    }
  },

  data () {
    return {
      editMode : true
    }
  }
}
</script>

<style scoped>

</style>
