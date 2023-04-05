<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div class="container-fluid">
        <div class="card mt-5">
            <div class="card-header text-bg-success">
                <label class="form-control-lg font-medium-5 d-block text-center">ورود به انبار</label>
            </div>
            <div class="card-body">
                <form id="arrivalForm">
                    <div class="row gy-5">
                        <div class="form-group col-md-6">
                            <label class="h5">تاریخ ورود</label>
                            <date-picker id="arriveDate" type="datetime" placeholder="تاریخ ورود به انبار را انتخاب کنید" class="form-control" v-model="formData.arriveDate" format="YYYY-MM-DD HH:mm:ss" display-format="dddd jDD jMMMM jYYYY"/>
                        </div>
    
                        <div class="form-group col-md-6">
                            <label class="h5" for="supplier">تامین کننده</label>
                            <v-select 
                            dir="rtl"
                            class="" 
                            style="    --vs-line-height: 2.2;"
                            placeholder="تامین کننده را انتخاب کنید"
                            :options="listOfSuppliers"
                            :get-option-label="(option) => option.name"
                            item-value="id"
                            id="supplier"
                            v-model="supplier.supplier"
                            aria-expanded="false"
                            required
                            >
                            </v-select>
                        </div>
    
                        <!-- stat-of-secondCut -->
                        <div class="cotainer">
                            <div class="card border-warning p-2">
                                <div class="card-header mb-3 text-bg-secondary">
                                    <label class="form-control-lg font-medium-5 d-block text-center">نوع کالا</label>
                                </div>

                                    <div  class="row gx-2 mb-3">
                                        <div class='d-grid col-md-1 mx-auto' style="width:4rem">
                                            <button type="button" class="btn btn-primary btn-lg">{{1}}</button>
                                        </div>
                                        <div class="form-group col-md-3">
                                            <v-select 
                                            dir="rtl"
                                            class="" 
                                            style="    --vs-line-height: 2.2;"
                                            placeholder="کالا را انتخاب کنید"
                                            :options="getStorage"
                                            :get-option-label="(option) => option.name"
                                            :value="id"
                                            id="commodity1"
                                            v-model="commodity.commodity1"
                                            aria-expanded="false"
                                            required
                                            >
                                            </v-select>
                                        </div>
                
                                        <div class="form-group input-group-lg col-md-1">
                                            <input 
                                            type="number" 
                                            class="form-control position-relative text-center" 
                                            id="numberOfCommodity1"
                                            v-model.lazy="formData.numberOfCommodity1"
                                            placeholder="تعداد"
                                            required
                                            >
                                        </div>
                
                                        <div class="form-group col-md-2">
                                            <div class="input-group input-group-lg">
                                                <input 
                                                type="number" 
                                                id="price1" 
                                                placeholder="قیمت"
                                                v-model.lazy="formData.price1"
                                                class="form-control position-relative input-lg text-center">
                                                    <span class="input-group-text">ريال</span>
                                            </div>
                                        </div>
    
                                        <div class="form-group input-group-lg col-md-4">
                                            <input 
                                            type="text" 
                                            class="form-control position-relative text-center" 
                                            id="description1"
                                            v-model.lazy="formData.description1"
                                            placeholder="توضیحات">
                                        </div>
                
                                        <div class="d-grid col-md-1 mx-auto " style="width:4rem">
                                            <button 
                                            @click="addRow()"
                                            type="button"
                                            class="btn btn-outline-success" 
                                            :disabled="rows < 2"
                                            >
                                            +
                                            </button>
                                        </div>
                                    </div>
                                <!-- </div> -->

                                <Transition>
                                    <div v-if="rows < 10">
                                        <div  class="row gx-2 mb-3">
                                            <div class='d-grid col-md-1 mx-auto' style="width:4rem">
                                                <button type="button" class="btn btn-primary btn-lg">{{2}}</button>
                                            </div>
                                            <div class="form-group col-md-3">
                                                <v-select 
                                                dir="rtl"
                                                class="" 
                                                style="    --vs-line-height: 2.2;"
                                                placeholder="کالا را انتخاب کنید"
                                                :options="getStorage"
                                                :get-option-label="(option) => option.name"
                                                :value="id"
                                                id="commodity2"
                                                v-model="commodity.commodity2"
                                                aria-expanded="false"
                                                required
                                                >
                                                </v-select>
                                            </div>
                    
                                            <div class="form-group input-group-lg col-md-1">
                                                <input 
                                                type="number" 
                                                class="form-control position-relative text-center" 
                                                id="numberOfCommodity2"
                                                v-model="formData.numberOfCommodity2"
                                                placeholder="تعداد"
                                                required
                                                >
                                            </div>
                    
                                            <div class="form-group col-md-2">
                                                <div class="input-group input-group-lg">
                                                    <input 
                                                    type="number" 
                                                    id="price2" 
                                                    placeholder="قیمت"
                                                    v-model="formData.price2"
                                                    class="form-control position-relative input-lg text-center">
                                                        <span class="input-group-text">ريال</span>
                                                </div>
                                            </div>
        
                                            <div class="form-group input-group-lg col-md-4">
                                                <input 
                                                type="text" 
                                                class="form-control position-relative text-center" 
                                                id="description2"
                                                v-model="formData.description2"
                                                placeholder="توضیحات">
    
                                            </div>
                    
                                            <div class="d-grid col-md-1 mx-auto" style="width:4rem">
                                                <button 
                                                @click="delRow()"
                                                type="button"
                                                class="btn btn-outline-danger" 
                                                :disabled="rows < 9"
                                                >
                                                _
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </Transition>

                                <Transition>
                                    <div v-if="rows < 9">
                                        <div  class="row gx-2 mb-3">
                                            <div class='d-grid col-md-1 mx-auto' style="width:4rem">
                                                <button type="button" class="btn btn-primary btn-lg">{{3}}</button>
                                            </div>
                                            <div class="form-group col-md-3">
                                                <v-select 
                                                dir="rtl"
                                                class="" 
                                                style="    --vs-line-height: 2.2;"
                                                placeholder="کالا را انتخاب کنید"
                                                :options="getStorage"
                                                :get-option-label="(option) => option.name"
                                                :value="id"
                                                id="commodity3"
                                                v-model="commodity.commodity3"
                                                aria-expanded="false"
                                                required
                                                >
                                                </v-select>
                                            </div>
                    
                                            <div class="form-group input-group-lg col-md-1">
                                                <input 
                                                type="number" 
                                                class="form-control position-relative text-center" 
                                                id="numberOfCommodity3"
                                                v-model="formData.numberOfCommodity3"
                                                placeholder="تعداد"
                                                required>
                                            </div>
                    
                                            <div class="form-group col-md-2">
                                                <div class="input-group input-group-lg">
                                                    <input 
                                                    type="number" 
                                                    id="price3" 
                                                    placeholder="قیمت"
                                                    v-model="formData.price3"
                                                    class="form-control position-relative input-lg text-center">
                                                        <span class="input-group-text">ريال</span>
                                                </div>
                                            </div>
        
                                            <div class="form-group input-group-lg col-md-4">
                                                <input 
                                                type="text" 
                                                class="form-control position-relative text-center" 
                                                id="description3"
                                                v-model="formData.description3"
                                                placeholder="توضیحات">
    
                                            </div>
                    
                                            <div class="d-grid col-md-1 mx-auto" style="width:4rem">
                                                <button 
                                                @click="delRow"
                                                type="button"
                                                class="btn btn-outline-danger" 
                                                :disabled="rows < 8"
                                                >
                                                _
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </Transition>

                                <Transition>
                                    <div v-if="rows < 8">
                                        <div  class="row gx-2 mb-3">
                                            <div class='d-grid col-md-1 mx-auto' style="width:4rem">
                                                <button type="button" class="btn btn-primary btn-lg">{{4}}</button>
                                            </div>
                                            <div class="form-group col-md-3">
                                                <v-select 
                                                dir="rtl"
                                                class="" 
                                                style="    --vs-line-height: 2.2;"
                                                placeholder="کالا را انتخاب کنید"
                                                :options="getStorage"
                                                :get-option-label="(option) => option.name"
                                                :value="id"
                                                id="commodity4"
                                                v-model="commodity.commodity4"
                                                aria-expanded="false"
                                                required
                                                >
                                                </v-select>
                                            </div>
                    
                                            <div class="form-group input-group-lg col-md-1">
                                                <input 
                                                type="number" 
                                                class="form-control position-relative text-center" 
                                                id="numberOfCommodity4"
                                                v-model="formData.numberOfCommodity4"
                                                placeholder="تعداد"
                                                required>
                                            </div>
                    
                                            <div class="form-group col-md-2">
                                                <div class="input-group input-group-lg">
                                                    <input 
                                                    type="number" 
                                                    id="price4" 
                                                    placeholder="قیمت"
                                                    v-model="formData.price4"
                                                    class="form-control position-relative input-lg text-center">
                                                        <span class="input-group-text">ريال</span>
                                                </div>
                                            </div>
        
                                            <div class="form-group input-group-lg col-md-4">
                                                <input 
                                                type="text" 
                                                class="form-control position-relative text-center" 
                                                id="description4"
                                                v-model="formData.description4"
                                                placeholder="توضیحات">
    
                                            </div>
                    
                                            <div class="d-grid col-md-1 mx-auto" style="width:4rem">
                                                <button 
                                                @click="delRow"
                                                type="button"
                                                class="btn btn-outline-danger" 
                                                :disabled="rows < 7"
                                                >
                                                _
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </Transition>

                                <Transition>
                                    <div v-if="rows < 7">
                                        <div  class="row gx-2 mb-3">
                                            <div class='d-grid col-md-1 mx-auto' style="width:4rem">
                                                <button type="button" class="btn btn-primary btn-lg">{{5}}</button>
                                            </div>
                                            <div class="form-group col-md-3">
                                                <v-select 
                                                dir="rtl"
                                                class="" 
                                                style="    --vs-line-height: 2.2;"
                                                placeholder="کالا را انتخاب کنید"
                                                :options="getStorage"
                                                :get-option-label="(option) => option.name"
                                                :value="id"
                                                id="commodity5"
                                                v-model="commodity.commodity5"
                                                aria-expanded="false"
                                                required
                                                >
                                                </v-select>
                                            </div>
                    
                                            <div class="form-group input-group-lg col-md-1">
                                                <input 
                                                type="number" 
                                                class="form-control position-relative text-center" 
                                                id="numberOfCommodity5"
                                                v-model="formData.numberOfCommodity5"
                                                placeholder="تعداد"
                                                required>
                                            </div>
                    
                                            <div class="form-group col-md-2">
                                                <div class="input-group input-group-lg">
                                                    <input 
                                                    type="number" 
                                                    id="price5" 
                                                    placeholder="قیمت"
                                                    v-model="formData.price5"
                                                    class="form-control position-relative input-lg text-center">
                                                        <span class="input-group-text">ريال</span>
                                                </div>
                                            </div>
        
                                            <div class="form-group input-group-lg col-md-4">
                                                <input 
                                                type="text" 
                                                class="form-control position-relative text-center" 
                                                id="description5"
                                                v-model="formData.description5"
                                                placeholder="توضیحات">
    
                                            </div>
                    
                                            <div class="d-grid col-md-1 mx-auto" style="width:4rem">
                                                <button 
                                                @click="delRow"
                                                type="button"
                                                class="btn btn-outline-danger" 
                                                :disabled="rows < 6"
                                                >
                                                _
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </Transition>

                                <Transition>
                                    <div v-if="rows < 6">
                                        <div  class="row gx-2 mb-3">
                                            <div class='d-grid col-md-1 mx-auto' style="width:4rem">
                                                <button type="button" class="btn btn-primary btn-lg">{{6}}</button>
                                            </div>
                                            <div class="form-group col-md-3">
                                                <v-select 
                                                dir="rtl"
                                                class="" 
                                                style="    --vs-line-height: 2.2;"
                                                placeholder="کالا را انتخاب کنید"
                                                :options="getStorage"
                                                :get-option-label="(option) => option.name"
                                                :value="id"
                                                id="commodity6"
                                                v-model="commodity.commodity6"
                                                aria-expanded="false"
                                                required
                                                >
                                                </v-select>
                                            </div>
                    
                                            <div class="form-group input-group-lg col-md-1">
                                                <input 
                                                type="number" 
                                                class="form-control position-relative text-center" 
                                                id="numberOfCommodity6"
                                                v-model="formData.numberOfCommodity6"
                                                placeholder="تعداد"
                                                required>
                                            </div>
                    
                                            <div class="form-group col-md-2">
                                                <div class="input-group input-group-lg">
                                                    <input 
                                                    type="number" 
                                                    id="price6" 
                                                    placeholder="قیمت"
                                                    v-model="formData.price6"
                                                    class="form-control position-relative input-lg text-center">
                                                        <span class="input-group-text">ريال</span>
                                                </div>
                                            </div>
        
                                            <div class="form-group input-group-lg col-md-4">
                                                <input 
                                                type="text" 
                                                class="form-control position-relative text-center" 
                                                id="description6"
                                                v-model="formData.description6"
                                                placeholder="توضیحات">
    
                                            </div>
                    
                                            <div class="d-grid col-md-1 mx-auto" style="width:4rem">
                                                <button 
                                                @click="delRow"
                                                type="button"
                                                class="btn btn-outline-danger" 
                                                :disabled="rows < 5"
                                                >
                                                _
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </Transition>

                                <Transition>
                                    <div v-if="rows < 5">
                                        <div  class="row gx-2 mb-3">
                                            <div class='d-grid col-md-1 mx-auto' style="width:4rem">
                                                <button type="button" class="btn btn-primary btn-lg">{{7}}</button>
                                            </div>
                                            <div class="form-group col-md-3">
                                                <v-select 
                                                dir="rtl"
                                                class="" 
                                                style="    --vs-line-height: 2.2;"
                                                placeholder="کالا را انتخاب کنید"
                                                :options="getStorage"
                                                :get-option-label="(option) => option.name"
                                                :value="id"
                                                id="commodity7"
                                                v-model="commodity.commodity7"
                                                aria-expanded="false"
                                                required
                                                >
                                                </v-select>
                                            </div>
                    
                                            <div class="form-group input-group-lg col-md-1">
                                                <input 
                                                type="number" 
                                                class="form-control position-relative text-center" 
                                                id="numberOfCommodity7"
                                                v-model="formData.numberOfCommodity7"
                                                placeholder="تعداد"
                                                required>
                                            </div>
                    
                                            <div class="form-group col-md-2">
                                                <div class="input-group input-group-lg">
                                                    <input 
                                                    type="number" 
                                                    id="price7" 
                                                    placeholder="قیمت"
                                                    v-model="formData.price7"
                                                    class="form-control position-relative input-lg text-center">
                                                        <span class="input-group-text">ريال</span>
                                                </div>
                                            </div>
        
                                            <div class="form-group input-group-lg col-md-4">
                                                <input 
                                                type="text" 
                                                class="form-control position-relative text-center" 
                                                id="description7"
                                                v-model="formData.description7"
                                                placeholder="توضیحات">
    
                                            </div>
                    
                                            <div class="d-grid col-md-1 mx-auto" style="width:4rem">
                                                <button 
                                                @click="delRow"
                                                type="button"
                                                class="btn btn-outline-danger"
                                                :disabled="rows < 4" 
                                                >
                                                _
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </Transition>

                                <Transition>
                                    <div v-if="rows < 4">
                                        <div  class="row gx-2 mb-3">
                                            <div class='d-grid col-md-1 mx-auto' style="width:4rem">
                                                <button type="button" class="btn btn-primary btn-lg">{{8}}</button>
                                            </div>
                                            <div class="form-group col-md-3">
                                                <v-select 
                                                dir="rtl"
                                                class="" 
                                                style="    --vs-line-height: 2.2;"
                                                placeholder="کالا را انتخاب کنید"
                                                :options="getStorage"
                                                :get-option-label="(option) => option.name"
                                                :value="id"
                                                id="commodity8"
                                                v-model="commodity.commodity8"
                                                aria-expanded="false"
                                                required
                                                >
                                                </v-select>
                                            </div>    
    
                                            <div class="form-group input-group-lg col-md-1">
                                                <input 
                                                type="number" 
                                                class="form-control position-relative text-center" 
                                                id="numberOfCommodity8"
                                                v-model="formData.numberOfCommodity8"
                                                placeholder="تعداد"
                                                required>
                                            </div>
                    
                                            <div class="form-group col-md-2">
                                                <div class="input-group input-group-lg">
                                                    <input 
                                                    type="number" 
                                                    id="price8" 
                                                    placeholder="قیمت"
                                                    v-model="formData.price8"
                                                    class="form-control position-relative input-lg text-center">
                                                        <span class="input-group-text">ريال</span>
                                                </div>
                                            </div>
        
                                            <div class="form-group input-group-lg col-md-4">
                                                <input 
                                                type="text" 
                                                class="form-control position-relative text-center" 
                                                id="description8"
                                                v-model="formData.description8"
                                                placeholder="توضیحات">
    
                                            </div>
                    
                                            <div class="d-grid col-md-1 mx-auto" style="width:4rem">
                                                <button 
                                                @click="delRow"
                                                type="button"
                                                class="btn btn-outline-danger" 
                                                :disabled="rows < 3"
                                                >
                                                _
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </Transition>

                                <Transition>
                                    <div v-if="rows < 3">
                                        <div  class="row gx-2 mb-3">
                                            <div class='d-grid col-md-1 mx-auto' style="width:4rem">
                                                <button type="button" class="btn btn-primary btn-lg">{{9}}</button>
                                            </div>
                                            <div class="form-group col-md-3">
                                                <v-select 
                                                dir="rtl"
                                                class="" 
                                                style="    --vs-line-height: 2.2;"
                                                placeholder="کالا را انتخاب کنید"
                                                :options="getStorage"
                                                :get-option-label="(option) => option.name"
                                                :value="id"
                                                id="commodity9"
                                                v-model="commodity.commodity9"
                                                aria-expanded="false"
                                                required
                                                >
                                                </v-select>
                                            </div>
                    
                                            <div class="form-group input-group-lg col-md-1">
                                                <input 
                                                type="number" 
                                                class="form-control position-relative text-center" 
                                                id="numberOfCommodity9"
                                                v-model="formData.numberOfCommodity9"
                                                placeholder="تعداد"
                                                required>
                                            </div>
                    
                                            <div class="form-group col-md-2">
                                                <div class="input-group input-group-lg">
                                                    <input 
                                                    type="number" 
                                                    id="price9" 
                                                    placeholder="قیمت"
                                                    v-model="formData.price9"
                                                    class="form-control position-relative input-lg text-center">
                                                        <span class="input-group-text">ريال</span>
                                                </div>
                                            </div>
        
                                            <div class="form-group input-group-lg col-md-4">
                                                <input 
                                                type="text" 
                                                class="form-control position-relative text-center" 
                                                id="description9"
                                                v-model="formData.description9"
                                                placeholder="توضیحات">
    
                                            </div>
                    
                                            <div class="d-grid col-md-1 mx-auto" style="width:4rem">
                                                <button 
                                                @click="delRow"
                                                type="button"
                                                class="btn btn-outline-danger"
                                                :disabled="rows < 2" 
                                                >
                                                _
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </Transition>

                                <Transition>
                                    <div v-if="rows < 2">
                                        <div  class="row gx-2 mb-3">
                                            <div class='d-grid col-md-1 mx-auto' style="width:4rem">
                                                <button type="button" class="btn btn-primary btn-lg">{{10}}</button>
                                            </div>
                                            <div class="form-group col-md-3">
                                                <v-select 
                                                dir="rtl"
                                                class="" 
                                                style="    --vs-line-height: 2.2;"
                                                placeholder="کالا را انتخاب کنید"
                                                :options="getStorage"
                                                :get-option-label="(option) => option.name"
                                                :value="id"
                                                id="commodity10"
                                                v-model="commodity.commodity10"
                                                aria-expanded="false"
                                                required
                                                >
                                                </v-select>
                                            </div>
                    
                                            <div class="form-group input-group-lg col-md-1">
                                                <input 
                                                type="number" 
                                                class="form-control position-relative text-center" 
                                                id="numberOfCommodity10"
                                                v-model="formData.numberOfCommodity10"
                                                placeholder="تعداد"
                                                required>
                                            </div>
                    
                                            <div class="form-group col-md-2">
                                                <div class="input-group input-group-lg">
                                                    <input 
                                                    type="number" 
                                                    id="price10" 
                                                    placeholder="قیمت"
                                                    v-model="formData.price10"
                                                    class="form-control position-relative input-lg text-center">
                                                        <span class="input-group-text">ريال</span>
                                                </div>
                                            </div>
        
                                            <div class="form-group input-group-lg col-md-4">
                                                <input 
                                                type="text" 
                                                class="form-control position-relative text-center" 
                                                id="description10"
                                                v-model="formData.description10"
                                                placeholder="توضیحات">
    
                                            </div>
                    
                                            <div class="d-grid col-md-1 mx-auto" style="width:4rem">
                                                <button 
                                                @click="delRow"
                                                type="button"
                                                class="btn btn-outline-danger" 
                                                >
                                                _
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </Transition>
                            </div>
                        </div>
                    </div>
                    <buttom @click="submitForm" type="submit" class="btn btn-primary d-block mt-3">ثبت</buttom>
                </form>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive, ref } from 'vue'
