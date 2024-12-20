<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const userData = ref({ initials: 'TT', email: 'user@example.com' })

const onLogout = () => {
  router.replace('/')
}
</script>

<template>
  <v-menu>
    <template #activator="{ props }">
      <v-btn icon v-bind="props">
        <v-avatar color="orange-darken-3">
          <span>{{ userData.initials }}</span>
        </v-avatar>
      </v-btn>
    </template>
    <v-card>
      <v-card-text>
        <v-list>
          <v-list-item :title="userData.email">
            <template #prepend>
              <v-avatar color="orange-darken-3">
                <span>{{ userData.initials }}</span>
              </v-avatar>
            </template>
          </v-list-item>
        </v-list>
        <v-divider />
        <v-btn prepend-icon="mdi-logout" @click="onLogout">Logout</v-btn>
      </v-card-text>
    </v-card>
  </v-menu>
</template>
