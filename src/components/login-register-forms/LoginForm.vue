<template>

  <section class="d-none gradient-custom">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card bg--primary--color text-white rounded-5">
          <div class="card-body p-5 text-center">

            <div class="mb-md-5 mt-md-2 pb-5">

              <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
              <p class="text-white-50 mb-5">Please enter your login and password!</p>

              <form>
                <div class="form-outline form-white mb-4">
                  <div :class="{ error: v$.loginEmail.$errors.length }">
                    <input 
                      v-model="v$.loginEmail.$model"
                      type="email" 
                      id="login-email" 
                      class="form-control form-control-lg" 
                      autocomplete="username"
                    />
                    <label class="form-label" for="login-email">Email</label>
                    <div class="input-errors" v-for="error of v$.loginEmail.$errors" :key="error.$uid">
                      <div class="error-message">{{ error.$message }}</div>
                    </div>
                  </div>
                </div>

                <div class="form-outline form-white mb-4">
                  <div :class="{ error: v$.loginPassword.$errors.length }">
                    <input 
                      v-model="v$.loginPassword.$model"
                      type="password" 
                      id="login-password" 
                      class="form-control form-control-lg"
                      autocomplete="current-password" 
                    />
                    <label class="form-label" for="login-password">Password</label>
                    <div class="input-errors" v-for="error of v$.loginPassword.$errors" :key="error.$uid">
                      <div class="error-message">{{ error.$message }}</div>
                    </div>
                  </div>
                </div>

                <p class="small mb-4 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>

                <button 
                  class="btn btn-outline-light btn-lg btn--raised" 
                  type="submit"
                  @click="onSubmit"
                >
                  Login
                </button>

              </form>
            </div>

            <div>
              <p class="mb-0">Don't have an account? 
                <router-link to="/login/register" class="text-white-50 fw-bold">Register</router-link>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>

</template>

<script>

  import { useVuelidate } from '@vuelidate/core';
  import { required, email, minLength, helpers } from '@vuelidate/validators';

  export default {
    name: 'LoginForm',
    setup() {
      return { v$: useVuelidate() };
    },
    data() {
      return {
        loginEmail: '',
        loginPassword: '',
      };
    },
    validations() {
      return {
        loginEmail:  {
          required: helpers.withMessage('Email is required', required),
          email,
        },
        loginPassword: {
          required: helpers.withMessage('Min. 3 digit password is required', required),
          minLength: minLength(3),
        },
      };
    },
    methods: {
      onSubmit() {
        this.v$.$touch();
        if (!this.v$.$invalid) {
        console.log('Form submitted!');
        // Your login form submission logic here
      }
      },
    },
  }
  

</script>

<style scoped>

.gradient-custom {
/* fallback for old browsers */
/* background: #6a11cb; */

/* Chrome 10-25, Safari 5.1-6 */
/* background: -webkit-linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1)); */

/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
/* background: linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1)) */

background: linear-gradient(to right, rgba(61, 165, 217, 0.7), rgba(41, 145, 197, 1));
}

.error-message {
  color: yellow;
  font-size: 0.8rem;
  margin-top: 0.2rem;
}

</style>