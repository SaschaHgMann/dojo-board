<template>
    <v-card>
        <v-card-title class="pt-2 pb-1">
          <span>{{lessonEntry.group}}</span>
          <v-spacer></v-spacer>
          <span >{{lessonEntry.date}}</span>
          
        </v-card-title>
        
        <v-divider class="mx-4"></v-divider>
        
        <v-card-subtitle>
          <h3>{{lessonEntry.title}}</h3>
        </v-card-subtitle>
        
        <v-card-text class="pb-0">
          <p>
            {{lessonEntry.content}}
          </p>
          <v-card-actions class="px-0">
            <v-icon medium>mdi-book-account-outline</v-icon>
            <h3>{{lessonEntry.coach}}</h3>
            <v-spacer></v-spacer>
            <v-btn
              class="pa-0"
              depressed
              @click="lessonEntry.attendShow = !lessonEntry.attendShow"
            >
              <v-icon class="ml-1">mdi-account-multiple-check</v-icon>
              <span class="mx-1">{{lessonEntry.attendees.length}}</span>
              Teilnehmer
              <v-spacer></v-spacer>
              <v-icon>{{ lessonEntry.attendShow ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="lessonEntry.attendShow">
              <v-divider></v-divider>
              <v-card-text class="px-0 py-1">
                <v-card
                  v-for="(attendee, index) in allLessons[index].attendees"
                  :key="index"
                  class="pr-5"
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
                    <v-spacer></v-spacer>
                    <v-col 
                      cols="3"
                      class="py-1"  
                    >
                      <span v-show="$vuetify.breakpoint.sm">{{attendee.grade}}</span>
                    </v-col>
                    <v-col 
                      cols="1"
                      class="py-1"  
                    >
                      <v-btn icon small @click="showMemberDetails(attendee)">
                        <v-icon>mdi-information</v-icon>
                      </v-btn>
                      
                    </v-col>
                  </v-row>
              
                </v-card>
              </v-card-text>
            </div>
          </v-expand-transition>

          <v-divider></v-divider>
        </v-card-text>
        
        <v-card-actions class="py-0 pl-4">
          <span class="caption">{{lessonEntry.createdBy}}</span>
          <v-spacer></v-spacer>
          <v-btn fab small text><v-icon>mdi-pencil</v-icon></v-btn>
          <v-btn fab small text><v-icon>mdi-delete</v-icon></v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    name: "SingleTraining",

    props: {
        index: {
            type: Number,
            required: true
        },
        lessonEntry: {
            type: Object,
            requirede: true
        },
        allLessons: {
            type: Array,
            requirede: true
        },
    },

    methods: {
      showMemberDetails(attendee) {
        // TODO: show dialog with full member details 
        console.log('attendee object', attendee)
      }
    }
}
</script>
