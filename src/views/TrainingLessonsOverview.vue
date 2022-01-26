<template>
  <v-row 
    class="mx-2 my-3"
  >
    <v-col class="d-flex py-0">
      <v-icon 
        class="mr-1"
        color="white"
      >mdi-filter</v-icon>
      <v-chip-group
        absolute
        multiple
        active-class="primary--text"
      >
        <v-chip 
          v-for="(group, index) in getGroups"
          :key="index"
          outlined 
          color="white"
          @click="handleClickGroup(group)"
        >
          {{group}}
        </v-chip>
      </v-chip-group>
    </v-col>

    <v-col 
      v-for="(entry, index) in getMockTrainings"
      :key="index"
      cols="12"
    >
      <training-lesson :index="index" :lessonEntry="entry" :allLessons="getMockTrainings"/>
    </v-col>
    
    <action-button iconLogo="mdi-clipboard-plus-outline" @action="handleClickNewSession()" />
    
    <new-training :dialog="dialog" @confirm="handleSaveNewTraining()" @cancel="handleCancelNewTraining()"/>
  </v-row>
</template>

<script>
import ActionButton from '@/components/utils/ActionButton'
import NewTraining from '@/components/NewTraining'
import TrainingLesson from '@/components/TrainingLesson'
import {mapGetters} from 'vuex'

export default {
  name: "LessonsOverview",

  components: {
    ActionButton,
    NewTraining,
    TrainingLesson,
  },

  data: () => ({
    dialog: false,
    // allLessons: this.getMockTrainings
  }),

  computed: {
    ...mapGetters([
      'getGroups',
      'getMockTrainings'
    ]),

  },

  methods: {
    handleClickNewSession() {
      console.log('click new session')
      this.dialog = true
    },
    handleSaveNewTraining() {
      console.log('new session created')
      this.dialog = false
    },
    handleCancelNewTraining() {
      console.log('new session cancelled')
      this.dialog = false
    },
    handleClickGroup(groupSelected) {
      this.getMockTrainings.filter(lesson => lesson.group == groupSelected);
      console.log('test', groupSelected)
    },

  }
  
};
</script>
