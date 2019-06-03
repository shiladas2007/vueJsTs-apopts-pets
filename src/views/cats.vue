<template>
    <div>
         <h1>Cats for Adoption</h1>
        <b-table striped hover :items="cats">
        <template slot="name" slot-scope="data">
        <!-- `data.value` is the value after formatted by the Formatter -->
        <router-link :to="`pets/cats/${data.index}`">{{ data.value }}</router-link>
        </template>
        </b-table>
    </div>
</template>
<script lang="ts">
import Vue from 'vue';
// import cats from '../data/cats';
import { mapState } from 'vuex';
export default Vue.extend({
    data() {
        return {
           // cats,
        };
    },
    computed: {
        ...mapState(['cats']),
    },
});
</script>
