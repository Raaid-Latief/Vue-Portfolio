<template>
  <div class="navigation">
      <nav>
    <div class="row">
    <router-link class="col-lg-4 col-md-4" to="/Home">Home</router-link> 
    <router-link class="col-lg-4 col-md-4" to="/about">About</router-link>
    <router-link class="col-lg-4 col-md-4" to="/Projects">Projects</router-link>
    </div>
  </nav>
  </div>
</template>
<script>
export default {
  name: "Nav",
};
</script>
<style>



#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  padding: 20px;
 background-image: linear-gradient(to left top, #8f7082, #997371, #947c67, #83876b, #708f7d);
}

nav a {
  font-weight: bold;
  color:#390039;
}

nav a.router-link-exact-active {
  color:#456302;
  

}


</style>








