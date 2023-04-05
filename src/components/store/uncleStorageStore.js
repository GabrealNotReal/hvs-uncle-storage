import { defineStore } from 'pinia'
import axios from "axios"
import Swal from 'sweetalert2'
import 'animate.css';

axios.defaults.baseURL = 'http://192.168.0.100/sap/api/';

export const useUncleStorageStore = defineStore('uncle-storage' ,{
  state: () => {
      return {
          suppliersList: [],
          productRequirementList: [],
          stockList: [],
        }
  },

  getters: {
        getSuppliersList(state) {
            return state.suppliersList
          },
      
        getProductRequirementList(state) {
            return state.productRequirementList
          },
      
        getStorageList(state) {
            return state.stockList
          },


  },

  actions: {

        async submitArrivalForm(staticsData , arriveDate , supplier , commodity , productRequirementID , numberOfCommodity , price , description) {
          try {
            const response = await axios.post('cardex-store/'+ staticsData.storageLocation, {
              operation : staticsData.operation,
              contractural : staticsData.contractural,
              api : staticsData.api,
              user_id : staticsData.userID,
              input_date : arriveDate,
              supplier_id : supplier, 
              storage_id : commodity,
              product_requirement_id : productRequirementID,
              qty : numberOfCommodity,
              price : price,
              description : description,
            })
            // this.submitArrivalForm.unshift(response.data)
            // console.log(response.data)
            if(response.data == 1){
              Swal.fire({
                icon: 'success',
                title: 'موارد وارد شده ثبت شد',
                confirmButtonText: '!باشه',
                confirmButton: 'btn btn-success',
                confirmButtonColor: '#3085d6'
                // hideClass: {
                //   popup: 'animate__animated animate__fadeOutUp'
                // }
              })
            }
        } 
        catch (error) { 
            Swal.fire({
                title: "!مشکل",
                text: "!مشکلی پیش آمده، لطفا به ادمین نرم افزار اطلاع دهید",
                icon: "error",
                confirmButtonText: "Ok",
            });
        }
          },

        async submitDepartureForm(staticsData , arriveDate , commodity , productRequirementID , numberOfCommodity , description) {
          try {
            const response = await axios.post('cardex-store/'+ staticsData.storageLocation, {
              operation : staticsData.operation,
              contractural : staticsData.contractural,
              api : staticsData.api,
              user_id : staticsData.userID,
              input_date : arriveDate,
              storage_id : commodity,
              product_requirement_id : productRequirementID,
              qty : numberOfCommodity,
              description : description,
            })
            // this.submitArrivalForm.unshift(response.data)
            // console.log(response.data)
            if(response.data == 1){
              Swal.fire({
                icon: 'success',
                title: 'موارد وارد شده ثبت شد',
                confirmButtonText: '!باشه',
                confirmButton: 'btn btn-success',
                confirmButtonColor: '#3085d6',
              })
            }
        } 
        catch (error) { 
            Swal.fire({
                title: "!مشکل",
                text: "!مشکلی پیش آمده، لطفا به ادمین نرم افزار اطلاع دهید",
                icon: "error",
                confirmButtonText: "Ok",
            });
        }
          },

        

      async updateMinimumInvertory(id , minimumInventory ) {
        try {
          const response = await axios.post('storages-minimum-inventory-update', {
            storage_id: id,
            minimum_inventory: minimumInventory,
          })
          if(response.data == 1){
            const Toast = Swal.mixin({
              toast: true,
              position: 'bottom-end',
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
              }
            })
            
            Toast.fire({
              icon: 'success',
              title: '.مقدار حداقل موجودی به روز شد'
            })
            console.log(response.data)
          }

      } catch (error) { 
          Swal.fire({
              title: "!مشکل",
              text: "!مشکلی پیش آمده، لطفا به ادمین نرم افزار اطلاع دهید",
              icon: "error",
              confirmButtonText: "Ok",
          });
      }
        },

      async getSuppliers() {
        try {
          const response = await axios.get('get-suppliers-list')
          this.suppliersList = response.data
          // console.log(response.data)

      } catch (error) { 
          Swal.fire({
              title: "!مشکل",
              text: "!مشکلی پیش آمده، لطفا به ادمین نرم افزار اطلاع دهید",
              icon: "error",
              confirmButtonText: "Ok",
          });
      }
        },
        
      async getProductRequirement() {
        try {
          const response = await axios.get('get-product-requirements-list')
          this.productRequirementList = response.data
          // console.log(response.data)

      } catch (error) { 
          Swal.fire({
              title: "!مشکل",
              text: "!مشکلی پیش آمده، لطفا به ادمین نرم افزار اطلاع دهید",
              icon: "error",
              confirmButtonText: "Ok",
          });
      }
        },
        
      async getStock(storageID) {
        try {
          const response = await axios.get('storages-rawlist-for-input/'+ storageID)
          this.stockList = response.data
          // console.log(response.data)

        } catch (error) { 
          Swal.fire({
              title: "!مشکل",
              text: "!مشکلی پیش آمده، لطفا به ادمین نرم افزار اطلاع دهید",
              icon: "error",
              confirmButtonText: "Ok",
          });
        }
      },
  },
})