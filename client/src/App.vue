<template>
  <v-app>
    <Toolbar/>
    <v-container>
      <v-layout>
        <v-flex xs2 class="mr-2" v-if="isLoggedIn" hidden-sm-and-down>
          <Menu :listMenu="menuPage" @onClick="pushPage($event)"/>
        </v-flex>
        <v-flex>
          
            <div id="app">
            <router-view/>
          </div>
         
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>
<script>
import Toolbar from "@/components/Toolbar.vue";
import Menu from "@/components/Menu.vue";
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  components: {
    Toolbar,
    Menu
  },
  computed: {
    ...mapState(["menuPage"]),
    ...mapGetters("auth", ["isLoggedIn"]),
  },
  methods: {
    ...mapActions(["pushPage"]),
  },
  beforeMount() {
    if(!this.isLoggedIn) {
      this.$router.push("/login");
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
