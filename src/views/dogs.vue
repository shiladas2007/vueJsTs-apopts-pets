<template>
    <div>
         <h1>Dogs for Adoption</h1>
        <b-table striped hover :items="dogs">
            <template slot="name" slot-scope="data">
        <!-- `data.value` is the value after formatted by the Formatter -->
        <router-link :to="`pets/dogs/${data.index}`">{{ data.value }}</router-link>
        </template>
        </b-table>
    </div>
</template>
<script lang="ts">
import Vue from 'vue';
// import dogs from '../data/dogs';
import { mapState } from 'vuex';
export default Vue.extend({
    data() {
        return {
            // dogs,
        };
    },
    computed: {
        ...mapState(['dogs']),
    },
});
</script>
