<template>
<br>
<br>
<br>

  <div>
<h1 class="text-center mt-5">Im Raaid, Aspiring Web Developer</h1>
</div>
 <div class="text-center display-4 text-danger mt-5">
            <i class="fa-solid fa-code fa-beat" ></i>
            </div>
<div class="HomeBtn">
 <router-link to="/about"><button class="custom-btn btn-2 text-center mb-1">Take a tour!</button></router-link>
</div>


</template>
<script>
//  methods:{
//    goToAbout(){
//    this.$router.push('/about'); 
//       }
//   }
</script>
<style scoped>







body, html {
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  background-image: url(https://i.postimg.cc/D0CjkWsQ/62d943579008e.jpg);
}
body {
 background-image: url(https://i.postimg.cc/D0CjkWsQ/62d943579008e.jpg);
 background-attachment: fixed;
    display: flex;
    flex: wrap;
   /* remove no-repeat to show bg */
   
    }

h1{
    font-family: 'Playfair Display', serif;
    color: #000; /* Fallback for older browsers */
    color: rgba(112, 0, 0, 0.5);

    font-size: 98pt;

}
.HomeBtn{
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 50px;

}

.buttons-coll {
  width: 90%;
  margin: 50px auto;
  text-align: center;
}
button {
margin: 0px;
}
.custom-btn {
  padding: 10px 25px;
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  background: transparent;
  outline: none !important;
  cursor: pointer;
  transition: all 1.1s ease;
  position: relative;
  display: inline-block;
  color: rgb(172, 126, 126);
}
.btn-2 {
  border: none;
  border-bottom: 2px solid rgb(122, 0, 0);
  border-left: 2px solid rgb(211, 0, 0);
}
.btn-2:before,
.btn-2:after {
  position: absolute;
  content: "";
  right: 0;
  top: 0;
  background: rgb(212, 17, 17);
  transition: all 0.3s ease;
}
.btn-2:before {
  height: 0%;
  width: 2px;
}
.btn-2:after {
  width: 0%;
  height: 2px;
}
.btn-2:hover:before {
  height: 100%;
}
.btn-2:hover:after {
  width: 100%;
}

</style>







