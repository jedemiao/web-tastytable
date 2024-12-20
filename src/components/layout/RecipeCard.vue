<template>
  <v-card class="recipe-card" outlined>
    <v-img :src="recipe.image" height="200px"></v-img>
    <v-card-title>{{ recipe.title }}</v-card-title>
    <v-card-subtitle>
      {{ recipe.description }}
    </v-card-subtitle>
    <v-card-actions>
      <v-btn icon color="primary">
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon color="primary">
        <v-icon>mdi-share-variant</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
const props = defineProps({
  recipe: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
.recipe-card {
  max-width: 300px;
  margin: 10px;
}
</style>
