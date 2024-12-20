<script setup>
import AppLayout from '@/components/layout/AppLayout.vue';
import SideNavigation from '@/components/layout/SideNavigation.vue';
import { ref } from 'vue';

const isDrawerVisible = ref(true);
const postContent = ref('');
const postImage = ref(null);
const posts = ref([]);

// Placeholder for user's name
const currentUser = 'Knicko Cruda'; // Replace with actual user data if available

// Handles post submission
const handlePost = () => {
  if (postContent.value || postImage.value) {
    posts.value.push({
      user: currentUser, // Add user name to the post
      content: postContent.value,
      image: postImage.value ? URL.createObjectURL(postImage.value) : null,
    });
    postContent.value = '';
    postImage.value = null;
  }
};
</script>

<template>
  <AppLayout
    :is-with-app-bar-nav-icon="true"
    @is-drawer-visible="isDrawerVisible = !isDrawerVisible"
  >
    <template #navigation>
      <SideNavigation :is-drawer-visible="isDrawerVisible" />
    </template>

    <template #content>
      <!-- Dashboard Content -->
      <v-container>
        <v-row>
          <v-col cols="12">
            <h1>Welcome to the Dashboard!</h1>
          </v-col>

          <!-- Post Section -->
          <v-col cols="12">
            <v-card class="pa-4 mb-4">
              <v-card-title>Share your thoughts</v-card-title>
              <v-card-text>
                <v-textarea
                  v-model="postContent"
                  label="What recipe are you thinking today?"
                  outlined
                  rows="4"
                />
                <v-file-input
                  v-model="postImage"
                  label="Upload an image"
                  accept="image/*"
                  outlined
                />
                <v-btn
                  class="mt-2"
                  color="primary"
                  @click="handlePost"
                  :disabled="!postContent && !postImage"
                >
                  Post
                </v-btn>
              </v-card-text>
            </v-card>
          </v-col>

          <!-- Display Posts -->
          <v-col cols="12">
            <v-card
              v-for="(post, index) in posts"
              :key="index"
              class="pa-4 mb-4"
            >
              <v-card-title>
                <strong>{{ post.user }}</strong>
              </v-card-title>
              <v-card-text>
                <p>{{ post.content }}</p>
                <v-img
                  v-if="post.image"
                  :src="post.image"
                  max-height="300"
                  contain
                />
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </template>
  </AppLayout>
</template>
