<template>
<br>
<br>
<br>
<br>
<br>
    <div>
        <h1 class="projheading p-2 text-center">Welcome to my Project Gallery</h1>


       
<div class="row">
<!-- Button trigger modal -->
<button type="button" class="btn col-lg-4" data-bs-toggle="modal" data-bs-target="#exampleModal">
    <div class="hover07">
    <figure><img src="https://picsum.photos/300/200?image=1024" /></figure>
    </div>
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
      

      
      </div>
      <div class="modal-body">
             <h3 class="modal-head text-center">BMI</h3>
       <img class="img1 text-center" src="https://picsum.photos/300/200?image=1024" />
        <div class="row">
            <h3 class="col-lg-6 col-md-6 col-sml-6 text-center"><a href="https://www.linkedin.com/in/raaid-abdullatief-35b3a3208/" target="_blank">
        <i class="fa-brands fa-github"></i>
        </a></h3>
               <h3 class="col-lg-6 col-md-6 col-sml-6 text-center"><a href="https://www.linkedin.com/in/raaid-abdullatief-35b3a3208/" target="_blank">
          <i class="fa-solid fa-earth-africa"></i>
        </a></h3>
               <!-- <a href="https://www.linkedin.com/in/raaid-abdullatief-35b3a3208/" target="_blank">
          <i class="fa-brands fa-linkedin-in fa-2x "></i>
        </a> -->
                  
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">x</button>
       
      </div>
    </div>
  </div>
</div>


<button type="button" class="btn col-lg-4" data-bs-toggle="modal" data-bs-target="#exampleModal">
    <div class="hover07">
    <figure><img src="https://picsum.photos/300/200?image=1024" /></figure>
    </div>
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Eagle</h5>
        <figure><img src="https://picsum.photos/300/200?image=1024" /></figure>
      
      </div>
      <div class="modal-body">
        <h4>Random text</h4>
        <div class="row">
            <h3 class="col-lg-6"><a href="https://www.linkedin.com/in/raaid-abdullatief-35b3a3208/" target="_blank">
        <i class="fa-brands fa-github"></i>
        </a></h3>
               <h3 class="col-lg-6"><a href="https://www.linkedin.com/in/raaid-abdullatief-35b3a3208/" target="_blank">
          <i class="fa-solid fa-earth-africa"></i>
        </a></h3>
               <!-- <a href="https://www.linkedin.com/in/raaid-abdullatief-35b3a3208/" target="_blank">
          <i class="fa-brands fa-linkedin-in fa-2x "></i>
        </a> -->
                  
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

<button type="button" class="btn  col-lg-4" data-bs-toggle="modal" data-bs-target="#exampleModal">
    <div class="hover08">
    <figure><img src="https://picsum.photos/300/200?image=1024" /></figure>
    </div>
</button>



</div>
    </div>
</template>
<script>
export default {
    name: "Projects",
};
</script>
<style scoped>
    body, html {
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100vh;
}
img{
    border: 5px solid #555;
    height: 210px;
    width: 350px;
}

.img1{
    border: 50pt;
    padding: 20px;
    padding-right: 20px;
}

.modal-head{
    font-family: 'Playfair Display', serif;
}

.modal-header{
    border: 5px;
}
.modal-content{
 background-color: rgb(0, 0, 0);
 border: 4px;
}
.modal-footer{
    border: 5px;
}

/* Headings */

.projheading{
  font-family: 'Playfair Display', serif;
    color: #000; /* Fallback for older browsers */
    color: rgba(112, 0, 0, 0.5);

    font-size: 90pt;
}

.hover07 figure img {
	-webkit-filter: blur(3px);
	filter: blur(3px);
	-webkit-transition: .3s ease-in-out;
	transition: .3s ease-in-out;
}
.hover07 figure:hover img {
	-webkit-filter: blur(0);
	filter: blur(0);
}
.fa-linkedin-in:hover{
    color:rgb(66, 13, 13)  !important;
    opacity: unset;
 }

 .fa-github:hover{
    color:rgb(66, 13, 13) !important;
    opacity: unset;
 }

.fa-github{
size: 150px;
}
</style>