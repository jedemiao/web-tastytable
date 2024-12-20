<script setup>
import { ref } from 'vue'

const props = defineProps(['isDrawerVisible'])
const isDrawerVisible = ref(props.isDrawerVisible)

const editableMenuItems = ref([
  { title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/dashboard' },
  { title: 'Account Settings', icon: 'mdi-account', to: '/account/settings' },
])
</script>

<template>
  <v-navigation-drawer v-model="isDrawerVisible" app>
    <v-list>
      <v-list-item
        v-for="(item, index) in editableMenuItems"
        :key="index"
        :prepend-icon="item.icon"
        :title="item.title"
        :to="item.to"
      />
    </v-list>
  </v-navigation-drawer>
</template>
