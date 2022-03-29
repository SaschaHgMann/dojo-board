<template>
  <v-container style="max-width: 400px">
      <v-row class="pa-4" >
        <v-col cols="12">
          <span class="text-h3 font-weight-medium primary--text">WILLKOMMEN</span>
        </v-col>
        <v-col cols="12">
          <span class="text-h6 font-weight-medium primary--text">Im Dojo Board des Kyotokan e.V.</span>
        </v-col>
      </v-row>
      <v-row class="pa-4" >
          <v-col cols="12">
              <span class="text-h6 font-weight-medium primary--text">Bitte melde dich an:</span>
          </v-col>
          <v-col cols="12">
                <v-text-field
                    v-model="loginName"
                    class="app-input"
                    clearable
                    label="Benutzer"
                    required
                    outlined
                    :rules="[rules.required]"
                ></v-text-field>
                <v-text-field
                    v-model="loginPassword"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    label="Passwort"
                    required
                    outlined
                    :rules="[rules.required]"
                    :type="showPassword ? 'text' : 'password' "
                    @click:append="showPassword = !showPassword"
                ></v-text-field>
                <v-btn
                    block
                    color="primary"
                    :loading="loading"
                    type="submit"
                    @click="handleClick()"
                >
                    <span>los gehts</span>
                    <v-icon class="ml-5">mdi-arrow-right</v-icon>
                </v-btn>
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
import userData from '@/store/_mock/user.json'

export default {
    name: 'LoginForm',

    data: () => ({
        coaches: userData,
        loading: false,
        loginName: null,
        loginPassword: null,
        rules: {
          required: value => !!value || 'Eingabe erforderlich.',
        },
        showPassword: false
    }),
  
    methods: {
        ...mapActions([
            'setActiveUser',
            'setAppBarTitle',
            'setNavigationValue',
            'showNotification',
        ]),

        handleClick() {
            const index = this.coaches.findIndex(coach => coach.firstName === this.loginName);
            const coach = this.coaches[index]
            if(index >= 0) {
                if(coach.password == this.loginPassword) {
                    this.loading = true
                    setTimeout(()=>{
                        this.setActiveUser(coach)
                        this.showNotification({type: 'success', title: 'Angemeldet', text: `Hallo ${coach.firstName}!`})
                    },500)
                    this.loading = false
                    this.setAppBarTitle('Trainings')
                    this.setNavigationValue(0)
                    this.$router.push("/trainings")
                }
                else {
                    this.showNotification({type: 'error', title: 'Anmeldung nicht möglich', text: 'Passwort nicht korrekt'})
                }
            }
            else {
                this.showNotification({type: 'error', title: 'Anmeldung nicht möglich', text: 'Benutzer nicht korrekt'})
            }
        }
    }

}
</script>

<style lang="scss" scoped>
/* .form-input .error--text {
  color: rgba(255, 255, 255, 0.7) !important;
} */
</style>
