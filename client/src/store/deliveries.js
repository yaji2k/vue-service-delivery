import Vue from 'vue';
import HTTP from '../services/http';
import router from '../router';

export default {
    namespaced: true,
    state: {
        deliveries: [],
        newDelivery: {},
        tariffList: [
            {
              value: 3,
              title: "Внутренняя"
            },
            {
              value: 5,
              title: "Международная"
            }
          ]
    },
    getters: {

    },
    mutations: {
        setDeliveries(
            state,
            deliveries
        ) {
            state.deliveries = deliveries;
        },
        appendDelivery(state, delivery) {
            state.deliveries.push(delivery);
        },
        setNewDelivery(state, payload) {
            const {
                name,
                value
            } = payload;
            Vue.set(state.newDelivery, name, value);
        },
        editDelivery(state, payload) {
            const {
                delivery,
                name,
                value
            } = payload;
            delivery[name] = value;
            // Vue.set(state.delivery, name, value);
        },
        clearNewDelivery(state, payload) {
            state.newDelivery = payload;
        },
        removeDelivery(state, delivery) {
            state.deliveries.splice(state.deliveries.indexOf(delivery), 1);
        },
        setEditMode(state, delivery) {
            Vue.set(delivery, 'isEditMode', true);
        },
        unsetEditMode(state, delivery) {
            Vue.set(delivery, 'isEditMode', false);
        },
    },
    actions: {
        getDeliveries({
            commit
        }) {
            return HTTP().get('/deliveries')
                .then(({
                    data
                }) => {
                    commit('setDeliveries', data);
                });
        },
        async updateDelivery({
            commit
        }, delivery) {
            await HTTP().patch(`/deliveries/${delivery.id}`, delivery);
            commit('unsetEditMode', delivery);
        },
        async pushNewDelivery({
            commit,
            state,
        }) {
            const {
                data
            } = await HTTP().post(`/deliveries/`, state.newDelivery);
            commit("appendDelivery", data);
            commit("clearNewDelivery", {});
        },
        async deleteDelivery({
            commit
        }, delivery) {
            await HTTP().delete(`/deliveries/${delivery.id}`);
            commit("removeDelivery", delivery);
            router.push("/");
        }
    }
}