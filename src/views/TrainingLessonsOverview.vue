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
          @click="handleClickChip(group)"
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
      <!-- <v-card width="90%"> -->
      <v-card>
        <v-card-title class="pt-2 pb-1">
          <span>{{entry.group}}</span>
          <v-spacer></v-spacer>
          <span >{{entry.date}}</span>
          
        </v-card-title>
        
        <v-divider class="mx-4"></v-divider>
        
        <v-card-subtitle><h3>{{entry.title}}</h3></v-card-subtitle>
        
        <v-card-text class="pb-0">
          <p>
            {{entry.content}}
          </p>
          <v-card-actions class="pl-0">
            <v-btn
              class="pa-0"
              text
              @click="entry.attendShow = !entry.attendShow"
            >
              <v-icon>mdi-account-multiple-check</v-icon>
              <span class="mx-1">{{entry.attendees.length}}</span>
              Teilnehmer
              <v-spacer></v-spacer>
              <v-icon>{{ entry.attendShow ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="entry.attendShow">
              <v-divider></v-divider>
              <v-card-text class="px-0 py-1">
                <v-card
                  v-for="(attendee, index) in getMockTrainings[index].attendees"
                  :key="index"
                >
                  <v-row class="my-2 px-1">
                    <v-col 
                      cols="4"
                      class="py-1"  
                    >
                      {{attendee.name}}
                    </v-col>
                    <v-col 
                      cols="3"
                      class="py-1"  
                    >
                      {{attendee.age}} Jahre
                    </v-col>
                    <v-col 
                      cols="3"
                      class="py-1"  
                    >
                      <v-btn class="pa-2" disabled small>
                        <v-img src="https://lh3.googleusercontent.com/proxy/1lxxO_o8hG3F6grKeqmrNFzwQInktAuQvO_HDRbSU76tqPLLyzUDVTLlLBLvcA1M05vQwemIPb7Eijiq2lukyvIpTllp-1_WPHwgyg" height="15px" width="4px"></v-img>
                      </v-btn>

                      <!-- {{attendee.grade}} -->
                    </v-col>
                    <v-col 
                      cols="1"
                      class="py-1"  
                    >
                      <v-icon>mdi-information</v-icon>
                    </v-col>
                  </v-row>
              
                </v-card>
              </v-card-text>
            </div>
          </v-expand-transition>

          <v-divider></v-divider>
        </v-card-text>
        
        <v-card-actions class="py-0 pl-4">
          <v-icon small>mdi-account</v-icon>
          <h4 class="ml-1">{{entry.creator}}</h4>
          <v-spacer></v-spacer>
          <v-btn fab small text><v-icon>mdi-pencil</v-icon></v-btn>
          <v-btn fab small text><v-icon>mdi-delete</v-icon></v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    
    
    
    <!-- <ActionButton iconLogo="mdi-clipboard-plus-outline" @click="handleClickNewSession()" /> -->
    <v-btn
        class="mb-14"
        bottom
        elevation="5"
        fab
        fixed
        large
        right
        style="background-image: linear-gradient(to top, rgba(128,208,199,.5), rgba(19,84,122,.7))"
        @click="handleClickNewSession()"
      >
        <v-icon color="#2c3e50" large>mdi-clipboard-plus-outline</v-icon>
      </v-btn>
    <NewTraining :dialog="dialog" @confirmed="handleSaveNewTraining" @cancel="handleCancelNewTraining"/>
  </v-row>
</template>

<script>
// import ActionButton from '@/components/utils/ActionButton'
import NewTraining from '@/components/NewTraining'
import {mapGetters} from 'vuex'

export default {
  name: "LessonsOverview",

  components: {
    // ActionButton,
    NewTraining
  },

  data: () => ({
    dialog: false,
  }),

  computed: {
    ...mapGetters([
      'getGroups',
      'getMockTrainings'
    ])
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
    handleClickChip(group) {
      console.log('test', group)
    }
  }
  
};
</script>
