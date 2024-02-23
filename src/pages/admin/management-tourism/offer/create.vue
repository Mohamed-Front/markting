<template>

  <va-card class="card">
    <div class=" flex justify-center">
      <form  class="flex flex-col  w-3/4 py-9">
        <h2 class="pb-4 text-center va-text-bold">
          update product


        </h2>

        <div class="">
          <label for="password">Name </label>
          <InputText required v-model="name" type="text" class="mt-3 w-full mb-3"/>
          <div class="mt-1 mb-5 text-red-500" v-if="error?.name">{{ error.name[0] }}</div>

        </div>



        <div class="">
          <label for="password">Description </label>
          <Textarea required v-model="description"  rows="5" cols="30" class="mt-3 w-full mb-3" />

          <div class="mt-1 mb-5 text-red-500" v-if="error?.description">{{ error.description[0] }}</div>

        </div>


        <div class="mb-5">
          <label for="password">Old price </label>
          <InputNumber required v-model="old_price" type="text" class="mt-3 w-full mb-3"/>
          <div class="mt-1 mb-5 text-red-500" v-if="error?.old_price">{{ error.old_price[0] }}</div>
        </div>
        <div class="mb-5">
          <label for="password">New price </label>
          <InputNumber required v-model="new_price" type="text" class="mt-3 w-full mb-3"/>
          <div class="mt-1 mb-5 text-red-500" v-if="error?.new_price">{{ error.new_price[0] }}</div>
        </div>
        <div class="">
          <div class="py-2 grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">

          </div>
        </div>


        <div>
          <FileUpload id="password" @uploader="uploadFile" accept="image/*" required="true" multiple="true"
                      :custom-upload="true" autofocus>
            <template #empty>

              <img   :src="image" class="w-[200px] h-[90px]  mb-3">


            </template>
          </FileUpload>

          <div class="mt-1 mb-5 text-red-500" v-if="error?.image">{{ error.image[0] }}</div>


        </div>


        <div class="  mt-4">
          <div class="flex items-center">
            <label class="mx-2"> status </label>
            <InputSwitch v-model="status"/>
            <div class="mt-1 mb-5 text-red-500" v-if="error?.status">{{ error.status[0] }}</div>
          </div>

        </div>


        <Button  @click="cproduct"  class="mt-3"/>
      </form>

    </div>
    <Toast/>
  </va-card>
</template>

<script setup>
import {useToast} from 'primevue/usetoast'
import axios from "axios";
import {onMounted, ref, watch ,computed} from "vue";

const toast = useToast()
const file = ref('')
const url = ref([])
const name=ref('')
const image=ref('')
const description=ref('')
const new_price=ref('')
const old_price=ref('')
const status=ref(false)
const error = ref([])

const uploadFile = (event) => {
  console.log(event)
  image.value = event.files[0];
  const body = new FormData();
  body.append("image",image.value );
  console.log(body)
};


const cproduct=()=>{
  const body = new FormData()
  body.append("image",image.value );
  body.append("name",name.value );
  body.append("new_price",new_price.value );
  body.append("old_price",old_price.value );
  body.append("description",description.value );
  if(status.value){
    status.value =1
    body.append("status",status.value );
  }else{
    status.value =0
    body.append("status",status.value );
  }



  axios
    .post('api/Offers/create',body)
    .then((res) => {

      toast.add({severity: 'success', summary: 'Successful', detail: 'offer created Successful', life: 3000})
    })
    .catch((er) => {
      console.log(er)
      error.value=er.response.data.errors

    })

}






</script>

<style scoped>

</style>
