<template>
    <div>
        <b-table striped hover :items="cats"></b-table>
    </div>
</template>
<script lang="ts">
import Vue from 'vue';
import cats from '../data/cats';
export default Vue.extend({
    data() {
        return {
            cats,
        };
    },
});
</script>
