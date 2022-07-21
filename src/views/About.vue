<template>
  <div>
    <about />
    <contact />
    <Footer />
  </div>
</template>
<script>
import About from "../components/About.vue";
import Contact from "../components/Contact.vue";
import Footer from "../components/Footer.vue";
export default {
  components: {
    About,
    Contact,
    Footer,
  },
};
</script>
<style></style>