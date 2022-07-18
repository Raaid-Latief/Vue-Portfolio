<template>
  <div>
     <br>
    <br>
    <br>
    <br>
    <br>
    <br>
<h1>Hi, Im Raaid, Aspiring Web Developer</h1>
<div>
 <button class="custom-btn btn-2">Take a tour!</button>
</div>
    </div>
</template>
<script>
</script>
<style>

h1{
    font-family: 'Playfair Display', serif;
color: white;
}

.buttons-coll {
  width: 90%;
  margin: 50px auto;
  text-align: center;
}
button {
  margin: 20px;
}
.custom-btn {
  padding: 10px 25px;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  background: transparent;
  outline: none !important;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
}
.btn-2 {
  border: none;
  border-bottom: 2px solid #000;
  border-left: 2px solid #000;
}
.btn-2:before,
.btn-2:after {
  position: absolute;
  content: "";
  right: 0;
  top: 0;
  background: #000;
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








