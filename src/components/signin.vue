<template>
    <div class="login">
        <v-container align-center justify-center>
            <v-layout row wrap align-center justify-center>
                    <img src="@/assets/logo.svg" class="mt-2" width="300" alt="">
            </v-layout>
        </v-container>                    
        <v-container align-center justify-center>
            <v-layout row wrap align-center justify-center>
                    <h1 class="display-3 white--text text-xs-center hidden-sm-and-down">More ways to collect points and get rewarded</h1>
                    <h1 class="display-1 white--text text-xs-center hidden-md-and-up">More ways to collect points and get rewarded</h1>
            </v-layout>
        </v-container>
    <!-- https://codepen.io/HarrisWebApps/pen/ERPZZG -->
        <v-container align-center justify-center mt-4>
            <v-layout row wrap align-center justify-center>
                <v-flex xs12 sm6 md4>
                    <v-card class="elevation-8">

                        <!-- Login/Signin -->
                        <v-layout row align-center justify-center class="py-4">

                            <v-form @submit.prevent="onSignin">

                                <!-- <v-layout row> -->
                                <v-flex xs12>
                                    <h1 class="text-xs-center mb-2">Login</h1>
                                    <v-text-field name="email" label="Username" id="email" v-model="email" type="email"></v-text-field>
                                </v-flex>

                                <v-flex xs12>
                                    <v-text-field name="password" label="Password" id="password" v-model="password" type="password"></v-text-field>
                                </v-flex>

                                <v-flex xs12 class="py-2">
                                    <div class="text-xs-center">
                                        <v-btn outline type="submit" :disabled="loading" :loading="loading" to="deals">
                                            Sign in
                                        </span>
                                        </v-btn>
                                    </div>
                                    (Just click Sign In to continue)
                                </v-flex>
                            </v-form>
                        </v-layout>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    }
  }

</script>

<style scoped>
.login {
    width:100vw;
    height:100vh;
    background-image: url("https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg");
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
