<template>
  <v-container fluid>
    <v-row class="mx-sm-4 my-0 mt-sm-16">
      <v-col class="d-flex pt-2">
        <v-icon 
          class="mr-1"
          color="white"
        >mdi-filter</v-icon>
        <v-chip-group
          v-model="groupFilter"
          active-class="primary--text"
          class="pr-5"
          multiple
        >
          <v-chip 
            v-for="(group, index) in getGroups"
            :key="index"
            outlined 
            color="white"
            filter
            :small="$vuetify.breakpoint.mdAndUp ? false : true"
            @click="handleClickGroupFilter(group)"
          >
            {{group}}
          </v-chip>
        </v-chip-group>
      </v-col>
    </v-row>
    <v-row class="mx-sm-5">
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
  </v-container>
</template>

<script>
import ActionButton from '@/components/layout/ActionButton'
import NewTraining from '@/components/NewTraining'
import SingleTraining from '@/components/SingleTraining'
import {mapActions, mapGetters} from 'vuex'

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

  created() {
    this.setAppBarTitle(this.$route.name)
  },

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
    ...mapActions([
      'setAppBarTitle',
      'showNotification',
    ]),
    handleClickNewSession() {
      this.dialog = true
    },
    handleSaveNewTraining() {
      // simulating api response
      setTimeout(()=>{
        this.showNotification({type: 'success', text: 'Training hinzugefügt'})
      },500)
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
