<template>
<br>
<br>
<br>
<br>
<br>
<div>
  <h1>About myself hello</h1>

 <div>
      <div class="row">
<div class="col">
  <h2 class=" text-center p-5">About Me</h2>
  <P class="p-2">I'm a hard-working and passionate person. I love seeing progress, and if I am committed to something, I make sure to go all out. I'm not afraid of failure because there's always room to improve. I am gentle and always willing to advise as I love seeing people succeed. 
    Since I was a toddler, I have always been fascinated by technology and video games. My dream job is to work as a developer. I've always been curious about it and I always like to learn more about it. I did an IT learnership last year and had to drop out as I preferred to be the one developing the websites. This motivated me to pursue this field of work.
    </P>
</div>
<div class=" pfp col"><img src="https://i.postimg.cc/vTsKz7T5/avatar.jpg" alt=""></div>
  </div>
</div>
<div>
<h1>Pure Css responsive <span>timeline</span></h1>


<div class="container">

   <div class="timeline-block timeline-block-right">
      <div class="marker"></div>
      <div class="timeline-content">
         <h3>First Year</h3>
         <span>Some work experience</span>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>
      </div>
   </div>

   <div class="timeline-block timeline-block-left">
      <div class="marker"></div>
      <div class="timeline-content">
         <h3>Seconed Year</h3>
         <span>Some work experience</span>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>
      </div>
   </div>

   <div class="timeline-block timeline-block-right">
      <div class="marker"></div>
      <div class="timeline-content">
         <h3>Third Year</h3>
         <span>Some work experience</span>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>
      </div>
   </div>

   <div class="timeline-block timeline-block-left">
      <div class="marker"></div>
      <div class="timeline-content">
         <h3>Fourth Year</h3>
         <span>Some work experience</span>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>
      </div>
   </div>

   <div class="timeline-block timeline-block-right">
      <div class="marker"></div>
      <div class="timeline-content">
         <h3>Fifth Year</h3>
         <span>Some work experience</span>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>
      </div>
   </div>
</div>
</div>

<!-- Testimmonial Slider -->
<div>
    <section class="testimonial text-center">
        <div class="container1">

            <div class="heading white-heading">
                Testimonial
            </div>
            <div id="testimonial4" class="carousel slide testimonial4_indicators testimonial4_control_button thumb_scroll_x swipe_x" data-bs-ride="carousel" data-bs-pause="hover" data-bs-interval="5000" data-bs-duration="2000">
             
                <div class="carousel-inner" role="listbox">
                    <div class="carousel-item active">
                        <div class="testimonial4_slide">
                            <img src="https://i.ibb.co/8x9xK4H/team.jpg" class="img-circle img-responsive" />
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                            <h4>Client 1</h4>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="testimonial4_slide">
                            <img src="https://i.ibb.co/8x9xK4H/team.jpg" class="img-circle img-responsive" /><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                            <h4>Client 2</h4>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="testimonial4_slide">
                            <img src="https://i.ibb.co/8x9xK4H/team.jpg" class="img-circle img-responsive" />
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                            <h4>Client 3</h4>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#testimonial4" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </a>
                <a class="carousel-control-next" href="#testimonial4" data-bs-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </a>
            </div>
        </div>
    </section>

    

</div>
    </div>
</template>

<script>
export default {
name: "About",
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

/* Resume Timeline */
* {
   -webkit-box-sizing: border-box;
   -moz-box-sizing: border-box;
   box-sizing: border-box;
   outline: none;
}

body {
   margin: 0;
   padding: 30px 0;
   font-family: 'Roboto', sans-serif;
   background: #F1F2F6;
}

h1 {
   text-align: center;
   font-weight: 300;
   color: #777
}

h1 span {
   font-weight: 600;
}

.container {
   width: 80%;
   padding: 50px 0;
   margin: 50px auto;
   position: relative;
   overflow: hidden;
}

.container:before {
   content: '';
   position: absolute;
   top: 0;
   left: 50%;
   margin-left: -1px;
   width: 2px;
   height: 100%;
   background: #CCD1D9;
   z-index: 1
}

.timeline-block {
   width: -webkit-calc(50% + 8px);
   width: -moz-calc(50% + 8px);
   width: calc(50% + 8px);
   display: -webkit-box;
   display: -webkit-flex;
   display: -moz-box;
   display: flex;
   -webkit-box-pack: justify;
   -webkit-justify-content: space-between;
   -moz-box-pack: justify;
   justify-content: space-between;
   clear: both;
}

.timeline-block-right {
   float: right;
}

.timeline-block-left {
   float: left;
   direction: rtl
}

.marker {
   width: 16px;
   height: 16px;
   border-radius: 50%;
   border: 2px solid #F5F7FA;
   background: #4FC1E9;
   margin-top: 10px;
   z-index: 9999
}

.timeline-content {
   width: 95%;
   padding: 0 15px;
   color: #666
}

.timeline-content h3 {
   margin-top: 5px;
   margin-bottom: 5px;
   font-size: 25px;
   font-weight: 500
}

.timeline-content span {
   font-size: 15px;
   color: #a4a4a4;
}

.timeline-content p {
   font-size: 14px;
   line-height: 1.5em;
   word-spacing: 1px;
   color: #888;
}


@media screen and (max-width: 768px) {
   .container:before {
      left: 8px;
      width: 2px;
   }
   .timeline-block {
      width: 100%;
      margin-bottom: 30px;
   }
   .timeline-block-right {
      float: none;
   }

   .timeline-block-left {
      float: none;
      direction: ltr;
   }
}



/* Testimonial */
.heading {
    text-align: center;
    color: #454343;
    font-size: 30px;
    font-weight: 700;
    position: relative;
    margin-bottom: 70px;
    text-transform: uppercase;
    z-index: 999;
}
.white-heading{
    color: #ffffff;
}
.heading:after {
    content: ' ';
    position: absolute;
    top: 100%;
    left: 50%;
    height: 40px;
    width: 180px;
    border-radius: 4px;
    transform: translateX(-50%);
   
    background-repeat: no-repeat;
    background-position: center;
}
.white-heading:after {

    background-repeat: no-repeat;
    background-position: center;
}

.heading span {
    font-size: 18px;
    display: block;
    font-weight: 500;
}
.white-heading span {
    color: #ffffff;
}
/*-----Testimonial-------*/

.testimonial:after {
    position: absolute;
    top: -0 !important;
    left: 0;
    content: " ";
   
    background-size: 100% 100px;
    width: 100%;
    height: 100px;
    float: left;
    z-index: 99;
}

.testimonial {
    min-height: 375px;
    position: relative;

    padding-top: 50px;
    padding-bottom: 50px;
    background-position: center;
        background-size: cover;
}
#testimonial4 .carousel-inner:hover{
  cursor: -moz-grab;
  cursor: -webkit-grab;
}
#testimonial4 .carousel-inner:active{
  cursor: -moz-grabbing;
  cursor: -webkit-grabbing;
}
#testimonial4 .carousel-inner .item{
  overflow: hidden;
}

