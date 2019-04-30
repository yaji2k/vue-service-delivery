  <template>
  <div>
    <v-toolbar>
      <v-toolbar-title>Title</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon class="hidden-sm-and-up" @click.stop="right = !right"></v-toolbar-side-icon>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat v-for="(item, index) in menuAuth" :key="index">
          <v-icon class="mr-2">{{item.icon}}</v-icon>
          <span>{{item.title}}</span>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer class="hidden-sm-and-up" absolute right v-model="right">
      <v-divider></v-divider>
      <v-list dense class="pt-0">
        <v-list-tile class="title text-uppercase font-weight-medium" @click v-for="(item, index) in menuAuth" :key="index">
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{item.title}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      right: false,
      menuAuth: [
        {
          icon: "fingerprint",
          title: "Login"
        },
        {
          icon: "account_box",
          title: "Register"
        },
        {
          icon: "exit_to_app",
          title: "Logout"
        }
      ]
    };
  },
  methods: {
    switchMenu() {
      this.right = !this.right;
    }
  }
};
</script>

<style>
</style>

