<template>
  <v-navigation-drawer class="elevation-1">
    <v-list >
      <v-list-tile v-for="(item, index) in listMenu" :key="index" @click="$emit('onClick', item.action)">
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
    
    };
  },
  props: ["listMenu"],
};
</script>

<style>
</style>
