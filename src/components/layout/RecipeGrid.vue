<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="4" lg="3" v-for="recipe in recipes" :key="recipe.id">
        <RecipeCard :recipe="recipe" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import RecipeCard from '@/components/layout/RecipeCard.vue'
import axios from 'axios'

// Reactive variable to store recipes
const recipes = ref([])

// Function to fetch recipes from TheMealDB API
const fetchRecipes = async () => {
  try {
    const response = await axios.get(
      'https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert',
    )

    // Map the API data into a format compatible with RecipeCard
    recipes.value = response.data.meals.map(meal => ({
      id: meal.idMeal,
      title: meal.strMeal,
      image: meal.strMealThumb,
      description: meal.strInstructions.slice(0, 100) + '...', // Shorten description
    }))
  } catch (error) {
    console.error('Failed to fetch recipes:', error)
  }
}

// Fetch recipes when the component is mounted
onMounted(fetchRecipes)
</script>
