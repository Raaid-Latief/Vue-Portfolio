<template>
  <v-app>
    <v-main>
      <Nav />
      <router-view/>

    </v-main>
  </v-app>
</template>
<script>
import Nav from "@/components/Nav.vue";
import Home from "./components/Home.vue";


export default {
  name: 'App',
  components: {
    Nav,
    Home,

},
  //data: () => ({
    //
 // }),
}
</script>