<template>
 <div>
    <Navbar></Navbar>

    <router-view/>
 </div>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  components: {
    Navbar
  },
}
</script>

<style lang="scss">
//@import "~bootstrap/scss/bootstrap";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
