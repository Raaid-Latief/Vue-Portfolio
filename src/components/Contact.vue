<template>
    <div>
        

<!-- <a href="#" class="float">
<i class="fa-solid fa-phone-flip my-float"></i>
</a> -->

<!-- Button trigger modal -->
<button data-bs-toggle="modal" data-bs-target="#exampleModal" >
<a href="#" class="float">
<i class="fa-solid fa-phone-flip my-float"></i>
</a>
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content text-center">
      <div class="modal-body">
    <!--CONTACT-->
<!-- <section id="contact" class="contact">
  <div class="container p-2">
    <div>
      <h2 class="text-center text-danger">Questions?</h2>
      <p class="text-center">Lets get in touch</p>
    </div>


    
    <section id="booking" class="p-1">
      <div class="row">

     
        <div class="col-md-9 mb-md-0 mb-5">
          
            <form 
            action="https://formspree.io/f/xeqnrenb"
            method="POST" class="form">

              
                <div class="row">

                    <div class="col-md-6">
                        <div class="md-form p-2">
                            <input type="name" id="name" name="name" class="form-control" placeholder="Name*">
                            <label for="name" class=""></label>
                        </div>
                    </div>
                 

                 
                    <div class="col-md-6">
                        <div class="md-form p-2">
                            <input type="email" id="email" name="email" class="form-control" placeholder="Email*">
                            <label for="email" class=""></label>
                        </div>
                    </div>
              

                </div>
            
                <div class="row">
                    <div class="col-md-12">
                        <div class="md-form p-2">
                            <input type="subject" id="subject" name="subject" class="form-control" placeholder="Subject*" >
                            <label for="subject" class=""></label>
                        </div>
                    </div>
                </div>
             
                <div class="row">
                    <div class="col-md-12">

                        <div class="md-form p-2">
                            <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea" placeholder="Message*"></textarea>
                            <label for="message"></label>
                        </div>

                    </div>
                </div>
       


            <div class="row text-center text-md-left p-4">
                <button type="submit" class="btn btn-outline-success col-lg-6 col-md-6" target="_blank">Send</button>
             <button type="button" class="btn btn-outline-danger col-lg-6 col-md-6" data-bs-dismiss="modal">Close</button>
            </div>
          

            <div class="status"></div>
        </form>
        </div>
      

      </div>
	  </section>
      
    </div>
	</section> -->
  <div class="text-center">
    <h3 class="contact-head text-center p-2">Contact Me!</h3>
    <div class="p-3">
          <form 
            action="https://formspree.io/f/xeqnrenb"
            method="POST" class="form">

              
                <div class="row">

                    <div class="col-md-6">
                        <div class="md-form p-2">
                            <input type="name" id="name" name="name" class="form-control" placeholder="Name*">
                            <label for="name" class=""></label>
                        </div>
                    </div>
                 

                 
                    <div class="col-md-6">
                        <div class="md-form p-2">
                            <input type="email" id="email" name="email" class="form-control" placeholder="Email*">
                            <label for="email" class=""></label>
                        </div>
                    </div>
              

                </div>
            
                <div class="row">
                    <div class="col-md-12">
                        <div class="md-form p-2">
                            <input type="subject" id="subject" name="subject" class="form-control" placeholder="Subject*" >
                            <label for="subject" class=""></label>
                        </div>
                    </div>
                </div>
             
                <div class="row">
                    <div class="col-md-12">

                        <div class="md-form p-2">
                            <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea" placeholder="Message*"></textarea>
                            <label for="message"></label>
                        </div>

                    </div>
                </div>
       


            <div class="contact-btn row p-3">
                <div class="col-md-6">
                <button type="submit" class="btn btn-outline-success col-lg-6" target="_blank">Send</button>
           </div>
             <div class="col-md-6">
           <button type="button" class="btn btn-outline-danger col-lg-6" data-bs-dismiss="modal">Close</button>
            </div>
            </div>
          

          
        </form>

    </div>
  </div>
  </div>
</div>
</div>
</div>
</div>
</template>
<script>
</script>
<style scoped>
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
.modal{
    left: 31%;
}
.modal-header1{
    border: 5px;
}
.modal-content1{
 background-color: rgb(0, 0, 0);
 border: 4px;
 padding: 16px;
}
.modal-footer1{
    border: 5px;
}

.modal-dialog{
    display: flex;
align-items: center;
justify-content: center;
padding-left: 70px;
}
#contact{
    background-color: black; 
    /* padding: 50px; */
}



.send-btn{
    background-color: black;
}


</style>