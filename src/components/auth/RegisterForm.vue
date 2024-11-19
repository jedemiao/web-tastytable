<script setup>
import {
  requiredValidator,
  emailValidator,
  passwordValidator,
  confirmedValidator,
} from '@/utils/validators'
import AlertNotification from '@/components/common/AlertNotification.vue'
import { supabase, formActionDefault } from '@/utils/supabase.js'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const formDataDefault = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  password_confirmation: '',
}

const formData = ref({
  ...formDataDefault,
})
const formAction = ref({
  ...formActionDefault,
})

const isPasswordVisible = ref(false)
const isPasswordConfirmVisible = ref(false)
const refVForm = ref()

const onSubmit = async () => {
  formAction.value = { ...formActionDefault, formProcess: true }

  const { data, error } = await supabase.auth.signUp({
    email: formData.value.email,
    password: formData.value.password,
    options: {
      data: {
        firstname: formData.value.firstname,
        lastname: formData.value.lastname,
      },
    },
  })

  if (error) {
    formAction.value.formErrorMessage = error.message
    formAction.value.formStatus = error.status
  } else if (data) {
    formAction.value.formSuccessMessage = 'Successfully Registered Account!'

    router.replace('/')
  }
  refVForm.value?.reset()

  formAction.value.formProcess = false
}

const onFormSubmit = () => {
  refVForm.value?.validate().then(({ valid }) => {
    if (valid) onSubmit()
  })
}
</script>

<template>
  <AlertNotification
    :form-success-message="formAction.formSuccessMessage"
    :form-error-message="formAction.formErrorMessage"
  ></AlertNotification>

  <v-form class="mt-5" ref="refVForm" @submit.prevent="onFormSubmit">
    <v-row>
      <v-col cols="12" md="6">
        <v-text-field
          v-model="formData.firstname"
          :rules="[requiredValidator]"
          placeholder="Firstname"
          variant="outlined"
        ></v-text-field>
      </v-col>

      <v-col cols="12" md="6">
        <v-text-field
          v-model="formData.lastname"
          :rules="[requiredValidator]"
          placeholder="Lastname"
          variant="outlined"
        ></v-text-field>
      </v-col>

      <v-col cols="12">
        <v-text-field
          v-model="formData.email"
          placeholder="Email"
          prepend-inner-icon="mdi-email-outline"
          :rules="[requiredValidator, emailValidator]"
          variant="outlined"
        ></v-text-field>
      </v-col>

      <v-col cols="12" md="6">
        <v-text-field
          v-model="formData.password"
          :append-inner-icon="isPasswordVisible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="isPasswordVisible ? 'text' : 'password'"
          placeholder="Password"
          prepend-inner-icon="mdi-lock-outline"
          :rules="[requiredValidator, passwordValidator]"
          variant="outlined"
          @click:append-inner="isPasswordVisible = !isPasswordVisible"
        ></v-text-field>
      </v-col>

      <v-col cols="12" md="6">
        <v-text-field
          v-model="formData.password_confirmation"
          :append-inner-icon="
            isPasswordConfirmVisible ? 'mdi-eye-off' : 'mdi-eye'
          "
          :type="isPasswordConfirmVisible ? 'text' : 'password'"
          placeholder="Password confirmation"
          prepend-inner-icon="mdi-lock-outline"
          :rules="[
            requiredValidator,
            confirmedValidator(
              formData.password_confirmation,
              formData.password,
            ),
          ]"
          variant="outlined"
          @click:append-inner="
            isPasswordConfirmVisible = !isPasswordConfirmVisible
          "
        ></v-text-field>
      </v-col>
    </v-row>

    <v-btn
      class="mt-2"
      type="submit"
      block
      style="background-color: #d72323"
      prepend-icon="mdi-account-plus"
      :disabled="formAction.formProcess"
      :loading="formAction.formProcess"
      >Register
    </v-btn>
  </v-form>
</template>
