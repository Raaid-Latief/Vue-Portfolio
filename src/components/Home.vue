<template>
<br>
<br>
<br>
  
  <div>
<h1>Im Raaid, Aspiring Web Developer</h1>
</div>
<div>
 <button class="custom-btn btn-2">Take a tour!</button>
</div>
    
</template>
<script>
//  methods:{
//    goToAbout(){
//    this.$router.push('/about'); 
//       }
//   }
</script>
<style>







body, html {
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
}
body {
 background-image: url(https://i.postimg.cc/T1gnR51f/Greek-Bg.jpg);
 background-attachment: fixed;
    display: flex;
    flex: wrap;
   /* remove no-repeat to show bg */
    background: no-repeat;
    }

h1{
    font-family: 'Playfair Display', serif;
    color: #000; /* Fallback for older browsers */
    color: rgba(255, 255, 255, 0.5);

    font-size: 100pt;

}

.buttons-coll {
  width: 90%;
  margin: 50px auto;
  text-align: center;
}
button {
  margin: 50px;
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
  color: white;
}
.btn-2 {
  border: none;
  border-bottom: 2px solid rgb(255, 255, 255);
  border-left: 2px solid rgb(255, 255, 255);
}
.btn-2:before,
.btn-2:after {
  position: absolute;
  content: "";
  right: 0;
  top: 0;
  background: rgb(255, 255, 255);
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









