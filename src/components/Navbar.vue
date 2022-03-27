<template>
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark sticky-top  position-fixed top-0" style="left: 0">
       <div class="container">
          <a class="navbar-brand" href="#">
            <i class="bi bi-stars "></i>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link class="nav-link " to="/">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/about">Shop</router-link>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Profile
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item text-danger " href="#">Logout</a></li>
                </ul>
              </li>

            </ul>
            <router-link to="/cart" class="btn btn-outline-primary ">
              <i class="bi bi-cart3"></i>
              <sup class=" bg-dark p-1  ">1</sup>
            </router-link>
          </div>
        </div>
      </nav>

    </div>
</template>

<script>
    export default {
        name:'Navbar',

    }
</script>

<style lang="scss" scoped>
$theme-colors: (
    "primary":#42b983,
    "secondary":#1272d2
);
@import "~bootstrap/scss/bootstrap";

$secondary : #131313;
.router-link-exact-active{
    color: #42b983 !important;

  }
.navbar{
  width: 100%;
  backdrop-filter: blur(3px) saturate(85%);
  -webkit-backdrop-filter: blur(3px) saturate(85%);
  background-color: rgba(255, 255, 255, 0);
  z-index: 10000;
}

</style>