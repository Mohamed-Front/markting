<script setup>
import {FilterMatchMode} from 'primevue/api'
import {ref, onMounted, onBeforeMount} from 'vue'
// import ProductService from '@/service/ProductService';
import {useToast} from 'primevue/usetoast'
import axios from "axios";
import {useRouter} from "vue-router";

const toast = useToast()
const router = useRouter()

const products = ref(null)
const elements = ref(null)


const loading = ref(true)
const user = ref({})
const elememnts = ref(null)
const productDialog = ref(false)
const deleteDialog = ref(false)
const deleteProductsDialog = ref(false)
const product = ref({})
const selectedProducts = ref(null)
const dt = ref(null)
const filters = ref({})
const submitted = ref(false)

// const productService = new ProductService();

onBeforeMount(() => {
  initFilters()
})

const fetchData = () => {


  axios.get("/api/Products/allProducts").then((res) => {
    loading.value = false
    elements.value = res.data.data

  });


}

onMounted(() => {
  // productService.getProducts().then((data) => (products.value = data));
  fetchData()

})
const formatCurrency = (value) => {
  return value.toLocaleString('gb-US', {style: 'currency', currency: 'USD'})
}
const koko = () => {
  console.log(langSelected.value)
}

const openNew = () => {
router.push({ name: 'product-order' })
}

const hideDialog = () => {
  productDialog.value = false
  submitted.value = false
}

const save = () => {
  submitted.value = true
  if (!user.value.first_name || !user.value.last_name || !user.value.email || !user.value.mobile_number)
    return


  if (user.value.id) {
    axios
      .post(`/api/accommodition/${accommodition.value.id}/update`, user.value)
      .then((res) => {
        console.log(res.data)
        fetchData()
        toast.add({severity: 'success', summary: 'Successful', detail: 'user updated', life: 3000})
      })
      .catch(() => {
      })
    toast.add({severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000})
  } else {
    axios
      .post('/api/users/create', user.value)
      .then((res) => {
        console.log(res.data)
        fetchData()
        toast.add({severity: 'success', summary: 'Successful', detail: 'user Created', life: 3000})
      })
      .catch(() => {
      })

  }
  productDialog.value = false
  user.value = {}
}

const edit = (edit) => {
  console.log(edit)
  user.value = {...edit}

  router.push({name:'product-update',params:{'id':user.value.id} })

}

const confirmDelete = (edit) => {
  user.value = edit
  deleteDialog.value = true
}

const deleteAction = () => {
  axios
    .get(`/api/Products/delete/${user.value.id}`)
    .then((res) => {
      console.log(res.data)
      deleteDialog.value = false
      fetchData()
      toast.add({severity: 'success', summary: 'Successful', detail: 'product deleted', life: 3000})
    })
    .catch(() => {
    })

}

const findIndexById = (id) => {
  let index = -1
  for (let i = 0; i < products.value.length; i++) {
    if (products.value[i].id === id) {
      index = i
      break
    }
  }
  return index
}

