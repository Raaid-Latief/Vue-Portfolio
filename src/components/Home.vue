<template>
<br>
<br>
<br>
<section class="home">
  <div>
<h1 class="text-center mt-5">Im Raaid Abdullatief</h1>
<h2 class="text-center mt-5"> Aspiring Web Developer</h2>
</div>
 <div class="text-center display-4 text-danger mt-5">
            <i class="fa-solid fa-code fa-beat" ></i>
            </div>
            <div class="padding">
<div class="HomeBtn">
 <router-link to="/about"><button class="custom-btn btn-2 text-center mb-1">Take a tour!</button></router-link>
</div>
</div>
</section>
</template>
<script>

</script>
<style scoped>

.home{
  background-image: url(https://i.postimg.cc/85qL5vN4/127068-statue-dark-Ancient-Greek-sculpture-simple-background.jpg);
  padding-top: 150px;
  background-repeat: no-repeat;
  background-attachment: fixed;
     background-size: cover;
     overflow-x: hidden;

}


    
h1{
    font-family: 'Playfair Display', serif;

    color: #cc9d18;
  text-shadow: 1px 1px 0px #ff0000;
    font-size: 100px;

}
h2{
      font-family: 'Playfair Display', serif;

    color: #cc9d18;
      text-shadow: 1px 1px 0px #ff0000;

    font-size: 60px;
}

.padding{
  padding-bottom: 357px;
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
  color: #18cc9d;
}
.btn-2 {
  border: none;
  border-bottom: 2px solid #18cc9d;
  border-left: 2px solid #18cc9d;
}
.btn-2:before,
.btn-2:after {
  position: absolute;
  content: "";
  right: 0;
  top: 0;
  background: #18cc9d;
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

.fa-code{
  color: black;
}

</style>





