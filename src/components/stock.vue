<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <div class="container-fluid">
            <div class="card mt-5">
                <div class="card-header text-bg-warning">
                    <label class="form-control-lg font-medium-5 d-block text-center">موجودی انبار</label>
                </div>
                <div class="card-body">
                    <input type="text" id="myInput" @keyup ="searchInNames()" placeholder="جستجو در نام محصول">
                    <table id="stockTable" class="table table-bordered table-hover">
                        <thead>
                          <tr>
                            <th style="width:2rem">ردیف</th>
                            <th scope="col">نام محصول</th>
                            <th scope="col">کد آیتم</th>
                            <th scope="col" style="width:15%">موجودی فعلی</th>
                            <th scope="col" style="width:15%">حداقل موجودی</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(stock , index) in getStorage" :key="index+1" :class="{'table-warning' : stock.available < stock.minimum_inventory*1.3  , 'table-danger' : stock.available <= stock.minimum_inventory}">
                            <th scope="row">{{index+1}}</th>
                            <td>{{ stock.name }}</td>
                            <td>{{ stock.code }}</td>
                            <td>{{ stock.available }}</td>
                            <td>
                                <div class="input-group">
                                    <input :id="stock.code" class="form-control text-center" type="number" v-model='stock.minimum_inventory' :disabled="editMinimumInvertory"> 
                                    <button :id="stock.code + '1'" @click="editingMinimumInvertory(stock.code)" class="btn btn-outline-secondary" type="button" >
                                      <img src="../assets/css/edit.png" alt="edit" width="20" height="20">
                                    </button>
                                    <button :id="stock.code + '2'" @click="submitMinimumInvertory(stock.code , stock.id , stock.minimum_inventory)" class="btn btn-outline-secondary" style="visibility: hidden;" type="button">
                                    <img src="../assets/css/checkmark.png" alt="submit" width="20" height="20">
                                    </button>
                                </div>
                            </td>
                          </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { computed, ref } from 'vue';
import {useUncleStorageStore} from './store/uncleStorageStore'

export default {
    setup(){
        const minimumInventory = ref(null)
        const store = useUncleStorageStore()
        const editMinimumInvertory = ref(true)

        const getStorage = computed(() => store.getStorageList);


        function searchInNames() {
          // Declare variables
          var input, filter, table, tr, td, i, txtValue;
          input = document.getElementById("myInput");
          filter = input.value.toUpperCase();
          table = document.getElementById("stockTable");
          tr = table.getElementsByTagName("tr");

          // Loop through all table rows, and hide those who don't match the search query
          for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            if (td) {
              txtValue = td.textContent || td.innerText;
              if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
              } else {
                tr[i].style.display = "none";
              }
            }
          }
          console.log('pipi')
        }

        function editingMinimumInvertory(index){
            document.getElementById(index).disabled = !document.getElementById(index).disabled
            if(document.getElementById(index + '2').style.visibility == "hidden"){
              document.getElementById(index + '2').style.visibility = "visible";
            }
            else {
              document.getElementById(index + '2').style.visibility = "hidden"
              document.getElementById(index)
            }

            // editMinimumInvertory.value = false
        }

        async function submitMinimumInvertory(index , id , minimumInventory){
          const loading = ref(false)
          document.getElementById(index + '2').style.visibility = "hidden";
          // document.getElementById(index + '1').style.visibility = "visible";
          document.getElementById(index).disabled = true
          await store.updateMinimumInvertory(id , minimumInventory , index);
          loading.value = true


        }

        return{
            searchInNames,
            minimumInventory,
            getStorage,
            editMinimumInvertory,
            editingMinimumInvertory,
            submitMinimumInvertory,
        }
    }

}
</script>

<style>

#myInput {
  background-image: url('../assets/css/search-icon-png-9986-Windows.png');
  background-position: 10px 12px; /* Position the search icon */
  background-repeat: no-repeat; /* Do not repeat the icon image */
  width: 100%; /* Full-width */
  font-size: 16px; /* Increase font-size */
  padding: 12px 20px 12px 40px; /* Add some padding */
  border: 1px solid #ddd; /* Add a grey border */
  margin-bottom: 12px; /* Add some space below the input */
}

#myTable {
  border-collapse: collapse; /* Collapse borders */
  width: 100%; /* Full-width */
  border: 1px solid #ddd; /* Add a grey border */
  font-size: 18px; /* Increase font-size */
}

#myTable th, #myTable td {
  text-align: left; /* Left-align text */
  padding: 12px; /* Add padding */
}

#myTable tr {
  /* Add a bottom border to all table rows */
  border-bottom: 1px solid #ddd;
}

#myTable tr.header, #myTable tr:hover {
  /* Add a grey background color to the table header and on hover */
  background-color: #f1f1f1;
}

thead, tbody, tfoot, tr, td, th {
    border-width: 0.15rem!important;
}



</style>