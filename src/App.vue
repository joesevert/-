<script setup>
import TabBar from './components/tabbar/TabBar.vue';
import { useRoute } from 'vue-router';

const route = useRoute()
</script>

<template>
  <div class="app">
    <RouterView></RouterView>
    <TabBar v-if="!route.meta.hiddenBar"></TabBar>
  </div>
</template>

<style scoped>

</style>
