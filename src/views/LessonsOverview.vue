<template>
  <v-row 
    class="mx-2 my-3"
  >
    <v-col class="py-0">
      <v-chip-group
        multiple
        active-class="primary--text"
      >
        <v-chip outlined color="white">
          Bonsais
        </v-chip>
        <v-chip outlined color="white">
          Kids 1
        </v-chip>
        <v-chip outlined color="white">
          Kids 2
        </v-chip>
        <v-chip outlined color="white">
          Erwachsene
        </v-chip>
      </v-chip-group>
    </v-col>
    <v-col 
      v-for="(entry, index) in getMockTrainings"
      :key="index"
      cols="12"
    >
      <v-card width="90%">
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
                      {{attendee.grade}}
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

    <!-- <v-fab-transition> -->
      <v-btn
        class="mb-14"
        bottom
        elevation="5"
        fab
        fixed
        large
        right
        style="background-image: linear-gradient(to top, rgba(128,208,199,.5), rgba(19,84,122,.7))"
      >
        <v-icon color="#2c3e50" large>mdi-clipboard-plus-outline</v-icon>
      </v-btn>
    <!-- </v-fab-transition> -->
  </v-row>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "LessonsOverview",

  computed: {
    ...mapGetters([
      'getMockTrainings'
    ])
  },
  
};
</script>
