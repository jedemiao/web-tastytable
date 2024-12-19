<script setup>
import AppLayout from '@/components/layout/AppLayout.vue'
import SideNavigation from '@/components/layout/SideNavigation.vue'
import RecipeGrid from '@/components/layout/RecipeGrid.vue'
import { ref } from 'vue'

const isDrawerVisible = ref(true)
</script>

<template>
  <AppLayout>
    <template #navigation>
      <p>Navigation Placeholder</p>
    </template>
    <template #content>
      <h1>Dashboard Test</h1>
    </template>
  </AppLayout>
</template>
