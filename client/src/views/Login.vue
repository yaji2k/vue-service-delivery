<template>
  <v-container>
    <v-layout row wrap justify-center>
      <v-flex xs6 xs10 sm8 md6 lg4>
        <h1 class="my-4">Login</h1>
        <v-text-field label="Email" placeholder="Email" :value="loginEmail" @input="setLoginEmail"></v-text-field>

        <v-text-field
          label="Password"
          placeholder="Password"
          type="password"
          autocomplete="new-password"
          :value="loginPassword"
          @input="setLoginPassword"
        ></v-text-field>
        <v-alert type="error" :value="loginError">{{ loginError }}</v-alert>
        <v-btn color="green" dark @click="login">
          <v-icon class="mr-2">account_circle</v-icon>Login
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  computed: {
    ...mapState("auth", ["loginEmail", "loginPassword", "loginError"])
  },
  methods: {
    ...mapMutations("auth", ["setLoginEmail", "setLoginPassword"]),
    ...mapActions("auth", ["login"])
  }
};
</script>

<style>
</style>

