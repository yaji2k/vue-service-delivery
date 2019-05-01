  <template>
  <div>
    <v-toolbar>
      <v-toolbar-title>Title</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon class="hidden-md-and-up" @click.stop="right = !right"></v-toolbar-side-icon>
      <v-toolbar-items class="hidden-sm-and-down">
        <template v-for="(item, index) in menuAuth">
          <v-btn :key="index" flat @click="pushPage(item.action)" v-if="checkAuth(item.isAuth)">
            <v-icon class="mr-2">{{item.icon}}</v-icon>
            <span>{{item.title}}</span>
          </v-btn>
        </template>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer class="hidden-md-and-up" fixed right v-model="right">
      <v-divider class="mt-5"></v-divider>
      <v-list dense class="py-2">
        <template v-for="(item, index) in menuAuth">
          <v-list-tile
            class="title text-uppercase font-weight-medium"
            @click.stop="pushPage(item.action)"
            :key="index"
            v-if="checkAuth(item.isAuth)"
          >
            <v-list-tile-action>
              <v-icon>{{item.icon}}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{item.title}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
      <v-divider></v-divider>
      <v-list dense class="py-2">
        <template v-for="(item, index) in menuPage">
          <v-list-tile
            class="title text-uppercase font-weight-medium"
            @click.stop="pushPage(item.action)"
            :key="index"
            v-if="checkAuth(item.isAuth)"
          >
            <v-list-tile-action>
              <v-icon>{{item.icon}}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{item.title}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
import { mapGetters, mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      right: false
    };
  },
  methods: {
    ...mapActions("auth", ["logout"]),
    pushPage(action) {
      if (action === "logout") {
        this.logout();
      } else {
        this.$router.push(`/${action}`);
      }
    },
    checkAuth(auth) {
      return auth ? !this.isLoggedIn : this.isLoggedIn;
    }
  },
  computed: {
    ...mapGetters("auth", ["isLoggedIn"]),
    ...mapState(["menuAuth", "menuPage"])
  }
};
</script>

<style>
</style>

