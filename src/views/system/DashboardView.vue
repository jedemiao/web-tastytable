<script setup>
import AppLayout from '@/components/layout/AppLayout.vue'
import SideNavigation from '@/components/layout/SideNavigation.vue'
import { ref } from 'vue'

const isDrawerVisible = ref(true)
</script>

<template>
  <AppLayout
    :is-with-app-bar-nav-icon="true"
    @is-drawer-visible="isDrawerVisible = !isDrawerVisible"
  >
    <template #navigation>
      <SideNavigation
        :is-drawer-visible="isDrawerVisible"
        @logout="() => $router.push('/')"
      />
    </template>

    <template #content>
      <v-container>
        <v-row>
          <v-col cols="12">
            <h1>Welcome to the Dashboard!</h1>
          </v-col>
        </v-row>
      </v-container>
    </template>
  </AppLayout>
</template>
