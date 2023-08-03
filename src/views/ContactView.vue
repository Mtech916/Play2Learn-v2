<template>
  <div>
    <section class="vh-100">
      <div class="container py-3 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-8 col-lg-6 col-xl-5">
            <div class="card bg--primary--color text-white rounded-5 special--border">

              <div class="card-body p-5 text-center">
                <form>
                  <div class="mb-md-5 mt-md-4 pb-5">
  
                    <h2 class="fw-bold mb-2 text-uppercase">Contact Us</h2>
                    <p class="text-white-50 mb-5">How can we help?</p>
  
                    <div class="form-outline form-white mb-4">
                      <div :class="{ error: v$.fullName.$errors.length }">
                        <input 
                          v-model="v$.fullName.$model"
                          type="text" 
                          id="full-name" 
                          class="form-control form-control-lg" 
                          autocomplete="given-name"
                        />
                        <label class="form-label" for="full-name">Name</label>
                        <div class="input-errors" v-for="error of v$.fullName.$errors" :key="error.$uid">
                          <div class="error-message">{{ error.$message }}</div>
                        </div>
                      </div>
                    </div>
  
                    <div class="form-outline form-white mb-4">
                      <div :class="{ error: v$.contactEmail.$errors.length }">
                        <input 
                          v-model="v$.contactEmail.$model"
                          type="email" 
                          id="contact-email" 
                          class="form-control form-control-lg" 
                          autocomplete="email"
                        />
                        <label class="form-label" for="contact-email">Email</label>
                        <div class="input-errors" v-for="error of v$.contactEmail.$errors" :key="error.$uid">
                          <div class="error-message">{{ error.$message }}</div>
                        </div>
                      </div>
                    </div>
  
                    <div class="form-outline form-white mb-4">
                      <div :class="{ error: v$.subject.$errors.length }">
                        <textarea
                          v-model="v$.subject.$model" 
                          type="text" 
                          id="subject" 
                          class="form-control form-control-lg"
                        >
                        </textarea>
                        <label class="form-label" for="subject">Subject</label>
                        <div class="input-errors" v-for="error of v$.subject.$errors" :key="error.$uid">
                          <div class="error-message">{{ error.$message }}</div>
                        </div>
                      </div>
                    </div>
                    
                    <div id="form-send-success"></div>
  
                    <button 
                      class="btn btn-outline-light btn-lg btn--raised rounded-3" 
                      type="submit"
                      @click="onSubmit"
                    >
                      Send
                    </button>
  
                  </div>
                </form>  

              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

  import { useVuelidate } from '@vuelidate/core';
  import { required, email, helpers } from '@vuelidate/validators';

  export default {
    name: 'ContactView',
    setup() {
      return { v$: useVuelidate() };
    },
    data() {
      return {
        fullName: '',
        contactEmail: '',
        subject: '',
      };
    },
    validations() {
      return {
        fullName: {
          required: helpers.withMessage('Full name is required', required),
        },
        contactEmail: {
          required: helpers.withMessage('Email is required', required),
          email: helpers.withMessage('Email must be valid', email),
        },
        subject: {
          required: helpers.withMessage('Subject needed, so we can help', required),
        },
      };
    },
    methods: {
      onSubmit() {
        this.v$.$validate();
        if (!this.v$.$error) {
          console.log('Form submitted successfully');
          this.onSend();
        }
      },
      onSend() {
        const successMessage = document.querySelector('#form-send-success');
        successMessage.innerHTML = `
          <div class="alert alert-success alert-dismissible fade show" role="alert">
            <strong>Success!</strong> Your message has been sent and we will get back to you soon!
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
        `;
        this.resetForm();
      },
      resetForm() {
        this.fullName = '';
        this.contactEmail = '';
        this.subject = '';
        this.v$.$reset();
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