<script setup>
import { ref, watch } from 'vue'

const props = defineProps(['isDrawerVisible', 'isCollapsed'])
const emit = defineEmits(['toggleCollapse', 'logout'])

const isDrawerVisible = ref(props.isDrawerVisible)
const isCollapsed = ref(props.isCollapsed)

watch(
  () => props.isDrawerVisible,
  (newVal) => {
    isDrawerVisible.value = newVal
  }
)

watch(
  () => props.isCollapsed,
  (newVal) => {
    isCollapsed.value = newVal
  }
)

const menuItems = ref([
  { title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/dashboard' },
  { title: 'Profile', icon: 'mdi-account', to: '/profile' },
])
</script>

<template>
  <v-navigation-drawer
    v-model="isDrawerVisible"
    app
    :width="isCollapsed ? 56 : 256"
  >
    <!-- Collapse/Expand Toggle Button -->
    <v-list-item @click="$emit('toggleCollapse')" class="d-flex justify-center">
    </v-list-item>

    <!-- Navigation Items -->
    <v-list dense :class="{ 'text-center': isCollapsed }">
      <v-list-item
        v-for="(item, index) in menuItems"
        :key="index"
        :prepend-icon="item.icon"
        :title="!isCollapsed ? item.title : ''"
        :to="item.to"
      />
      <!-- Logout Button -->
      <v-list-item @click="$emit('logout')" :class="{ 'text-center': isCollapsed }">
        <v-btn icon>
          <v-icon>mdi-logout</v-icon>
        </v-btn>
        <span v-if="!isCollapsed">Logout</span>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
