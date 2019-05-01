<template>
  <div>
    <v-expansion-panel v-model="panel" expand>
      <v-expansion-panel-content v-for="(delivery) in deliveries" :key="delivery.id">
        <template v-slot:header>
          <div v-if="!delivery.isEditMode" class="headline font-weight-bold">{{ delivery.title }}</div>
          <div v-if="delivery.isEditMode" class="mr-5">
            <v-text-field :value="delivery.title" @input="inputValue(delivery, 'title', $event)" required></v-text-field>
          </div>
        </template>
        <v-card>
          <v-card-text class="grey lighten-3">
            <v-layout wrap>
              <v-flex xs11 md4 class="cont">
                <h4>Раcстояние до пункта доставки</h4>
                <p v-if="!delivery.isEditMode">{{delivery.distance}} км</p>
                <p v-if="delivery.isEditMode" class="mr-5">
                  <v-text-field
                    type="number"
                    :value="delivery.distance"
                    @input="inputValue(delivery,'distance', $event)"
                    required
                  ></v-text-field>
                </p>
              </v-flex>
              <v-flex xs11 md3 class="cont">
                <h4>Тип доставки</h4>
                <p v-if="!delivery.isEditMode">{{getTariff(delivery.tariff)}}</p>
                <p v-if="delivery.isEditMode" class="mr-5">
                  <v-select
                    :items="tariffList"
                    item-text="title"
                    item-value="value"
                    :value="delivery.tariff"
                    @input="inputValue(delivery,'tariff', $event)"
                    required
                  ></v-select>
                </p>
              </v-flex>
              <v-flex xs11 md4 class="cont">
                <h4>Стоимость доставки</h4>
                <p>
                  {{delivery.distance * delivery.tariff}}
                  <span>&#8381;</span>
                </p>
              </v-flex>
              <v-flex xs12 md1 class="text-xs-right">
                <v-icon class="absolute delete" @click="deleteDelivery(delivery)">delete</v-icon>
                <v-icon
                  class="absolute edit"
                  v-if="!delivery.isEditMode"
                  @click="setEditMode(delivery)"
                >edit</v-icon>
                <v-icon
                  class="absolute edit"
                  v-if="delivery.isEditMode"
                  @click="updateDelivery(delivery)"
                >check</v-icon>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  data() {
    return {
      panel: []
    };
  },
  computed: {
    ...mapState("deliveries", ["deliveries", "tariffList"])
  },
  methods: {
    ...mapActions("deliveries", [
      "getDeliveries",
      "deleteDelivery",
      "updateDelivery"
    ]),
    ...mapMutations("deliveries", ["setEditMode", "editDelivery"]),
    getTariff(value) {
      return this.tariffList.find(item => item.value === value).title;
    },
    inputValue(delivery, name, value) {
        this.editDelivery({
            delivery,
            name,
            value
        });
    }
  },
  beforeMount() {
    this.getDeliveries();
  }
};
</script>

<style scoped>
p {
  margin: 0;
}
.absolute {
  position: absolute;
}
.absolute:hover {
  color: #333;
}
.delete {
  top: 6%;
  right: 2%;
}
.edit {
  top: 60%;
  right: 2%;
}
@media screen and (max-width: 960px) {
  .absolute {
    position: static;
  }
  .edit {
    margin-left: 40px;
  }
  .cont {
    padding: 10px 0;
  }
}
</style>
>
</style>
