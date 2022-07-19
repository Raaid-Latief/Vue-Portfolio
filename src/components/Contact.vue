<template>
    <div>
        

<!-- <a href="#" class="float">
<i class="fa-solid fa-phone-flip my-float"></i>
</a> -->

<!-- Button trigger modal -->
<button data-bs-toggle="modal" data-bs-target="#exampleModal">
<a href="#" class="float">
<i class="fa-solid fa-phone-flip my-float"></i>
</a>
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

</div>
</template>
<script>
</script>
<style>
    *{padding:0;margin:0;}

body{
	font-family:Verdana, Geneva, sans-serif;
	font-size:18px;
	background-color:#CCC;
}

.float{
	position:fixed;
	width:60px;
	height:60px;
	bottom:35px;
	right:14px;
	background-color:#0C9;
	color:#FFF;
	border-radius:50px;
	text-align:center;
	box-shadow: 2px 2px 3px #999;
}

.my-float{
	margin-top:22px;
}

.modal-header1{
    border: 5px;
}
.modal-content1{
 background-color: rgb(0, 0, 0);
 border: 4px;
}
.modal-footer1{
    border: 5px;
}


#contact{
    background-color: black; 
    padding: 50px;
}



.send-btn{
    background-color: black;
}


</style>