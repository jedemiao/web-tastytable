<script>
export default {
  data: () => ({
    visible: false,
  }),
}
</script>

<template>
  <v-form fast-fail @submit.prevent>
    <v-text-field placeholder="Firstname" variant="outlined"></v-text-field>

    <v-text-field placeholder="Lastname" variant="outlined"></v-text-field>

    <v-text-field
      placeholder="Email"
      prepend-inner-icon="mdi-email-outline"
      variant="outlined"
    ></v-text-field>

    <v-text-field
      :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
      :type="visible ? 'text' : 'password'"
      placeholder="Password"
      prepend-inner-icon="mdi-lock-outline"
      variant="outlined"
      @click:append-inner="visible = !visible"
    ></v-text-field>

    <v-text-field
      :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
      :type="visible ? 'text' : 'password'"
      placeholder="Password confirmation"
      prepend-inner-icon="mdi-lock-outline"
      variant="outlined"
      @click:append-inner="visible = !visible"
    ></v-text-field>

    <v-btn
      class="mt-2"
      type="submit"
      block
      style="background-color: #d72323"
      prepend-icon="mdi-account-plus"
      >Register</v-btn
    >
  </v-form>
</template>
