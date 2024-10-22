<script setup>
import AppLayout from '@/components/layout/AppLayout.vue'
import LoginForm from '@/components/auth/LoginForm.vue'
import { useDisplay } from 'vuetify'

const { mobile } = useDisplay()
</script>

<template>
  <AppLayout>
    <template #content>
      <v-row>
        <v-col cols="12" md="6" class="mx-auto pt-16">
          <v-card class="mx-auto" subtitle="Login Form" elevation="24">
            <v-card-title>
              <v-img class="mx-auto" src="images/logo2-favicon.png"> </v-img>
              <v-divider class="my-5"></v-divider>
            </v-card-title>

            <v-card-text class="bg-surface-light pt-4">
              <v-divider class="my-5"></v-divider>

              <LoginForm></LoginForm>

              <v-divider class="my-5"></v-divider>

              <h5 class="text-center">
                Don't have an account?
                <router-link class="text-primary" to="/register"
                  >Click here to Register</router-link
                >
              </h5>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </template>
  </AppLayout>
</template>
