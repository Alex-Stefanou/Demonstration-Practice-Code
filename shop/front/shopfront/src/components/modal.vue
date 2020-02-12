<template>
    <div :class="{'is-active': isActive}" class="modal">

        <div @click="close" class="modal-background"></div>
        <button @click="close" class="modal-close is-large" aria-label="close"></button>

        <div class="modal-content">
            <h1>Add/Remove stock</h1>

            <form>
                <div class="field">
                    <label>Select an item: </label>
                    <select>
                        <option v-for="(liquid,i) in stock" :key="i" :value="liquid[i].id">{{ liquid[i].name }}</option>
                    </select>
                </div>

                <button @click="submit" class="button">Submit</button>
            </form>
        </div>

    </div>
</template>

<script>
  export default {
    name: 'modal',
    data: function() {
        return {
            stock: this.$store.getters.inventory
        }
    },

    computed: {
        isActive: function() {
            return this.$store.getters.modalState;
        }
    },

    methods: {
      close: function() {
        this.$store.commit("setModal", false);
      },
      submit: function() {
          console.log("This will submit data");
      }
    },
  };
</script>

<style scoped>
.modal-content {
    width: 40%;
    background-color: white;
}
</style>