<script setup>
import { isAuthenticated } from '@/utils/supabase'
import ProfileHeader from './ProfileHeader.vue'
import { onMounted, ref } from 'vue'
import { useDisplay } from 'vuetify'

const props = defineProps(['isWithAppBarNavIcon'])

const emit = defineEmits(['isDrawerVisible'])

// Utilize pre-defined vue functions
const { xs, sm, mobile } = useDisplay()

// Load Variables
const isLoggedIn = ref(false)
const isMobileLogged = ref(false)
const isDesktop = ref(false)
const theme = ref(localStorage.getItem('theme') || 'light')

//  Toggle Theme
const onToggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
  localStorage.setItem('theme', theme.value)
}

// Get Authentication status from supabase
const getLoggedStatus = async () => {
  isLoggedIn.value = await authStore.isAuthenticated()

  isMobileLogged.value = mobile.value && isLoggedIn.value
  isDesktop.value = !mobile.value && (isLoggedIn.value || !isLoggedIn.value)
}

// Load Functions during component rendering
onMounted(() => {
  getLoggedStatus()
})

function onClick() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
  localStorage.setItem('theme', theme.value)
}
</script>

<template>
  <v-responsive>
    <v-app :theme="theme">
      <v-app-bar
        class="px-3"
        :color="theme === 'light' ? '#d72323' : '#982B1C'"
        border
      >
        <v-spacer></v-spacer>

        <v-btn
          :icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
          variant="elevated"
          slim
          @click="onClick"
        ></v-btn>

        <ProfileHeader v-if="isLoggedIn"></ProfileHeader>
      </v-app-bar>

      <slot name="navigation"></slot>

      <v-main>
        <slot name="content"></slot>
      </v-main>

      <v-footer
        class="font-weight-medium"
        :color="theme === 'light' ? '#d72323' : '#982B1C'"
        elevation="24"
        border
        app
      >
        Copyright © 2024 - Tasty Table | All Rights Reserved.
      </v-footer>
    </v-app>
  </v-responsive>
</template>
