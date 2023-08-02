<template>
  <section>
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

                  <p id="hide" class="small mb-4 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>
                  <div id="login-success"></div>

                  <button 
                    class="btn btn-outline-light btn-lg btn--raised rounded-3" 
                    type="submit"
                    @click="onSubmit"
                  >
                    Login
                  </button>

                </form>
              </div>

              <div>
                <p class="mb-0">Don't have an account? 
                  <router-link 
                    to="/login/register" 
                    class="text-white-50 fw-bold"
                    @click="onRegisterLinkClicked"
                  >
                    Register
                  </router-link>
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
        this.loginSuccess();
        setTimeout(() => {
          this.$router.push({ name: 'AnagramHuntView'});
        }, 2000);  
      }
      },
      loginSuccess() {
        const loginSuccess = document.getElementById('login-success');
        const hide = document.querySelector('#hide');
        hide.style.display = 'none';
        loginSuccess.innerHTML = `
          <div class="alert alert-success alert-dismissible fade show" role="alert">
            <strong>Success!</strong> You are logged in.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
        `;
      },
      onRegisterLinkClicked() {
        this.$emit('showRegistrationForm');
      },
    },
  }
  

</script>

<style scoped>


.error-message {
  color: yellow;
  font-size: 0.8rem;
  margin-top: 0.2rem;
}

</style>