<template>
    <div>

     

     <h1>{{ animal.name }} ({{ $route.params.species }}-{{$route.params.id}})</h1>
    <p>Age: {{ animal.age }} years old</p>
    <p>Breed: {{ animal.breed }}</p>

    </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';
export default Vue.extend({
    data() {
return {
            // dogs,
               animal: {},
        };
    },
    computed : {
        // cats() { return this.$store.state.cats;}
        ...mapState(['cats', 'dogs' ]),
    },
    /* methods: {
        pet() {
            const animal = this[this.$route.params.species][this.$route.params.id];
            this.animal = animal;
        }
    } */
    mounted() {
    const animal = this[this.$route.params.species][this.$route.params.id];
    this.animal = animal;
  },
});
</script>
