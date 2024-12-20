<script setup>
import { ref } from 'vue'

const props = defineProps(['isWithAppBarNavIcon'])
const emit = defineEmits(['isDrawerVisible'])

const theme = ref(localStorage.getItem('theme') || 'light')

// Toggle Theme
const onToggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
  localStorage.setItem('theme', theme.value)
}
</script>

<template>
  <v-app :theme="theme">
    <v-app-bar app :style="{ backgroundColor: '#D50000', color: 'white' }">
  <v-btn
    v-if="props.isWithAppBarNavIcon"
    icon
    @click="$emit('isDrawerVisible')"
  >
    <v-icon>mdi-menu</v-icon>
  </v-btn>

  <!-- Scaled Down Search Bar beside Navbar -->
  <v-text-field
    class="mx-4"
    placeholder="Search..."
    hide-details
    dense
    outlined
    style="
      max-width: 150px; /* Reduced to half */
      background-color: white;
      border-radius: 5px;
      color: black;
      max-height: 50px;
    "
    :style="{ '--v-input-control-font-size': '16px', color: 'black' }"
  >
    <!-- Add magnifying glass icon -->
    <template #append>
      <v-icon>mdi-magnify</v-icon>
    </template>
  </v-text-field>

  <v-spacer />

  <v-btn icon @click="onToggleTheme">
    <v-icon>{{ theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night' }}</v-icon>
  </v-btn>
</v-app-bar>



    <slot name="navigation" />
    <v-main>
      <slot name="content" />
    </v-main>

    <v-footer app :style="{ backgroundColor: '#D50000', color: 'white' }">
      <p>Copyright © 2024 - Tasty Table | All Rights Reserved.</p>
    </v-footer>
  </v-app>
</template>
