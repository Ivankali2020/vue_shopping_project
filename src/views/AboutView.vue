<template>
  <div class="about bg-cBlack pt-5  overflow-hidden " style="height: 100%">
   <div class="container mt-3  ">
    <Transition name="list">
      <div v-if="Products" class="row " >
        <div  class="col-md-3 mb-2 col-lg-2" v-for="product in Products">
          <div class="card shadow-sm mt-5 animate__animated animate__fadeIn">
            <div class=" m-auto" >
              <img :src="product.image" class="foods" width="100" alt="">
            </div>
            <div class="card-body ">
              <div >
                <h1 class="mb-1 h4  fw-bolder text-grey-200  ">{{ product.title.substr(0,10) }}</h1>
                <p class="mb-3  small text-grey-200 " style="font-size: 10px;text-align: justify">
                  {{ product.short_desc }}
                </p>
              </div>
              <div class="d-flex justify-content-between align-items-baseline mt-3  ">
                <h4 class="fw-bolder text-grey-200 mb-0 align-self-end  h6 ">{{ product.price }}</h4>
                <div>
                  <button class="btn-sm btn btn-outline-secondary  me-2 " >
                    <i class="bi bi-cart3"></i>
                  </button>
                  <router-link :to="'/cartShow/'+product.id" class=" btn-sm btn btn-outline-grey  " >
                    <i class="bi bi-info "></i>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="vh-100 d-flex justify-content-center align-items-center  " style="z-index: 10">
        <img src="../assets/Photo/loading.svg" width="100" alt="">
      </div>
    </Transition>
   </div>
    <img src="../assets/Photo/bg.jpg" class="listImg" alt="" style="z-index: -1">

  </div>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    data() {
      return {
        tests : [],
      }
    },
    computed: {
        ...mapGetters(['Products']),
    },
    methods: {
        ...mapActions(['getProducts']),
    },
    mounted() {
      if(!this.Products){
        this.getProducts();
      }
      console.log(this.Products)
    }

  }
</script>

<style scoped>
.btn{
  border-radius: 8px;
}
.foods{
  margin-top: -50%;
  transition:.4s all ease;

}
.listImg{
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.8;

}
.card{
  border-radius: 20px;
  width: 100%;
  backdrop-filter: blur(13px) saturate(85%) !important;
  -webkit-backdrop-filter: blur(13px) saturate(85%) !important;
  background-color: rgba(255, 255, 255, 0);
  border: 1px solid #02361c;
}

.card:hover img{
  transform: scale(1.3);
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

.list-enter-active,
.list-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
}
</style>