<template>
  <div>
    <LoginForm v-if="!showRegistrationForm" @showRegistrationForm="showRegistrationForm = true" />
    <RegistrationForm v-else @showLoginForm="showRegistrationForm = false" />
  </div>
</template>

<script>

  import LoginForm from '@/components/login-register-forms/LoginForm.vue';
  import RegistrationForm from '@/components/login-register-forms/RegistrationForm.vue';

  export default {
    name: 'LoginRegisterView',
    components: {
      LoginForm,
      RegistrationForm,
    },
    data() {
      return {
        showRegistrationForm: false,
      }
    }
}
</script>
