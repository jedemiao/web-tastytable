<script setup>
import {
  requiredValidator,
  emailValidator,
  passwordValidator,
  confirmedValidator,
} from '@/utils/validators'
import { supabase, formActionDefault } from '@/utils/supabase.js'
import { ref } from 'vue'

const formDataDefault = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  password_confirmation: '',
}

const formData = ref(formDataDefault)
const formAction = ref(formActionDefault)

const ifPasswordVisible = ref(false)
const ifPasswordConfirmVisible = ref(false)
const refVForm = ref()

const onSubmit = () => {
  // alert(formData.value.email)
}

const onFormSubmit = () => {
  refVForm.value?.validate().then(({ valid }) => {
    if (valid) onSubmit()
  })
}
</script>

<template>
  <v-alert></v-alert>

  <v-form ref="refVForm" @submit.prevent="onSubmit">
    <v-text-field
      v-model="formData.firstname"
      :rules="[requiredValidator]"
      placeholder="Firstname"
      variant="outlined"
    ></v-text-field>

    <v-text-field
      v-model="formData.lastname"
      :rules="[requiredValidator]"
      placeholder="Lastname"
      variant="outlined"
    ></v-text-field>

    <v-text-field
      v-model="formData.email"
      placeholder="Email"
      prepend-inner-icon="mdi-email-outline"
      :rules="[requiredValidator, emailValidator]"
      variant="outlined"
    ></v-text-field>

    <v-text-field
      v-model="formData.password"
      :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
      :type="visible ? 'text' : 'password'"
      placeholder="Password"
      prepend-inner-icon="mdi-lock-outline"
      :rules="[requiredValidator, passwordValidator]"
      variant="outlined"
      @click:append-inner="visible = !visible"
    ></v-text-field>

    <v-text-field
      v-model="formData.password_confirmation"
      :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
      :type="visible ? 'text' : 'password'"
      placeholder="Password confirmation"
      prepend-inner-icon="mdi-lock-outline"
      :rules="[
        requiredValidator,
        confirmedValidator(formData.password_confirmation, formData.password),
      ]"
      variant="outlined"
      @click:append-inner="visible = !visible"
    ></v-text-field>

    <v-btn
      class="mt-2"
      type="submit"
      block
      style="background-color: #d72323"
      prepend-icon="mdi-account-plus"
      :disabled="formAction.formProcess"
      :loading="formAction.formProcess"
      >Register</v-btn
    >
  </v-form>
</template>
