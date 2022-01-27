<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <v-card>
        <v-card-title>
          <span class="headline">Neue Trainingseinheit</span>
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                class="pb-0"
                cols="12"
                sm="6"
              >
                <v-menu
                  v-model="dateMenu"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="newTraining.date"
                      label="Datum"
                      outlined
                      prepend-inner-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="newTraining.date"
                    @input="dateMenu = false"
                  ></v-date-picker>
                </v-menu>
              </v-col>

              <v-col
                class="pb-0"
                cols="12"
                sm="6"
              >
                <v-select
                  v-model="newTraining.group"
                  :items="getGroups"
                  label="Gruppe"
                  outlined
                  required
                ></v-select>
              </v-col>
              
              <v-col
                class="py-0" 
                cols="12"
              >
                <v-autocomplete
                  v-model="newTraining.attendees"
                  chips
                  deletable-chips
                  disabled
                  :items="['Member1', 'Member2', 'Member3', 'Member4', 'Member5', 'Member6']"
                  label="Anwesende"
                  multiple
                  outlined
                  small-chips
                ></v-autocomplete>
              </v-col>

              <v-col
                class="pb-0" 
                cols="12"
              >
                <v-autocomplete
                  v-model="newTraining.topics"
                  chips
                  deletable-chips
                  :items="['Kihon', 'Kata', 'Kumite', 'Technik', 'Kondition', 'Bunkai']"
                  label="Schwerpunkte"
                  multiple
                  outlined
                  small-chips
                ></v-autocomplete>
              </v-col>
              
              <v-col
                class="py-0" 
                cols="12"
              >
                <v-text-field
                  v-model="newTraining.mainGoal"
                  clearable
                  label="Thema"
                  required
                  outlined
                ></v-text-field>
              </v-col>

              <v-col
                class="py-0" 
                cols="12"
              >
                <v-textarea
                  v-model="newTraining.content"
                  clearable
                  label="Inhalte"
                  outlined
                  placeholder="Trainings-Ziel, Scherpunkte, Übungsaufbau"
                  required
                ></v-textarea>
              </v-col>

              <v-col
                class="py-0" 
                cols="12"
              >
                <v-textarea
                  v-model="newTraining.info"
                  clearable
                  hint="Optional"
                  label="Anmerkungen"
                  outlined
                  placeholder="Besondere Vorkommnisse"
                  rows="2"
                ></v-textarea>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <slot name="action-buttons">
            <v-btn
              color="red darken-1"
              text
              @click="handleCancel()"
            >
              Close
            </v-btn>
            <v-btn
              color="primary darken-1"
              outlined
              @click="handleSave(newTraining)"
            >
              Save
            </v-btn>
          </slot>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "NewTraining",

  props: {
    dialog: {
      type: Boolean,
      required: true
    }
  },

  data: () => ({
      dateMenu: false,

      newTraining: {
        date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        group: null,
        topics: [],
        attendees: [],
        mainGoal: null,
        content: null,
        info: null,
        createdAt: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        createdBy: "test user",
        editedAt: null,
        editedBy: null
      }
    }),
  

  computed: {
    ...mapGetters([
      'getGroups'
    ])
  },

  methods: {
    handleCancel() {
      this.$emit('cancel')
    },
    handleSave() {
      this.$emit('confirm')
      this.newTraining.date = (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)
      console.log('newTraining:', this.newTraining)
    }
  }
  
}
</script>
