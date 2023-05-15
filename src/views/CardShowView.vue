<template>
  <div class="bg-cBlack vh-100 overflow-auto pt-5  ">
    <div class=" align-items-center pt-5 ">
      <div class="col-10 col-md-7 m-auto ">
        <div class="card bg-transparent shadow ">
          <div class="card-body">
            <div class="row animate__animated animate__backInDown" v-if="Product">
              <div class="col-md-4" >

                <div class="w-100 mb-3  ">
                  <img :src="Product.image" class="w-100 rounded " alt="">
                </div>
                <div class="d-flex justify-content-between align-items-center" >
                  <button class="btn btn-danger " @click="qualtity--">
                    <i class="bi bi-cart-dash "></i>
                  </button>
                  <input type="text" class="form-control text-center  bg-transparent mx-2 text-white " v-model="qualtity" min="1">
                  <button class="btn btn-outline-secondary"  @click="qualtity++">
                    <i class="bi bi-cart-plus"></i>
                  </button>
                </div>

              </div>
              <div class="col-md-8 mt-3 mt-md-0  d-flex flex-column  justify-content-between text-secondary">
                <h1 class="fw-bolder "> {{ Product.title }}</h1>

                <div>
                  <h3>Description</h3>
                  <span class=" small" style="text-align: justify">
                    {{ Product.description }}
                  </span>
                </div>

                <div class="d-flex justify-content-between mt-3   ">
                  <h4 class="fw-bolder mb-0 align-self-end fw-bolder  h1">
                    <span class="text-secondary me-2">$</span>
                    <span class="">{{ Product.price }}</span>
                  </h4>
                  <button class="btn btn-outline-primary " @click="orderConfirm">
                    <span class="me-2 "> Add Cart</span>
                    <i class="bi bi-cart2"></i>
                  </button>
                </div>
              </div>
            </div>
           <Transition name="list" v-else >
             <div class="vh-100 d-flex justify-content-center align-items-center ">
               <img src="../assets/Photo/loading.svg" width="200" alt="">
             </div>
           </Transition>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "CardShowView.vue",
  data() {
    return {
      id : this.$route.params.id,
      qualtity: 1
    }
  },
  computed: {
   ...mapGetters(['Product'])
  },
  methods: {
    ...mapActions(['getProduct','storeCart']),
    orderConfirm(){
      this.$swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#73de4d',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, add it!'
      }).then((result) => {
        if (result.isConfirmed) {
          console.log(JSON.stringify(this.Product));
          let data = { qualtity : this.qualtity , product_id : this.id }
          this.storeCart(data);
          this.$swal(
              'Added!',
              'Your cart has been added.',
              'success'
          )
        }
      });
    }
  },
  mounted() {
    console.log(this.$route.params.id);
    this.getProduct(this.id);
  },

}
</script>

<style scoped>
.list-enter-active{
  animation: fadIn 1s ease;
}
.list-leave-active {
  transition: all 1s ease;
  animation: fadeOut .5s;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
}
</style>