<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container-fluid">
        <img src="../../assets/logo.svg" alt="Play 2 learn logo" width="45" height="43" class="me-1" />
        <router-link class="navbar-brand text-uppercase" to="/">Play2Learn</router-link>
        <button class="navbar-toggler" type="button" 
          data-bs-toggle="collapse" data-bs-target="#navbarText">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarText">
            <ul class="navbar-nav mr-auto text-right">
                <li class="nav-item m-1 active">
                    <router-link class="nav-link btn--nav text-uppercase" to="/">Home</router-link>
                </li>

                <li class="nav-item m-1 dropdown">
                  <button class="nav-link dropdown-toggle btn--nav text-uppercase" 
                  type="button"    data-bs-toggle="dropdown" aria-expanded="false">
                    Games
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <router-link class="dropdown-item text-uppercase" to="/anagram-hunt">Anagram Hunt</router-link>
                    </li>
                    <li>
                      <router-link class="dropdown-item text-uppercase" to="/math-facts">Math Facts Practice</router-link>
                    </li>
                  </ul>
                </li>

                <li class="nav-item m-1">
                    <router-link class="nav-link btn--nav text-uppercase" to="/about">About</router-link>
                </li>
                <li class="nav-item m-1">
                    <router-link class="btn btn--raised btn-outline-light text-uppercase" to="/login">Login</router-link>
                </li>
            </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>

export default {
  name: 'HeaderNavBar',
}

</script>



