<template>
    <div>
        <nav class="navbar bg-secondary ">
            <div class="container-fluid">
                <div class="container text-center ">
                    <div class="row ">
                        <!-- <div class="col-md-8"> -->
                            <div class="col-md-2">
                                <button @click="goToLogin" type="button" class="btn btn-danger">خروج از صفحه</button>
                            </div>
                            <div class="col-md-8">
                                <a class="navbar-brand link-light" href="#">انبار سالن (عمو حمید)</a>
                            </div>
                            <!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                              <span class="navbar-toggler-icon"></span>
                            </button> -->
                        <!-- </div> -->
                        <!-- <div class="col-md-4"> -->
                            <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                                <button @click="gToArrival()" type="button" class="btn btn-success">ورود</button>
                                <button @click="goToStock()" type="button" class="btn btn-warning">موجودی انبار</button>
                                <button @click="goTodeparture()" type="button" class="btn btn-danger">خروج</button>
                            </div>
                        <!-- </div> -->
                    </div>
                </div>
            </div>
        </nav>
        <!-- <form>
            <div class="row text-center d-block">
                <div class="btn-group col-md-4" role="group" aria-label="Basic mixed styles example">
                    <button type="button" class="btn btn-success">ورود</button>
                    <button type="button" class="btn btn-danger">خروج</button>
                </div>
            </div>
        </form> -->
        <div v-if="loading === true" class="spinner-border mt-5" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        
        <!-- <router-view v-if="loading === false"></router-view> -->
    </div>
</template>

<script>
import { reactive } from 'vue'
import {useUncleStorageStore} from './store/uncleStorageStore'

export default {
    data(){

        return{

        }
    },

    methods:{
        async gToArrival(){
            this.loading = true
            await this.store.getSuppliers();
            this.store.getStock(35);
            this.loading = false
            this.$router.push({path:'/uncle-storage/arrival'})
            // this.store.getProductRequirement();
            
        },

        async goTodeparture(){
            this.loading = true
            await this.store.getStock(35);
            this.loading = false
            this.$router.push({path:'/uncle-storage/departure'})
            // this.store.getProductRequirement();
        },

        async goToStock(){
            this.loading = true
            await this.store.getStock(35);
            this.loading = false
            this.$router.push({path:'/uncle-storage/stock'})
        },

        goToLogin(){
            this.$router.push({path:'/uncle-storage'})
        }
    },

    setup(){
        const store = useUncleStorageStore()

        const loading = reactive(false)
        

        return{
            store,
            loading,
        }
    }
}
</script>

<style>

</style>