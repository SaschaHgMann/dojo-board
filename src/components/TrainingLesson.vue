<template>
    <v-card>
        <v-card-title class="pt-2 pb-1">
          <span>{{lessonEntry.group}}</span>
          <v-spacer></v-spacer>
          <span >{{lessonEntry.date}}</span>
          
        </v-card-title>
        
        <v-divider class="mx-4"></v-divider>
        
        <v-card-subtitle><h3>{{lessonEntry.title}}</h3></v-card-subtitle>
        
        <v-card-text class="pb-0">
          <p>
            {{lessonEntry.content}}
          </p>
          <v-card-actions class="pl-0">
            <v-btn
              class="pa-0"
              text
              @click="lessonEntry.attendShow = !lessonEntry.attendShow"
            >
              <v-icon>mdi-account-multiple-check</v-icon>
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
          <h4 class="ml-1">{{lessonEntry.creator}}</h4>
          <v-spacer></v-spacer>
          <v-btn fab small text><v-icon>mdi-pencil</v-icon></v-btn>
          <v-btn fab small text><v-icon>mdi-delete</v-icon></v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    name: "TrainingLesson",

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

}
</script>

<style>

</style>