.testimonial4_indicators .carousel-indicators{
  left: 0;
  margin: 0;
  width: 100%;
  font-size: 0;
  height: 20px;
  bottom: 15px;
  padding: 0 5px;
  cursor: e-resize;
  overflow-x: auto;
  overflow-y: hidden;
  position: absolute;
  text-align: center;
  white-space: nowrap;
}
.testimonial4_indicators .carousel-indicators li{
  padding: 0;
  width: 14px;
  height: 14px;
  border: none;
  text-indent: 0;
  margin: 2px 3px;
  cursor: pointer;
  display: inline-block;
  background: #ffffff;
  -webkit-border-radius: 100%;
  border-radius: 100%;
}
.testimonial4_indicators .carousel-indicators .active{
  padding: 0;
  width: 14px;
  height: 14px;
  border: none;
  margin: 2px 3px;
  background-color: #9dd3af;
  -webkit-border-radius: 100%;
  border-radius: 100%;
}
.testimonial4_indicators .carousel-indicators::-webkit-scrollbar{
  height: 3px;
}
.testimonial4_indicators .carousel-indicators::-webkit-scrollbar-thumb{
  background: #eeeeee;
  -webkit-border-radius: 0;
  border-radius: 0;
}

.testimonial4_control_button .carousel-control{
  top: 175px;
  opacity: 1;
  width: 40px;
  bottom: auto;
  height: 40px;
  font-size: 10px;
  cursor: pointer;
  font-weight: 700;
  overflow: hidden;
  line-height: 38px;
  text-shadow: none;
  text-align: center;
  position: absolute;
  background: transparent;
  border: 2px solid #ffffff;
  text-transform: uppercase;
  -webkit-border-radius: 100%;
  border-radius: 100%;
  -webkit-box-shadow: none;
  box-shadow: none;
  -webkit-transition: all 0.6s cubic-bezier(0.3,1,0,1);
  transition: all 0.6s cubic-bezier(0.3,1,0,1);
}
.testimonial4_control_button .carousel-control.left{
  left: 7%;
  top: 50%;
  right: auto;
}
.testimonial4_control_button .carousel-control.right{
  right: 7%;
  top: 50%;
  left: auto;
}
.testimonial4_control_button .carousel-control.left:hover,
.testimonial4_control_button .carousel-control.right:hover{
  color: #000;
  background: #fff;
  border: 2px solid #fff;
}

.testimonial4_header{
  top: 0;
  left: 0;
  bottom: 0;
  width: 550px;
  display: block;
  margin: 30px auto;
  text-align: center;
  position: relative;
}
.testimonial4_header h4{
  color: #ffffff;
  font-size: 30px;
  font-weight: 600;
  position: relative;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.testimonial4_slide{
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 70%;
  margin: auto;
  padding: 20px;
  position: relative;
  text-align: center;
}
.testimonial4_slide img {
    top: 0;
    left: 0;
    right: 0;
    width: 136px;
    height: 136px;
    margin: auto;
    display: block;
    color: #f2f2f2;
    font-size: 18px;
    line-height: 46px;
    text-align: center;
    position: relative;
    border-radius: 50%;
    box-shadow: -6px 6px 6px rgba(0, 0, 0, 0.23);
    -moz-box-shadow: -6px 6px 6px rgba(0, 0, 0, 0.23);
    -o-box-shadow: -6px 6px 6px rgba(0, 0, 0, 0.23);
    -webkit-box-shadow: -6px 6px 6px rgba(0, 0, 0, 0.23);
}
.testimonial4_slide p {
    color: #ffffff;
    font-size: 20px;
    line-height: 1.4;
    margin: 40px 0 20px 0;
}
.testimonial4_slide h4 {
  color: #ffffff;
  font-size: 22px;
}

.testimonial .carousel {
	padding-bottom:50px;
}
.testimonial .carousel-control-next-icon, .testimonial .carousel-control-prev-icon {
    width: 35px;
    height: 35px;
}
/* ------testimonial  close-------*/

</style>
