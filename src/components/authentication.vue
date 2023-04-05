<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <body>
<div class="containerr">
	<div class="d-flex justify-content-center h-100">
		<div class="card mt-5" style="background-color:gray; width: 400px;margin: 500px 10px; background-color: #80808000; backdrop-filter: blur(10px);">
			<div class="card-headerr">
				<h5 class="mt-3">ورود به انبار سالن (عمو حمید)</h5>
				<div class="d-flex justify-content-end social_icon">
					<span><i class=""></i></span>
					<!-- <span><i class="fab fa-google-plus-square"></i></span>
					<span><i class="fab fa-twitter-square"></i></span> -->
				</div>
                <hr>
			</div>
			<div class="card-body mt-5">
				<form>
                    <div class="container ">
                        <div class="input-group form-group">
                                <span class="input-group-text"><img src="../assets/css/icons8-user-30.png" alt="edit" width="25" height="25"></span>
                            <input type="text" class="form-control" v-model.lazy="authenticationData.username" placeholder="نام کاربری">
                        </div>
                        <div class="mt-2 input-group form-group">
                                <span class="input-group-text"><img src="../assets/css/icons8-key-security-50.png" alt="edit" width="25" height="25"></span>
                            <input type="password" class="form-control" v-model.lazy="authenticationData.password" placeholder="رمز عبور">
                        </div>
                            
                    </div>
					<!-- <div class="row align-items-center remember">
						<input type="checkbox">Remember Me
					</div> -->
                    <diw class="container row gap-2  mt-5">
                        <div class=" form-group mx-auto d-grid col-md-6">
                            <button @click="login" type="button" class="btn btn-warning">ورود</button>
                        </div>
                        <div class="form-group mx-auto d-grid col-md-6">
                            <button @click="clear" type="button" class="btn btn-warning">پاک کردن</button>
                        </div>
                    </diw>
				</form>
			</div>
			<div class="card-footer">
				<div class="d-flex justify-content-center links">
					شرکت هماور یگانه و نوآور صنعت
				</div>
				<!-- <div class="d-flex justify-content-center">
					<a href="#">شرکت هماور یگانه و نوآور صنعت</a>
				</div> -->
			</div>
		</div>
	</div>
</div>
</body>
  </div>
</template>

<script>
import { reactive } from 'vue'
import {useUncleStorageStore} from './store/uncleStorageStore'
import Swal from 'sweetalert2'
import axios from 'axios'

export default {

    data(){

        return{

        }
    },

    methods:{
        login(){
            // if(this.authenticationData.username == 'sooroosh' && this.authenticationData.password == 123456){
            //     this.store.getStock(35);
            //     this.$router.push({path:'/uncle-storage/stock'})
            // }
            
            // else{
            //     const Toast = Swal.mixin({
            //             toast: true,
            //             position: 'top-end',
            //             showConfirmButton: false,
            //             timer: 4000,
            //             timerProgressBar: true,
            //             didOpen: (toast) => {
            //               toast.addEventListener('mouseenter', Swal.stopTimer)
            //               toast.addEventListener('mouseleave', Swal.resumeTimer)
            //             }
            //         })
                
            //         Toast.fire({
            //           icon: 'error',
            //           title: '!نام کاربری یا رمز عبور اشتباه است'
            //         })
            // }

            axios
            .post('http://192.168.0.100/sap/api/api-user-auth' , {
                // app: 'uncle-storage',
                username: this.authenticationData.username,
                password: this.authenticationData.password
            })
            .then(response => {
                // console.log(response)
                if(response.data == 1){
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 4000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                          toast.addEventListener('mouseenter', Swal.stopTimer)
                          toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                      icon: 'error',
                      title: '!نام کاربری یا رمز عبور اشتباه است'
                    })
                }
                else{
                    this.store.getStock(35);
                    this.$router.push({path:'/uncle-storage/stock'})
                }
            })
        }
    },

    setup(){

        const store = useUncleStorageStore()
        const authenticationData = reactive({
            username: null,
            password: null
        })

        function clear(){
            authenticationData.username = null
            authenticationData.password = null
        }

        return{
            authenticationData,
            store,
            clear,
        }
    }
}
</script>

<style scoped>
/* @import url('https://fonts.googleapis.com/css?family=Numans'); */

html,body{
background-image: url('../assets/css/IMG_3474.JPG');
background-size: cover;
background-repeat: no-repeat;
height: 100%;
font-family: 'Numans', sans-serif;
}

.containerr{
height: 100%;
align-content: center;
}

.cardd{
height: 450px;
margin-top: auto;
margin-bottom: auto;
width: 400px;
background-color: rgba(0,0,0,0.5) !important;
}

.social_icon span{
font-size: 60px;
margin-left: 10px;
color: #FFC312;
}

.social_icon span:hover{
color: white;
cursor: pointer;
}

.card-headerr h5{
color: white;
}

.social_icon{
position: absolute;
right: 20px;
top: -45px;
}

.input-group span{
width: 50px;
background-color: #FFC312;
color: black;
border:0 !important;
}

input:focus{
outline: 0 0 0 0  !important;
box-shadow: 0 0 0 0 !important;

}

.remember{
color: white;
}

.remember input
{
width: 20px;
height: 20px;
margin-left: 15px;
margin-right: 5px;
}

.login_btn{
color: black;
background-color: #FFC312;
width: 100px;
}

.login_btn:hover{
color: black;
background-color: white;
}

.links{
color: white;
}

.links a{
margin-left: 4px;
}

</style>