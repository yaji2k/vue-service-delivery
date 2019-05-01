<template>
  <v-container>
    <v-layout row wrap justify-center>
      <v-flex xs10 sm8 md6 lg4>
        <h1 class="my-4">Add new delivery</h1>
        <v-text-field
          label="Title"
          placeholder="Title"
          :value="newDelivery.title"
          @input="inputValue('title', $event)"
          required
        ></v-text-field>

        <v-text-field
          type="number"
          label="Distance in km"
          placeholder="100"
          :value="newDelivery.distance"
          @input="inputValue('distance', parseFloat($event))"
          required
        ></v-text-field>

        <v-select
          label="Tariff"
          :items="tariffList"
          item-text="title"
          item-value="value"
          :value="newDelivery.tariff"
          @input="inputValue('tariff', $event)"
          required
        ></v-select>
        <v-btn color="green" dark @click="pushNewDelivery">
          <v-icon class="mr-2">add</v-icon>Add delivery
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
// @ is an alias to /src
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  computed: {
    ...mapState("deliveries", ["newDelivery", "tariffList"])
  },
  methods: {
    ...mapMutations("deliveries", ["setNewDelivery"]),
    ...mapActions("deliveries", ["pushNewDelivery"]),
    inputValue(name, value) {
      this.setNewDelivery({
        name,
        value
      });
    }
  }
};
</script>
