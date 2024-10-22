<script>
export default {
  data: () => ({
    visible: false,
  }),
}
</script>

<template>
  <v-form fast-fail @submit.prevent>
    <v-text-field
      label="Email"
      prepend-inner-icon="mdi-email-outline"
      variant="outlined"
    ></v-text-field>

    <v-text-field
      :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
      :type="visible ? 'text' : 'password'"
      placeholder="Enter your password"
      prepend-inner-icon="mdi-lock-outline"
      variant="outlined"
      @click:append-inner="visible = !visible"
    ></v-text-field>

    <v-btn
      class="mt-2"
      type="submit"
      block
      style="background-color: #d72323"
      prepend-icon="mdi-login"
      >Login</v-btn
    >
  </v-form>
</template>
