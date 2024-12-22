<script setup>
import { ref } from 'vue'
import AppLayout from '@/components/layout/AppLayout.vue'
import SideNavigation from '@/components/layout/SideNavigation.vue'

// Mock user profile data
const userProfile = ref({
  name: 'John Doe',
  profilePicture: '/images/JD+Solo+by+Todd+V+Wolfson.jpg',
})

// Drawer state
const isDrawerVisible = ref(true)
const isCollapsed = ref(false)

// Toggles the collapsible navigation
const toggleCollapse = () => {
  isCollapsed.value = !isCollapsed.value
}
</script>

<template>
  <AppLayout
    :is-with-app-bar-nav-icon="true"
    @is-drawer-visible="isDrawerVisible = !isDrawerVisible"
  >
    <template #navigation>
      <SideNavigation
        :is-drawer-visible="isDrawerVisible"
        :is-collapsed="isCollapsed"
        @toggle-collapse="toggleCollapse"
        @logout="() => $router.push('/')"
      />
    </template>

    <template #content>
      <v-container>
        <!-- User Information Section -->
        <v-row>
          <v-col cols="12" class="d-flex justify-center">
            <v-avatar size="100">
              <img :src="userProfile.profilePicture" alt="Profile Picture" />
            </v-avatar>
          </v-col>
          <v-col cols="12" class="text-center">
            <h2>{{ userProfile.name }}</h2>
          </v-col>
        </v-row>
      </v-container>
    </template>
  </AppLayout>
</template>

<style scoped>
/* Ensure responsiveness for smaller devices */
h2 {
  font-size: 1.5rem;
}
</style>
