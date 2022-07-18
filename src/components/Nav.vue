<template>
  <div class="navigation">
      <nav class="row">
        <h1></h1>
    <div class="row">
    <router-link class="col-lg-4 col-md-4 col-sml-4" to="/">Home</router-link> 
    <router-link class="col-lg-4 col-md-4 col-sml-4" to="/about">About</router-link>
    <router-link class="col-lg-4 col-md-4 col-sml-4" to="/Home">Landing</router-link>
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

/* Changes background of all pages */
body, html {
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100vh;
}
body {
 background-image: linear-gradient(to left top, #8f7082, #997371, #947c67, #83876b, #708f7d);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.logo{
     font-family: 'Great Vibes', cursive;
     transform: rotate(354deg);
     
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