import {useUncleStorageStore} from './store/uncleStorageStore'
import Swal from 'sweetalert2'

export default {

    setup(){
        const staticsData = reactive({
            storageLocation:35,
            operation:'input',
            contractural:'noncontractural',
            api:true,
            userID : 178
        })

        const commodity= reactive({
            commodity1: null,
            commodity2: null,
            commodity3: null,
            commodity4: null,
            commodity5: null,
            commodity6: null,
            commodity7: null,
            commodity8: null,
            commodity9: null,
            commodity10: null,
        })

        const supplier= reactive({
            supplier: null
        })

        const formData = reactive({
            arriveDate: null,
            supplier: null,
            commodity1: null,
            commodity2: null,
            commodity3: null,
            commodity4: null,
            commodity5: null,
            commodity6: null,
            commodity7: null,
            commodity8: null,
            commodity9: null,
            commodity10: null,
            productRequirementID1: null,
            productRequirementID2: null,
            productRequirementID3: null,
            productRequirementID4: null,
            productRequirementID5: null,
            productRequirementID6: null,
            productRequirementID7: null,
            productRequirementID8: null,
            productRequirementID9: null,
            productRequirementID10: null,
            numberOfCommodity1: null,
            numberOfCommodity2: null,
            numberOfCommodity3: null,
            numberOfCommodity4: null,
            numberOfCommodity5: null,
            numberOfCommodity6: null,
            numberOfCommodity7: null,
            numberOfCommodity8: null,
            numberOfCommodity9: null,
            numberOfCommodity10: null,
            price1: null,
            price2: null,
            price3: null,
            price4: null,
            price5: null,
            price6: null,
            price7: null,
            price8: null,
            price9: null,
            price10: null,
            description1: null,
            description2: null,
            description3: null,
            description4: null,
            description5: null,
            description6: null,
            description7: null,
            description8: null,
            description9: null,
            description10: null,
        })

        const rows = ref(10)
        var delay = 2700;

        const store = useUncleStorageStore()

        const listOfSuppliers = computed(() => store.getSuppliersList);
        const getStorage = computed(() => store.getStorageList);
        

        function addRow(){
            rows.value--
        }

        function delRow(){
            rows.value++
            if(rows.value == 10){
                formData.numberOfCommodity2 =null
                commodity.commodity2 =null
                formData.price2 =null
                formData.description2 =null
            }
            else if(rows.value == 9){
                formData.numberOfCommodity3 =null
                commodity.commodity3 =null
                formData.price3 =null
                formData.description3 =null
            }
            else if(rows.value == 8){
                formData.numberOfCommodity4 =null
                commodity.commodity4 =null
                formData.price4 =null
                formData.description4 =null
            }
            else if(rows.value == 7){
                formData.numberOfCommodity5 =null
                commodity.commodity5 =null
                formData.price5 =null
                formData.description5 =null
            }
            else if(rows.value == 6){
                formData.numberOfCommodity6 =null
                commodity.commodity6 =null
                formData.price6 =null
                formData.description6 =null
            }
            else if(rows.value == 5){
                formData.numberOfCommodity7 =null
                commodity.commodity7 =null
                formData.price7 =null
                formData.description7 =null
            }
            else if(rows.value == 4){
                formData.numberOfCommodity8 =null
                commodity.commodity8 =null
                formData.price8 =null
                formData.description8 =null
            }
            else if(rows.value == 3){
                formData.numberOfCommodity9 =null
                commodity.commodity9 =null
                formData.price9 =null
                formData.description9 =null
            }
            else if(rows.value == 2){
                formData.numberOfCommodity10 =null
                commodity.commodity10 =null
                formData.price10 =null
                formData.description10 =null
            }
        }

        function resetForm(){
            document.getElementById("arrivalForm").reset();
        }

        async function submitForm(){
            // loading.value = true;
            if(formData.arriveDate == null){
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
                      title: '!تاریخ ورود نباید خالی باشد'
                    })
            }
            else if(supplier.supplier == null){
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
                      title: '!تامین کننده نباید خالی باشد'
                    })
            }
            else{
                if(rows.value == 10){
                    if(commodity.commodity1 == null || formData.numberOfCommodity1 == null){
                        const Toast = Swal.mixin({
                            toast: true,
                            position: 'top-end',
                            showConfirmButton: false,
                            timer: 3000,
                            timerProgressBar: true,
                            didOpen: (toast) => {
                              toast.addEventListener('mouseenter', Swal.stopTimer)
                              toast.addEventListener('mouseleave', Swal.resumeTimer)
                            }
                        })
                    
                        Toast.fire({
                          icon: 'error',
                          title: '!نام کالا و تعداد نباید خالی باشد'
                        })
                    }
                    else{
                        formData.commodity1 = commodity.commodity1.id
                        formData.productRequirementID1 = commodity.commodity1.item_id
                        formData.supplier = supplier.supplier.id
                        await store.submitArrivalForm(staticsData , formData.arriveDate , formData.supplier , formData.commodity1 , formData.productRequirementID1 , formData.numberOfCommodity1 , formData.price1 , formData.description1)
                    }
                    // loading.value = false;
                    setTimeout(resetForm() , delay);
                }

                else if(rows.value == 9){
                    if(commodity.commodity1 == null || formData.numberOfCommodity1 == null || commodity.commodity2 == null || formData.numberOfCommodity2 == null){
                        const Toast = Swal.mixin({
                            toast: true,
                            position: 'top-end',
                            showConfirmButton: false,
                            timer: 3000,
                            timerProgressBar: true,
                            didOpen: (toast) => {
                              toast.addEventListener('mouseenter', Swal.stopTimer)
                              toast.addEventListener('mouseleave', Swal.resumeTimer)
                            }
                        })
                    
                        Toast.fire({
                          icon: 'error',
                          title: '!نام کالا و تعداد نباید خالی باشد'
                        })
                    }
                    else{
                        formData.commodity1 = commodity.commodity1.id
                        formData.productRequirementID1 = commodity.commodity1.item_id
                        formData.supplier = supplier.supplier.id
                        await store.submitArrivalForm(staticsData , formData.arriveDate , formData.supplier , formData.commodity1 , formData.productRequirementID1 , formData.numberOfCommodity1 , formData.price1 , formData.description1)

                        formData.commodity2 = commodity.commodity2.id
                        formData.productRequirementID2 = commodity.commodity2.item_id
                        await store.submitArrivalForm(staticsData , formData.arriveDate , formData.supplier , formData.commodity2 , formData.productRequirementID2 , formData.numberOfCommodity2 , formData.price2 , formData.description2)
                        // loading.value = false;
                        setTimeout(resetForm() , delay);
                    }  
                }

                else if(rows.value == 8){
                    if(commodity.commodity1 == null || formData.numberOfCommodity1 == null || commodity.commodity2 == null || formData.numberOfCommodity2 == null || commodity.commodity3 == null || formData.numberOfCommodity3 == null){
                        const Toast = Swal.mixin({
                            toast: true,
                            position: 'top-end',
                            showConfirmButton: false,
                            timer: 3000,
                            timerProgressBar: true,
                            didOpen: (toast) => {
                              toast.addEventListener('mouseenter', Swal.stopTimer)
                              toast.addEventListener('mouseleave', Swal.resumeTimer)
                            }
                        })
                    
                        Toast.fire({
                          icon: 'error',
                          title: '!نام کالا و تعداد نباید خالی باشد'
                        })
                    }
                    else{
                        formData.commodity1 = commodity.commodity1.id
                        formData.productRequirementID1 = commodity.commodity1.item_id
                        formData.supplier = supplier.supplier.id
                        await store.submitArrivalForm(staticsData , formData.arriveDate , formData.supplier , formData.commodity1 , formData.productRequirementID1 , formData.numberOfCommodity1 , formData.price1 , formData.description1)
                    
                        formData.commodity2 = commodity.commodity2.id
                        formData.productRequirementID2 = commodity.commodity2.item_id
                        await store.submitArrivalForm(staticsData , formData.arriveDate , formData.supplier , formData.commodity2 , formData.productRequirementID2 , formData.numberOfCommodity2 , formData.price2 , formData.description2)
                    
                        formData.commodity3 = commodity.commodity3.id
                        formData.productRequirementID3 = commodity.commodity3.item_id
                        await store.submitArrivalForm(staticsData , formData.arriveDate , formData.supplier , formData.commodity3 , formData.productRequirementID3 , formData.numberOfCommodity3 , formData.price3 , formData.description3)
                        
                        // loading.value = false;
                        setTimeout(resetForm() , delay);
                    } 
                }

                else if(rows.value == 7){
                    if(commodity.commodity1 == null || formData.numberOfCommodity1 == null || commodity.commodity2 == null || formData.numberOfCommodity2 == null || commodity.commodity3 == null || formData.numberOfCommodity3 == null || commodity.commodity4 == null || formData.numberOfCommodity4 == null){
                        const Toast = Swal.mixin({
                            toast: true,
                            position: 'top-end',
                            showConfirmButton: false,
                            timer: 3000,
                            timerProgressBar: true,
                            didOpen: (toast) => {
                              toast.addEventListener('mouseenter', Swal.stopTimer)
                              toast.addEventListener('mouseleave', Swal.resumeTimer)
                            }
                        })
                    
                        Toast.fire({
                          icon: 'error',
                          title: '!نام کالا و تعداد نباید خالی باشد'
                        })
                    }
                    else{
                        formData.commodity1 = commodity.commodity1.id
                        formData.productRequirementID1 = commodity.commodity1.item_id
                        formData.supplier = supplier.supplier.id
                        await store.submitArrivalForm(staticsData , formData.arriveDate , formData.supplier , formData.commodity1 , formData.productRequirementID1 , formData.numberOfCommodity1 , formData.price1 , formData.description1)

                        formData.commodity2 = commodity.commodity2.id
                        formData.productRequirementID2 = commodity.commodity2.item_id
                        await store.submitArrivalForm(staticsData , formData.arriveDate , formData.supplier , formData.commodity2 , formData.productRequirementID2 , formData.numberOfCommodity2 , formData.price2 , formData.description2)

                        formData.commodity3 = commodity.commodity3.id
                        formData.productRequirementID3 = commodity.commodity3.item_id
                        await store.submitArrivalForm(staticsData , formData.arriveDate , formData.supplier , formData.commodity3 , formData.productRequirementID3 , formData.numberOfCommodity3 , formData.price3 , formData.description3)

                        formData.commodity4 = commodity.commodity4.id
                        formData.productRequirementID4 = commodity.commodity4.item_id
                        await store.submitArrivalForm(staticsData , formData.arriveDate , formData.supplier , formData.commodity4 , formData.productRequirementID4 , formData.numberOfCommodity4 , formData.price4 , formData.description4)
                        
                        // loading.value = false;
                        setTimeout(resetForm() , delay);
                    }  
                }

                else if(rows.value == 6){
                    if(commodity.commodity1 == null || formData.numberOfCommodity1 == null || commodity.commodity2 == null || formData.numberOfCommodity2 == null || commodity.commodity3 == null || formData.numberOfCommodity3 == null || commodity.commodity4 == null || formData.numberOfCommodity4 == null || commodity.commodity5 == null || formData.numberOfCommodity5 == null){
                        const Toast = Swal.mixin({
                            toast: true,
                            position: 'top-end',
                            showConfirmButton: false,
                            timer: 3000,
                            timerProgressBar: true,
                            didOpen: (toast) => {
                              toast.addEventListener('mouseenter', Swal.stopTimer)
                              toast.addEventListener('mouseleave', Swal.resumeTimer)
                            }
                        })
                    
                        Toast.fire({
                          icon: 'error',
                          title: '!نام کالا و تعداد نباید خالی باشد'
                        })
                    }
                    else{
                        formData.commodity1 = commodity.commodity1.id
                        formData.productRequirementID1 = commodity.commodity1.item_id
                        formData.supplier = supplier.supplier.id
                        await store.submitArrivalForm(staticsData , formData.arriveDate , formData.supplier , formData.commodity1 , formData.productRequirementID1 , formData.numberOfCommodity1 , formData.price1 , formData.description1)

                        formData.commodity2 = commodity.commodity2.id
                        formData.productRequirementID2 = commodity.commodity2.item_id
                        await store.submitArrivalForm(staticsData , formData.arriveDate , formData.supplier , formData.commodity2 , formData.productRequirementID2 , formData.numberOfCommodity2 , formData.price2 , formData.description2)

                        formData.commodity3 = commodity.commodity3.id
                        formData.productRequirementID3 = commodity.commodity3.item_id
                        await store.submitArrivalForm(staticsData , formData.arriveDate , formData.supplier , formData.commodity3 , formData.productRequirementID3 , formData.numberOfCommodity3 , formData.price3 , formData.description3)

                        formData.commodity4 = commodity.commodity4.id
                        formData.productRequirementID4 = commodity.commodity4.item_id
                        await store.submitArrivalForm(staticsData , formData.arriveDate , formData.supplier , formData.commodity4 , formData.productRequirementID4 , formData.numberOfCommodity4 , formData.price4 , formData.description4)

                        formData.commodity5 = commodity.commodity5.id
                        formData.productRequirementID5 = commodity.commodity5.item_id
                        await store.submitArrivalForm(staticsData , formData.arriveDate , formData.supplier , formData.commodity5 , formData.productRequirementID5 , formData.numberOfCommodity5 , formData.price5 , formData.description5)
                        
                        // loading.value = false;
                        setTimeout(resetForm() , delay);
                    }  
                }

                else if(rows.value == 5){
                    if(commodity.commodity1 == null || formData.numberOfCommodity1 == null || commodity.commodity2 == null || formData.numberOfCommodity2 == null || commodity.commodity3 == null || formData.numberOfCommodity3 == null || commodity.commodity4 == null || formData.numberOfCommodity4 == null || commodity.commodity5 == null || formData.numberOfCommodity5 == null || commodity.commodity6 == null || formData.numberOfCommodity6 == null){
                        const Toast = Swal.mixin({
                            toast: true,
                            position: 'top-end',
                            showConfirmButton: false,
                            timer: 3000,
                            timerProgressBar: true,
                            didOpen: (toast) => {
                              toast.addEventListener('mouseenter', Swal.stopTimer)
                              toast.addEventListener('mouseleave', Swal.resumeTimer)
                            }
                        })
                    
                        Toast.fire({
                          icon: 'error',
                          title: '!نام کالا و تعداد نباید خالی باشد'
                        })
                    }
                    else{
                        formData.commodity1 = commodity.commodity1.id
                        formData.productRequirementID1 = commodity.commodity1.item_id
                        formData.supplier = supplier.supplier.id
                        await store.submitArrivalForm(staticsData , formData.arriveDate , formData.supplier , formData.commodity1 , formData.productRequirementID1 , formData.numberOfCommodity1 , formData.price1 , formData.description1) 

                        formData.commodity2 = commodity.commodity2.id
                        formData.productRequirementID2 = commodity.commodity2.item_id
                        await store.submitArrivalForm(staticsData , formData.arriveDate , formData.supplier , formData.commodity2 , formData.productRequirementID2 , formData.numberOfCommodity2 , formData.price2 , formData.description2)

                        formData.commodity3 = commodity.commodity3.id
                        formData.productRequirementID3 = commodity.commodity3.item_id
                        await store.submitArrivalForm(staticsData , formData.arriveDate , formData.supplier , formData.commodity3 , formData.productRequirementID3 , formData.numberOfCommodity3 , formData.price3 , formData.description3)
                        
                        formData.commodity4 = commodity.commodity4.id
                        formData.productRequirementID4 = commodity.commodity4.item_id
                        await store.submitArrivalForm(staticsData , formData.arriveDate , formData.supplier , formData.commodity4 , formData.productRequirementID4 , formData.numberOfCommodity4 , formData.price4 , formData.description4)
                        
                        formData.commodity5 = commodity.commodity5.id
                        formData.productRequirementID5 = commodity.commodity5.item_id
                        await store.submitArrivalForm(staticsData , formData.arriveDate , formData.supplier , formData.commodity5 , formData.productRequirementID5 , formData.numberOfCommodity5 , formData.price5 , formData.description5)
                        
                        formData.commodity6 = commodity.commodity6.id
                        formData.productRequirementID6 = commodity.commodity6.item_id
                        await store.submitArrivalForm(staticsData , formData.arriveDate , formData.supplier , formData.commodity6 , formData.productRequirementID6 , formData.numberOfCommodity6 , formData.price6 , formData.description6)
                        
                        // loading.value = false;
                        setTimeout(resetForm() , delay);
                    }  
                }

                else if(rows.value == 4){
                    if(commodity.commodity1 == null || formData.numberOfCommodity1 == null || commodity.commodity2 == null || formData.numberOfCommodity2 == null || commodity.commodity3 == null || formData.numberOfCommodity3 == null || commodity.commodity4 == null || formData.numberOfCommodity4 == null || commodity.commodity5 == null || formData.numberOfCommodity5 == null || commodity.commodity6 == null || formData.numberOfCommodity6 == null || commodity.commodity7 == null || formData.numberOfCommodity7 == null){
                        const Toast = Swal.mixin({
                            toast: true,
                            position: 'top-end',
                            showConfirmButton: false,
                            timer: 3000,
                            timerProgressBar: true,
                            didOpen: (toast) => {
                              toast.addEventListener('mouseenter', Swal.stopTimer)
                              toast.addEventListener('mouseleave', Swal.resumeTimer)
                            }
                        })
                    
                        Toast.fire({
                          icon: 'error',
                          title: '!نام کالا و تعداد نباید خالی باشد'
                        })
                    }
                    else{
                        formData.commodity1 = commodity.commodity1.id
                        formData.productRequirementID1 = commodity.commodity1.item_id
                        formData.supplier = supplier.supplier.id
                        await store.submitArrivalForm(staticsData , formData.arriveDate , formData.supplier , formData.commodity1 , formData.productRequirementID1 , formData.numberOfCommodity1 , formData.price1 , formData.description1)

                        formData.commodity2 = commodity.commodity2.id
                        formData.productRequirementID2 = commodity.commodity2.item_id
                        await store.submitArrivalForm(staticsData , formData.arriveDate , formData.supplier , formData.commodity2 , formData.productRequirementID2 , formData.numberOfCommodity2 , formData.price2 , formData.description2)

                        formData.commodity3 = commodity.commodity3.id
                        formData.productRequirementID3 = commodity.commodity3.item_id
                        await store.submitArrivalForm(staticsData , formData.arriveDate , formData.supplier , formData.commodity3 , formData.productRequirementID3 , formData.numberOfCommodity3 , formData.price3 , formData.description3)

                        formData.commodity4 = commodity.commodity4.id
                        formData.productRequirementID4 = commodity.commodity4.item_id
                        await store.submitArrivalForm(staticsData , formData.arriveDate , formData.supplier , formData.commodity4 , formData.productRequirementID4 , formData.numberOfCommodity4 , formData.price4 , formData.description4)

                        formData.commodity5 = commodity.commodity5.id
                        formData.productRequirementID5 = commodity.commodity5.item_id
                        await store.submitArrivalForm(staticsData , formData.arriveDate , formData.supplier , formData.commodity5 , formData.productRequirementID5 , formData.numberOfCommodity5 , formData.price5 , formData.description5)

                        formData.commodity6 = commodity.commodity6.id
                        formData.productRequirementID6 = commodity.commodity6.item_id
                        await store.submitArrivalForm(staticsData , formData.arriveDate , formData.supplier , formData.commodity6 , formData.productRequirementID6 , formData.numberOfCommodity6 , formData.price6 , formData.description6)

                        formData.commodity7 = commodity.commodity7.id
                        formData.productRequirementID7 = commodity.commodity7.item_id
                        await store.submitArrivalForm(staticsData , formData.arriveDate , formData.supplier , formData.commodity7 , formData.productRequirementID7 , formData.numberOfCommodity7 , formData.price7 , formData.description7)
                        
                        // loading.value = false;
                        setTimeout(resetForm() , delay);
                    }  
                }

                else if(rows.value == 3){
                    if(commodity.commodity1 == null || formData.numberOfCommodity1 == null || commodity.commodity2 == null || formData.numberOfCommodity2 == null || commodity.commodity3 == null || formData.numberOfCommodity3 == null || commodity.commodity4 == null || formData.numberOfCommodity4 == null || commodity.commodity5 == null || formData.numberOfCommodity5 == null || commodity.commodity6 == null || formData.numberOfCommodity6 == null || commodity.commodity7 == null || formData.numberOfCommodity7 == null || commodity.commodity8 == null || formData.numberOfCommodity8 == null){
                        const Toast = Swal.mixin({
                            toast: true,
                            position: 'top-end',
                            showConfirmButton: false,
                            timer: 3000,
                            timerProgressBar: true,
                            didOpen: (toast) => {
                              toast.addEventListener('mouseenter', Swal.stopTimer)
                              toast.addEventListener('mouseleave', Swal.resumeTimer)
                            }
                        })
                    
                        Toast.fire({
                          icon: 'error',
                          title: '!نام کالا و تعداد نباید خالی باشد'
                        })
                    }
                    else{
                        formData.commodity1 = commodity.commodity1.id
                        formData.productRequirementID1 = commodity.commodity1.item_id
                        formData.supplier = supplier.supplier.id
                        await store.submitArrivalForm(staticsData , formData.arriveDate , formData.supplier , formData.commodity1 , formData.productRequirementID1 , formData.numberOfCommodity1 , formData.price1 , formData.description1)

                        formData.commodity2 = commodity.commodity2.id
                        formData.productRequirementID2 = commodity.commodity2.item_id
                        await store.submitArrivalForm(staticsData , formData.arriveDate , formData.supplier , formData.commodity2 , formData.productRequirementID2 , formData.numberOfCommodity2 , formData.price2 , formData.description2)

                        formData.commodity3 = commodity.commodity3.id
                        formData.productRequirementID3 = commodity.commodity3.item_id
                        await store.submitArrivalForm(staticsData , formData.arriveDate , formData.supplier , formData.commodity3 , formData.productRequirementID3 , formData.numberOfCommodity3 , formData.price3 , formData.description3)

                        formData.commodity4 = commodity.commodity4.id
                        formData.productRequirementID4 = commodity.commodity4.item_id
                        await store.submitArrivalForm(staticsData , formData.arriveDate , formData.supplier , formData.commodity4 , formData.productRequirementID4 , formData.numberOfCommodity4 , formData.price4 , formData.description4)

                        formData.commodity5 = commodity.commodity5.id
                        formData.productRequirementID5 = commodity.commodity5.item_id
                        await store.submitArrivalForm(staticsData , formData.arriveDate , formData.supplier , formData.commodity5 , formData.productRequirementID5 , formData.numberOfCommodity5 , formData.price5 , formData.description5)

                        formData.commodity6 = commodity.commodity6.id
                        formData.productRequirementID6 = commodity.commodity6.item_id
                        await store.submitArrivalForm(staticsData , formData.arriveDate , formData.supplier , formData.commodity6 , formData.productRequirementID6 , formData.numberOfCommodity6 , formData.price6 , formData.description6)

                        formData.commodity7 = commodity.commodity7.id
                        formData.productRequirementID7 = commodity.commodity7.item_id
                        await store.submitArrivalForm(staticsData , formData.arriveDate , formData.supplier , formData.commodity7 , formData.productRequirementID7 , formData.numberOfCommodity7 , formData.price7 , formData.description7)

                        formData.commodity8 = commodity.commodity8.id
                        formData.productRequirementID8 = commodity.commodity8.item_id
                        await store.submitArrivalForm(staticsData , formData.arriveDate , formData.supplier , formData.commodity8 , formData.productRequirementID8 , formData.numberOfCommodity8 , formData.price8 , formData.description8)
                        
                        // loading.value = false;
                        setTimeout(resetForm() , delay);
                    }  
                }

                else if(rows.value == 2){
                    if(commodity.commodity1 == null || formData.numberOfCommodity1 == null || commodity.commodity2 == null || formData.numberOfCommodity2 == null || commodity.commodity3 == null || formData.numberOfCommodity3 == null || commodity.commodity4 == null || formData.numberOfCommodity4 == null || commodity.commodity5 == null || formData.numberOfCommodity5 == null || commodity.commodity6 == null || formData.numberOfCommodity6 == null || commodity.commodity7 == null || formData.numberOfCommodity7 == null || commodity.commodity8 == null || formData.numberOfCommodity8 == null || commodity.commodity9 == null || formData.numberOfCommodity9 == null){
                        const Toast = Swal.mixin({
                            toast: true,
                            position: 'top-end',
                            showConfirmButton: false,
                            timer: 3000,
                            timerProgressBar: true,
                            didOpen: (toast) => {
                              toast.addEventListener('mouseenter', Swal.stopTimer)
                              toast.addEventListener('mouseleave', Swal.resumeTimer)
                            }
                        })
                    
                        Toast.fire({
                          icon: 'error',
                          title: '!نام کالا و تعداد نباید خالی باشد'
                        })
                    }
                    else{
                        formData.commodity1 = commodity.commodity1.id
                        formData.productRequirementID1 = commodity.commodity1.item_id
                        formData.supplier = supplier.supplier.id
                        await store.submitArrivalForm(staticsData , formData.arriveDate , formData.supplier , formData.commodity1 , formData.productRequirementID1 , formData.numberOfCommodity1 , formData.price1 , formData.description1)

                        formData.commodity2 = commodity.commodity2.id
                        formData.productRequirementID2 = commodity.commodity2.item_id
                        await store.submitArrivalForm(staticsData , formData.arriveDate , formData.supplier , formData.commodity2 , formData.productRequirementID2 , formData.numberOfCommodity2 , formData.price2 , formData.description2)

                        formData.commodity3 = commodity.commodity3.id
                        formData.productRequirementID3 = commodity.commodity3.item_id
                        await store.submitArrivalForm(staticsData , formData.arriveDate , formData.supplier , formData.commodity3 , formData.productRequirementID3 , formData.numberOfCommodity3 , formData.price3 , formData.description3)

                        formData.commodity4 = commodity.commodity4.id
                        formData.productRequirementID4 = commodity.commodity4.item_id
                        await store.submitArrivalForm(staticsData , formData.arriveDate , formData.supplier , formData.commodity4 , formData.productRequirementID4 , formData.numberOfCommodity4 , formData.price4 , formData.description4)

                        formData.commodity5 = commodity.commodity5.id
                        formData.productRequirementID5 = commodity.commodity5.item_id
                        await store.submitArrivalForm(staticsData , formData.arriveDate , formData.supplier , formData.commodity5 , formData.productRequirementID5 , formData.numberOfCommodity5 , formData.price5 , formData.description5)

                        formData.commodity6 = commodity.commodity6.id
                        formData.productRequirementID6 = commodity.commodity6.item_id
                        await store.submitArrivalForm(staticsData , formData.arriveDate , formData.supplier , formData.commodity6 , formData.productRequirementID6 , formData.numberOfCommodity6 , formData.price6 , formData.description6)

                        formData.commodity7 = commodity.commodity7.id
                        formData.productRequirementID7 = commodity.commodity7.item_id
                        await store.submitArrivalForm(staticsData , formData.arriveDate , formData.supplier , formData.commodity7 , formData.productRequirementID7 , formData.numberOfCommodity7 , formData.price7 , formData.description7)

                        formData.commodity8 = commodity.commodity8.id
                        formData.productRequirementID8 = commodity.commodity8.item_id
                        await store.submitArrivalForm(staticsData , formData.arriveDate , formData.supplier , formData.commodity8 , formData.productRequirementID8 , formData.numberOfCommodity8 , formData.price8 , formData.description8)

                        formData.commodity9 = commodity.commodity9.id
                        formData.productRequirementID9 = commodity.commodity9.item_id
                        await store.submitArrivalForm(staticsData , formData.arriveDate , formData.supplier , formData.commodity9 , formData.productRequirementID9 , formData.numberOfCommodity9 , formData.price9 , formData.description9)
                        
                        // loading.value = false;
                        setTimeout(resetForm() , delay);
                    }  
                }

                else if(rows.value == 1){
                    if(commodity.commodity1 == null || formData.numberOfCommodity1 == null || commodity.commodity2 == null || formData.numberOfCommodity2 == null || commodity.commodity3 == null || formData.numberOfCommodity3 == null || commodity.commodity4 == null || formData.numberOfCommodity4 == null || commodity.commodity5 == null || formData.numberOfCommodity5 == null || commodity.commodity6 == null || formData.numberOfCommodity6 == null || commodity.commodity7 == null || formData.numberOfCommodity7 == null || commodity.commodity8 == null || formData.numberOfCommodity8 == null || commodity.commodity9 == null || formData.numberOfCommodity9 == null || commodity.commodity10 == null || formData.numberOfCommodity10 == null){
                        const Toast = Swal.mixin({
                            toast: true,
                            position: 'top-end',
                            showConfirmButton: false,
                            timer: 3000,
                            timerProgressBar: true,
                            didOpen: (toast) => {
                              toast.addEventListener('mouseenter', Swal.stopTimer)
                              toast.addEventListener('mouseleave', Swal.resumeTimer)
                            }
                        })
                    
                        Toast.fire({
                          icon: 'error',
                          title: '!نام کالا و تعداد نباید خالی باشد'
                        })
                    }
                    else{
                        formData.commodity1 = commodity.commodity1.id
                        formData.productRequirementID1 = commodity.commodity1.item_id
                        formData.supplier = supplier.supplier.id
                        await store.submitArrivalForm(staticsData , formData.arriveDate , formData.supplier , formData.commodity1 , formData.productRequirementID1 , formData.numberOfCommodity1 , formData.price1 , formData.description1)

                        formData.commodity2 = commodity.commodity2.id
                        formData.productRequirementID2 = commodity.commodity2.item_id
                        await store.submitArrivalForm(staticsData , formData.arriveDate , formData.supplier , formData.commodity2 , formData.productRequirementID2 , formData.numberOfCommodity2 , formData.price2 , formData.description2)

                        formData.commodity3 = commodity.commodity3.id
                        formData.productRequirementID3 = commodity.commodity3.item_id
                        await store.submitArrivalForm(staticsData , formData.arriveDate , formData.supplier , formData.commodity3 , formData.productRequirementID3 , formData.numberOfCommodity3 , formData.price3 , formData.description3)

                        formData.commodity4 = commodity.commodity4.id
                        formData.productRequirementID4 = commodity.commodity4.item_id
                        await store.submitArrivalForm(staticsData , formData.arriveDate , formData.supplier , formData.commodity4 , formData.productRequirementID4 , formData.numberOfCommodity4 , formData.price4 , formData.description4)

                        formData.commodity5 = commodity.commodity5.id
                        formData.productRequirementID5 = commodity.commodity5.item_id
                        await store.submitArrivalForm(staticsData , formData.arriveDate , formData.supplier , formData.commodity5 , formData.productRequirementID5 , formData.numberOfCommodity5 , formData.price5 , formData.description5)

                        formData.commodity6 = commodity.commodity6.id
                        formData.productRequirementID6 = commodity.commodity6.item_id
                        await store.submitArrivalForm(staticsData , formData.arriveDate , formData.supplier , formData.commodity6 , formData.productRequirementID6 , formData.numberOfCommodity6 , formData.price6 , formData.description6)

                        formData.commodity7 = commodity.commodity7.id
                        formData.productRequirementID7 = commodity.commodity7.item_id
                        await store.submitArrivalForm(staticsData , formData.arriveDate , formData.supplier , formData.commodity7 , formData.productRequirementID7 , formData.numberOfCommodity7 , formData.price7 , formData.description7)

                        formData.commodity8 = commodity.commodity8.id
                        formData.productRequirementID8 = commodity.commodity8.item_id
                        await store.submitArrivalForm(staticsData , formData.arriveDate , formData.supplier , formData.commodity8 , formData.productRequirementID8 , formData.numberOfCommodity8 , formData.price8 , formData.description8)

                        formData.commodity9 = commodity.commodity9.id
                        formData.productRequirementID9 = commodity.commodity9.item_id
                        await store.submitArrivalForm(staticsData , formData.arriveDate , formData.supplier , formData.commodity9 , formData.productRequirementID9 , formData.numberOfCommodity9 , formData.price9 , formData.description9)

                        formData.commodity10 = commodity.commodity10.id
                        formData.productRequirementID10 = commodity.commodity10.item_id
                        await store.submitArrivalForm(staticsData , formData.arriveDate , formData.supplier , formData.commodity10 , formData.productRequirementID10 , formData.numberOfCommodity10 , formData.price10 , formData.description10)
                        
                        // loading.value = false;
                        setTimeout(resetForm() , delay);
                    }  
                }
            }
        }   

        return{
            formData,
            addRow,
            rows,
            delRow,
            store,
            getStorage,
            listOfSuppliers,
            submitForm,
            commodity,
            supplier,
            staticsData,
        }
    }

}
</script>

<style>
    .number-button-width{
        width: 3.9rem!important;
    }

    .v-enter-active,
    .v-leave-active {
      transition: opacity 0.8s ease;
    }

    .v-enter-from,
    .v-leave-to {
      opacity: 0;
    }

</style>