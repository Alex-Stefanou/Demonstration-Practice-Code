import Vue from 'vue'
import Vuex from 'vuex'
import API from "@/utils/API";

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        displayModal: false,
        inventory: [],
    },

    mutations: {
        setInventory (state, inventory) {
            console.log(typeof inventory);
            state.inventory = inventory;
            console.log("The store inventory has been updated to: "+state.inventory)
        },
        setModal (state, modalState) {
            state.displayModal = modalState;
            console.log("In store displayModal has been set to: "+state.displayModal);
        }
    },

    actions: {
        async updateInventory (context) {
            try {
                const response = await API.get('/list_stock');
                console.log(response.data);
                context.commit("setInventory", response.data);
            } catch (error) {
                console.log("There was an error fetching inventory list in the store.");
                console.log(error);
            }
        }
    },

    getters: {
        modalState: state => state.displayModal,
        inventory: state => state.inventory,
    }
})