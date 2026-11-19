<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainHeader from './components/base/MainHeader.vue'
import DashboardSidebar from './components/dashboard/DashboardSidebar.vue'
import StatusBar from './components/dashboard/StatusBar.vue';
</script>

<template>
  <MainHeader />


  <div class="min-h-screen pt-16">
    <DashboardSidebar />
    <main class="px-4 pt-20 pb-8 md:ml-64 md:px-8 md:pt-8">
      <RouterView />

      <StatusBar />
    </main>
  </div>
</template>

<style scoped></style>
