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
        v-model="groupFilter"
        multiple
        active-class="primary--text"
      >
        <v-chip 
          v-for="(group, index) in getGroups"
          :key="index"
          outlined 
          color="white"
          filter
          small
          @click="handleClickGroupFilter(group)"
        >
          {{group}}
        </v-chip>
      </v-chip-group>
    </v-col>

    <v-col 
      v-for="(entry, index) in filteredTrainings"
      :key="index"
      cols="12"
    >
      <single-training :index="index" :lessonEntry="entry" :allLessons="filteredTrainings"/>
    </v-col>
    
    <action-button iconLogo="mdi-clipboard-plus-outline" @action="handleClickNewSession()" />
    
    <new-training :dialog="dialog" @confirm="handleSaveNewTraining()" @cancel="handleCancelNewTraining()"/>
  </v-row>
</template>

<script>
import ActionButton from '@/components/utils/ActionButton'
import NewTraining from '@/components/NewTraining'
import SingleTraining from '@/components/SingleTraining'
import {mapGetters} from 'vuex'

export default {
  name: "LessonsOverview",

  components: {
    ActionButton,
    NewTraining,
    SingleTraining,
  },

  data: () => ({
    dialog: false,
    groupFilter: [],
  }),

  computed: {
    ...mapGetters([
      'getGroups',
      'getMockTrainings'
    ]),

    filteredTrainings() {
      let allEntries = this.getMockTrainings
      if(!this.groupFilter.length) {
        return allEntries
      }
      else {
        let filter = []
        this.groupFilter.forEach((group) => {
          let filteredEntries = allEntries.filter((entry) => entry.group == group)
          filter = filter.concat(filteredEntries)
          filter.sort((a, b) => {
            return new Date(a.date) - new Date (b.date);
          })
        })
        return filter
      }
    }
  },

  methods: {
    handleClickNewSession() {
      this.dialog = true
    },
    handleSaveNewTraining() {
      console.log('new training created -> Add confirmation message')
      this.dialog = false
    },
    handleCancelNewTraining() {
      this.dialog = false
    },
    handleClickGroupFilter(group) {
      let index = this.groupFilter.indexOf(group)
      if(index === -1) {
        this.groupFilter.push(group)
      }
      else {
        this.groupFilter.splice(index, 1)
      }
    },

  }
  
};
</script>
