<template>
  <section>
    <div class="container py-3 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card bg--primary--color text-white rounded-5">

            <div class="card-body p-5 text-center">
              <form>
                <div class="mb-md-5 mt-md-2 pb-5">
    
                  <h2 class="fw-bold mb-2 text-uppercase">Register</h2>
                  <p class="text-white-50 mb-5">Please choose your login and password!</p>
    
    
                    <div class="row">
                        <div class="col-md-6 mb-4">
                          <div :class="{ error: v$.firstName.$errors.length }">
                            <div class="form-outline">
                              <input
                                v-model="v$.firstName.$model" 
                                type="text" 
                                id="first-name" 
                                class="form-control" 
                                autocomplete="given-name"
                              />
                              <label class="form-label" for="first-name">First Name</label>
                              <div class="input-errors" v-for="error of v$.firstName.$errors" :key="error.$uid">
                                <div class="error-message">{{ error.$message }}</div>
                              </div>
                            </div>
                          </div>
                        </div>
    
                        <div class="col-md-6 mb-4">
                          <div :class="{ error: v$.lastName.$errors.length }">
                            <div class="form-outline">
                              <input 
                                v-model="v$.lastName.$model"
                                type="text" 
                                id="last-name" 
                                class="form-control" 
                              />
                              <label class="form-label" for="last-name">Last Name</label>
                              <div class="input-errors" v-for="error of v$.lastName.$errors" :key="error.$uid">
                                <div class="error-message">{{ error.$message }}</div>
                              </div>
                            </div>
                          </div>
                        </div>
    
                    </div>
    
    
                  <div class="form-outline form-white mb-4">
                    <div :class="{ error: v$.regEmail.$errors.length }">
                      <input 
                        v-model="v$.regEmail.$model"
                        type="email" 
                        id="reg-email" 
                        class="form-control form-control-lg"
                        autocomplete="username" 
                      />
                      <label class="form-label" for="reg-email">Email</label>
                      <div class="input-errors" v-for="error of v$.regEmail.$errors" :key="error.$uid">
                        <div class="error-message">{{ error.$message }}</div>
                      </div>
                    </div>
                  </div>
    
                  <div class="form-outline form-white mb-4">
                    <div :class="{ error: v$.regPassword.$errors.length }">
                      <input 
                        v-model="v$.regPassword.$model"
                        type="password" 
                        id="reg-password" 
                        class="form-control form-control-lg" 
                        autocomplete="current-password"
                      />
                      <label class="form-label" for="reg-password">Password</label>
                      <div class="input-errors" v-for="error of v$.regPassword.$errors" :key="error.$uid">
                        <div class="error-message">{{ error.$message }}</div>
                      </div>
                    </div>
                  </div>
    
                  <p id="hide" class="small mb-4 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>
                  <div id="register-success"></div>
    
                  <button 
                    class="btn btn-outline-light btn-lg btn--raised rounded-3" 
                    type="submit"
                    @click="onSubmit"
                  >
                    Register
                  </button>
    
                </div>
              </form>

              <div>
                <p class="mb-0">Already have an account?
                  <router-link
                    to="/login"
                    class="text-white-50 fw-bold"
                    @click="onLoginLinkClicked"
                  >
                    Login
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
    name: 'RegistrationForm',
    setup() {
      return { v$: useVuelidate() };
    },
    data() {
      return {
        firstName: '',
        lastName: '',
        regEmail: '',
        regPassword: '',
      };
    },
    validations() {
      return {
        firstName: { 
          required: helpers.withMessage('First name required', required) 
        },
        lastName: { 
          required: helpers.withMessage('Last name required', required) 
        },
        regEmail: { 
          required: helpers.withMessage('Email is required', required),
          email 
        },
        regPassword: { 
          required: helpers.withMessage('Min. 3 digit password is required', required),
          minLength: minLength(3) 
        },
      };
    },
    methods: {
      onSubmit() {
        this.v$.$validate();
        if (!this.v$.$error) {
          console.log('Form submitted successfully!');
          this.registerSuccess();
          setTimeout(() => {
            this.$router.push({ name: 'AnagramHuntView' });
          }, 2000);
        }
      },
      registerSuccess() {
        const registerSuccess = document.getElementById('register-success');
        const hide = document.getElementById('hide');
        hide.style.display = 'none';
        registerSuccess.innerHTML = `
          <div class="alert alert-success alert-dismissible fade show" role="alert">
            <strong>Success!</strong> You have successfully registered.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
        `;
      },
      onLoginLinkClicked() {
        this.$emit('showLoginForm');
      }
    }
  }

</script>

<style scoped>

.error-message {
  color: yellow;
  font-size: 0.8rem;
  margin-top: 0.2rem;
}

</style>