<script setup>
import { ref } from 'vue'

const props = defineProps(['isWithAppBarNavIcon'])
const emit = defineEmits(['isDrawerVisible'])

const theme = ref(localStorage.getItem('theme') || 'light')

// Toggle Theme
const onToggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}

// Dynamic background color based on theme
const appBarStyle = () => ({
  backgroundColor: theme.value === 'light' ? '#d72323' : '#982b1c',
  color: 'white',
})

const footerStyle = appBarStyle
</script>

<template>
  <v-app :theme="theme">
    <!-- App Bar -->
    <v-app-bar app :style="appBarStyle()">
      <v-btn
        v-if="props.isWithAppBarNavIcon"
        icon
        @click="$emit('isDrawerVisible')"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>

      <v-spacer />

      <!-- Theme Toggle Button -->
      <v-btn icon @click="onToggleTheme">
        <v-icon>{{ theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night' }}</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Navigation Drawer Slot -->
    <slot name="navigation" />

    <!-- Main Content Slot -->
    <v-main>
      <slot name="content" />
    </v-main>

    <!-- Footer -->
    <v-footer app :style="footerStyle()">
      <p>Copyright © 2024 - Tasty Table | All Rights Reserved.</p>
    </v-footer>
  </v-app>
</template>
