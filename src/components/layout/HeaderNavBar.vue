<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container-fluid">
        <img src="../../assets/logo.svg" alt="Play 2 learn logo" width="45" height="43" class="me-1" />
        <a class="navbar-brand" href="/">Play2Learn</a>
        <button class="navbar-toggler" type="button" 
          data-bs-toggle="collapse" data-bs-target="#navbarText">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarText">
            <ul class="navbar-nav mr-auto text-right">
                <li class="nav-item m-1 active">
                    <router-link class="nav-link btn--nav" to="/">Home</router-link>
                </li>

                <li class="nav-item m-1 dropdown">
                  <button class="nav-link dropdown-toggle btn--nav" 
                  type="button"    data-bs-toggle="dropdown" aria-expanded="false">
                    Games
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <router-link class="dropdown-item" to="/anagram-hunt">Anagram Hunt</router-link>
                    </li>
                    <li>
                      <router-link class="dropdown-item" to="/math-facts">Math Facts Practice</router-link>
                    </li>
                  </ul>
                </li>

                <li class="nav-item m-1">
                    <router-link class="nav-link btn--nav" to="/about">About</router-link>
                </li>
                <li class="nav-item m-1">
                    <a class="btn btn--raised" href="/">Login</a>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

header {
  background-color: var(--gunmetal-grey);
}

.btn--raised {
  background-color: var(--primary);
  color: #000;
  padding: 10px 48px 10px 18px;
  background-image: url("../../assets/arrow-right.svg");
  background-repeat: no-repeat;
  background-position: right 20px center;
  border-radius: 3px;
}

@media (min-width: 1000px) {
  .btn--nav {
    color: #fff;
    padding: 10px;
    border-radius: 3px;
    border: 1px solid var(--primary);
    box-shadow: inset 0 2px 1px 0 var(--primary);
  }
}

</style>
