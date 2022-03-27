<template>
  <div class="home">
    <div class="contant pt-5 text-white  ">
     <div class="container ">
       <div class="row">
         <div class="col-md-7 col-lg-8 mt-5 ">
             <div class="">
               <h1 class="display-1 fw-bolder ">Welcome !</h1>
               <h1 class=" fw-bolder text-secondary  ">To my Food</h1>
             </div>
            <div class="col-md-7 col-lg-5  ">
              <div class="d-flex justify-content-between align-items-center">
                <h1 class="fw-bolder  display-4  ">20%</h1>
                <div class="divider bg-secondary "></div>
                <span class="discount">Discount Upond Your Daily Order!</span>
              </div>
            </div>
         </div>
         <div class="row justify-content-center mt-5  ">
           <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel" style="max-width: 400px">
             <div class="carousel-indicators">
               <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
               <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
               <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
             </div>
             <div class="carousel-inner">
               <div class="carousel-item active" >
                 <div class="card bg-cBlack  mx-1  " style="max-width: 400px">
                   <div class="card-body position-relative">
                     <div class="d-flex ">
                       <div class="me-3 ">
                         <img src="../assets/Photo/food.png" width="100" class="d-block " alt="">
                       </div>
                       <div >
                         <h1 class="mb-1 fw-bolder  text-grey-200  ">Sushi</h1>
                         <p class="mb-0 small text-grey-200 " style="font-size: 10px">
                           somet etext form other personal nal somet etext form othe sdfkfd  sajjdflksd r personal dfasjlfj
                         </p>
                       </div>
                     </div>
                     <button class="btn btn-grey rounded-circle position-absolute top-0" style="right: 0;width: 40px;height: 40px">+</button>
                   </div>
                 </div>
               </div>
               <div class="carousel-item">
                 <div class="card bg-cBlack  mx-1  " style="max-width: 400px">
                   <div class="card-body position-relative">
                     <div class="d-flex ">
                       <div class="me-3 ">
                         <img src="../assets/Photo/food.png" width="100" class="d-block " alt="">
                       </div>
                       <div >
                         <h1 class="mb-1 fw-bolder ">Sushi</h1>
                         <p class="mb-0 small text-grey-200 " style="font-size: 10px">
                           somet etext form other personal nal somet etext form othe sdfkfd  sajjdflksd r personal dfasjlfj
                         </p>
                       </div>
                     </div>
                     <button class="btn btn-grey rounded-circle position-absolute top-0" style="right: 0;width: 40px;height: 40px">+</button>
                   </div>
                 </div>
               </div>
               <div class="carousel-item">
                 <div class="card bg-cBlack  mx-1  " style="max-width: 400px">
                   <div class="card-body position-relative">
                     <div class="d-flex ">
                       <div class="me-3 ">
                         <img src="../assets/Photo/food.png" width="100" class="d-block " alt="">
                       </div>
                       <div >
                         <h1 class="mb-1 fw-bolder ">Sushi</h1>
                         <p class="mb-0 small text-grey-200 " style="font-size: 10px">
                           somet etext form other personal nal somet etext form othe sdfkfd  sajjdflksd r personal dfasjlfj
                         </p>
                       </div>
                     </div>
                     <button class="btn btn-grey rounded-circle position-absolute top-0" style="right: 0;width: 40px;height: 40px">+</button>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {

  },
}
</script>

<style>
.card{
  border-radius: 20px;
}
.carousel-indicators{
  margin-bottom: -2rem !important;
}
.carousel-indicators [data-bs-target]{
  height: 8px;
  width: 8px;
  border-radius: 50%;
  margin: 0 10px;
}
  .discount{
    letter-spacing: 4px;
    white-space: pre-wrap;
  }
  .divider{
    margin: 10px 20px 0  20px;
    width: 3px;
    height: 80px;
    background-color: #73de4d;
  }
  .home {
    width: 100%;
    height: 100vh;
      background-image: url("../assets/Photo/bg.jpg") !important;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

</style>
