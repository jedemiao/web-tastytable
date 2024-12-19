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
    @theme="onThemeUpdate"
  >
    <template #navigation>
      <v-avatar color="surface-variant" src="/public/images/logo1-favicon.png" md="6"></v-avatar>
      <SideNavigation :is-drawer-visible="isDrawerVisible"></SideNavigation>
    </template>

    <template #content>
      <v-container fluid>
        <v-row>
          <v-col cols="12" :md="isSuperAdmin ? 7 : false">
            <WelcomeWidget :theme="theme"></WelcomeWidget>
          </v-col>

          <v-col cols="12" md="5" v-if="isSuperAdmin">
            <CodeGeneratorWidget></CodeGeneratorWidget>
          </v-col>

          <v-col cols="12">
            <ProductsWidget></ProductsWidget>
          </v-col>

          <v-col cols="12">
            <MapWidget></MapWidget>
          </v-col>
        </v-row>
      </v-container>
    </template>
    <template>
  <v-container fluid>
    <v-textarea
      label="Label"
      model-value="What recipe are you thinking today?"
      name="input-7-1"
      variant="filled"
      auto-grow
    ></v-textarea>
    <v-btn
      class="mt-2"
      type="submit"
      block
      color="primary"
      prepend-icon="mdi-post"
      :disabled="formAction.formProcess"
      :loading="formAction.formProcess"
      >Post
    </v-btn>
  </v-container>
</template>
  </AppLayout>``
</template>
