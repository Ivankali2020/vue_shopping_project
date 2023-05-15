<template>
    <div class="about bg-cBlack pt-5  overflow-hidden " >
        <div class="container">
            <div class="row align-items-center " style="height: 100vh">
                <div class="col-md-6 m-auto">
                    <div class="card ">
                        <div class="card-body ">
                            <h3 class="mb-4">Login</h3>
                            <div class="form-group mb-4 ">
                                <label for="" class="form-label">Username</label>
                                <input v-model="username" type="text"  class="form-control"/>
                            </div>
                            <div class="form-group mb-4 ">
                                <label for="" class="form-label">Password</label>
                                <input v-model="password" type="password" class="form-control" />
                            </div>
                            <div class="form-group mb-4 text-end ">
                                <button class="btn btn-secondary" @click="Login()">Login</button>
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
    data () {
        return {
            username : null,
            password : null,
        }
    },
    methods: {
        Login(){
            fetch('https://fakestoreapi.com/auth/login',{
            method:'POST',
            body:JSON.stringify({
                username: "mor_2314",
                password: "83r5^_"
            })
        })
            .then(res=>res.json())
            .then(json=>console.log(json))

            console.log(this.username+":"+this.password);
        }
    },

}
</script>

<style lang="scss" scoped>

</style>