const createId = () => {
  let id = ''
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (let i = 0; i < 5; i++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return id
}

const exportCSV = () => {
  dt.value.exportCSV()
}

const confirmDeleteSelected = () => {
  deleteProductsDialog.value = true
}
const deleteSelectedProducts = () => {
  products.value = products.value.filter((val) => !selectedProducts.value.includes(val))
  deleteProductsDialog.value = false
  selectedProducts.value = null
  toast.add({severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000})
}

const initFilters = () => {
  filters.value = {
    global: {value: null, matchMode: FilterMatchMode.CONTAINS},
  }
}
</script>

<template>
  <div class="grid">
    <div class="col-12">
      <va-card class="card">
        <Toolbar class="mb-4">
          <template #start>
            <div class="my-2">
              <Button label="New" icon="pi pi-plus" class="new mr-2" @click="openNew" />
              <!--              <Button-->
              <!--                label="Delete"-->
              <!--                icon="pi pi-trash"-->
              <!--                class="p-button-danger"-->
              <!--                :disabled="!selectedProducts || !selectedProducts.length"-->
              <!--                @click="confirmDeleteSelected"-->
              <!--              />-->
            </div>
          </template>

          <template #end>
            <!--            <FileUpload-->
            <!--              mode="basic"-->
            <!--              accept="image/*"-->
            <!--              :max-file-size="1000000"-->
            <!--              label="Import"-->
            <!--              choose-label="Import"-->
            <!--              class="mr-2 inline-block"-->
            <!--            />-->
            <Button label="Export" icon="pi pi-upload" class="new" @click="exportCSV($event)"/>
            <Dropdown v-model="langSelected" @click="koko" editable :options="lang" optionLabel="name" option-value="value"   class=" w-48 mx-3" />

          </template>
        </Toolbar>

        <Toast/>




        <DataTable
          ref="dt"
          v-model:selection="selectedProducts"
          :value="elements"
          :loading="loading"
          data-key="id"
          :paginator="true"
          :rows="10"
          :filters="filters"
          paginator-template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
          :rows-per-page-options="[5, 10, 25]"
          current-page-report-template="Showing {first} to {last} of {totalRecords} products"
          responsive-layout="scroll"
        >
          <template #header>
            <div class="flex flex-column md:flex-row md:justify-between md:align-items-center">
              <h5 class="m-0">Manage Product  </h5>
              <span class="block mt-2 md:mt-0 p-input-icon-left">
                <i class="pi pi-search"/>
                <InputText v-model="filters['global'].value" placeholder="Search..."/>
              </span>
            </div>
          </template>

          <Column selection-mode="multiple" header-style="width: 3rem"></Column>
          <Column field="name" header="Name" :sortable="true" header-style="width:14%; min-width:10rem;">
            <template #body="slotProps">
              {{ slotProps.data?.name }}
            </template>
          </Column>
          <Column field="price" header="price" :sortable="true" header-style="width:14%; min-width:10rem;">
            <template #body="slotProps">
              {{ slotProps.data?.price }} PE
            </template>
          </Column>
          <Column field="Description" header="Description" :sortable="true" header-style="width:14%; min-width:10rem;">
            <template #body="slotProps">
              {{ slotProps.data?.description }}
            </template>
          </Column>
          <Column field="Images" header="Images" :sortable="true" header-style="width:14%; min-width:10rem;">
            <template #body="slotProps">
              <img :src="`http://marketing.mqawilk.com/public/images/Products/${slotProps.data?.id}/` + slotProps.data?.image" >
            </template>
          </Column>
          <Column field="status" header="status" :sortable="true" header-style="width:14%; min-width:10rem;">
            <template #body="slotProps">
              <div v-if="slotProps.data?.status == 0" class="text-center rounded-lg py-2 text-white w-[60%] bg-[red]">IN Active</div>
              <div v-if="slotProps.data?.status == 1" class="text-center rounded-lg py-2 text-white w-[60%] bg-[green]">Active</div>
            </template>
          </Column>
          <Column header-style="min-width:10rem;">
            <template #body="slotProps">
              <Button
                icon="pi pi-pencil"
                class="p-button-rounded p-button-success mr-2"
                @click="edit(slotProps.data)"
              />
              <Button
                icon="pi pi-trash"
                class="delete mt-2"
                @click="confirmDelete(slotProps.data)"
              />
            </template>
          </Column>
        </DataTable>

        <Dialog
          v-model:visible="productDialog"
          :style="{ width: '450px' }"
          header="users form"
          :modal="true"
          class="p-fluid"
        >

          <div class="field mb-5">
            <label for="first">first name </label>
            <InputText
              class="mt-3"
              id="first"
              v-model.trim="user.first_name"
              required="true"
              autofocus
              :class="{ 'p-invalid': submitted && !user.first_name }"
            />
            <small v-if="submitted && !user.first_name" class="p-invalid">First Name is required.</small>
          </div>

          <div class="field mb-5">
            <label for="last">last name </label>
            <InputText
              class="mt-3"
              id="last"
              v-model.trim="user.last_name"
              required="true"
              autofocus
              :class="{ 'p-invalid': submitted && !user.last_name }"
            />
            <small v-if="submitted && !user.last_name" class="p-invalid">Last Name is required.</small>
          </div>

          <div class="field mb-5">
            <label for="email" class="mb-3">email </label>
            <InputText
              class="mt-3"
              id="email"
              v-model.trim="user.email"
              required="true"
              autofocus
              :class="{ 'p-invalid': submitted && !user.email }"
            />
            <small v-if="submitted && !user.email" class="p-invalid">Email is required.</small>
          </div>

          <div class="field mb-5">
            <label for="password" class="mb-3">password </label>
            <InputText
              class="mt-3"
              id="password"
              v-model.trim="user.password"
              required="true"
              autofocus
              :class="{ 'p-invalid': submitted && !user.password }"
            />
            <small v-if="submitted && !user.password" class="p-invalid">password is required.</small>
          </div>

          <div class="field mb-5">
            <label for="mobile" class="mb-3">mobile</label>
            <InputText
              class="mt-3"
              id="mobile"
              v-model.trim="user.mobile_number"
              required="true"
              autofocus
              :class="{ 'p-invalid': submitted && !user.mobile_number }"
            />
            <small v-if="submitted && !user.mobile_number" class="p-invalid">mobile is required.</small>
          </div>


          <template #footer>
            <Button label="Cancel" icon="pi pi-times" class="p-button-text" @click="hideDialog"/>
            <Button label="Save" icon="pi pi-check" class="p-button-text" @click="save"/>
          </template>
        </Dialog>

        <Dialog v-model:visible="deleteDialog" :style="{ width: '450px' }" header="Confirm" :modal="true">
          <div class="flex align-items-center justify-content-center">
            <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem"/>
            <span v-if="user"
            >Are you sure you want to delete <b>{{ user.first_name }}</b
            >?</span
            >
          </div>
          <template #footer>
            <Button label="No" icon="pi pi-times" class=" p-button-text" @click="deleteDialog = false"/>
            <Button label="Yes" icon="pi pi-check" class="p-button-text" @click="deleteAction"/>
          </template>
        </Dialog>

        <Dialog v-model:visible="deleteProductsDialog" :style="{ width: '450px' }" header="Confirm" :modal="true">
          <div class="flex align-items-center justify-content-center">
            <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem"/>
            <span v-if="product">Are you sure you want to delete the selected products?</span>
          </div>
          <template #footer>
            <Button label="No" icon="pi pi-times" class="p-button-text" @click="deleteProductsDialog = false"/>
            <Button label="Yes" icon="pi pi-check" class="p-button-text" @click="deleteSelectedProducts"/>
          </template>
        </Dialog>
      </va-card>
    </div>
  </div>
</template>

<style scoped lang="scss">



</style>
