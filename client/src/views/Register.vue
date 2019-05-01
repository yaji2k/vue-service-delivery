<template>
  <v-container>
    <v-layout row wrap justify-center>
      <v-flex xs10 sm8 md6 lg4>
        <h1 class="my-4">Register</h1>
        <v-text-field
          label="Name"
          placeholder="Name"
          :value="registerName"
          @input="setRegisterName"
        ></v-text-field>

        <v-text-field
          label="Email"
          placeholder="Email"
          :value="registerEmail"
          @input="setRegisterEmail"
        ></v-text-field>

        <v-text-field
          label="Password"
          placeholder="Password"
          type="password"
          autocomplete="new-password"
          :value="registerPassword"
          @input="setRegisterPassword"
        ></v-text-field>
        <v-alert type="error" :value="registerError">{{ registerError }}</v-alert>
        <v-btn color="green" dark @click="register">
          <v-icon class="mr-2">account_circle</v-icon>Register
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  computed: {
    ...mapState("auth", [
      "registerEmail",
      "registerPassword",
      "registerError",
      "registerName"
    ])
  },
  methods: {
    ...mapMutations("auth", [
      "setRegisterEmail",
      "setRegisterPassword",
      "setRegisterName",
    ]),
    ...mapActions("auth", ["register"])
  }
};
</script>

<style>
</style>

