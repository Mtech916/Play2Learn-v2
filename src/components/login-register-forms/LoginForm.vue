<template>

  <section class="gradient-custom">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card bg--primary--color text-white rounded-5">
          <div class="card-body p-5 text-center">

            <div class="mb-md-5 mt-md-2 pb-5">

              <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
              <p class="text-white-50 mb-5">Please enter your login and password!</p>

              <div class="form-outline form-white mb-4">
                <input type="email" id="login-email" class="form-control form-control-lg" />
                <label class="form-label" for="login-email">Email</label>
              </div>

              <div class="form-outline form-white mb-4">
                <input type="password" id="login-password" class="form-control form-control-lg" />
                <label class="form-label" for="login-password">Password</label>
              </div>

              <p class="small mb-4 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>

              <button class="btn btn-outline-light btn-lg btn--raised" type="submit">Login</button>

            </div>

            <div>
              <p class="mb-0">Don't have an account? <a href="#!" class="text-white-50 fw-bold">Register</a>
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
  export default {
    name: 'LoginForm'
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

</style>