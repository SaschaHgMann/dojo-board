<template>
  <v-container style="max-width: 400px">
      <v-row class="pa-4" >
          <v-col cols="12">
              <span class="text-h6 font-weight-medium primary--text">Bitte melde dich an:</span>
          </v-col>
          <v-col cols="12">
              <v-text-field
                  clearable
                  label="Benutzer"
                  required
                  outlined
                ></v-text-field>
                <v-text-field
                  clearable
                  label="Passwort"
                  required
                  outlined
                  type="password"
                ></v-text-field>
                <v-btn
                   block
                   color="primary"
                   type="submit"
                   @click="login()"
                >
                  <span>los gehts</span>
                  <v-icon class="ml-5">mdi-arrow-right</v-icon>
                </v-btn>
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
export default {
    name: 'LoginForm',
  
    methods: {
        handleClick() {
            setTimeout(()=>{
                this.showNotification({type: 'success', text: 'Angemeldet'})
            },500)
            this.setAppBarTitle('Trainings')
            this.setNavigationValue(0)
            this.$router.push("/trainings")
        },

        login() {
            this.$auth.loginWithRedirect();
            this.setAppBarTitle('Trainings')
            this.setNavigationValue(0)
            this.$router.push("/trainings")
        },
            
        
    }

}
</script>

<style>

</style>