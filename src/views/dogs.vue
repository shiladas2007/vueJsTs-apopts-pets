<template>
    <div>
        <b-table striped hover :items="dogs"></b-table>
    </div>
</template>
<script lang="ts">
import Vue from 'vue';
import dogs from '../data/dogs';
export default Vue.extend({
    data() {
        return {
            dogs,
        };
    },
});
</script>
