<template>
  <LoginForm />
  <RegistrationForm />
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
}
</script>
