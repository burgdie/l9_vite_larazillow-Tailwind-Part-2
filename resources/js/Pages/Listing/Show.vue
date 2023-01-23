<template>
  <div>
     <Listingaddress :listing="listing" />
  </div>
  <div>
    The message is {{ message }}
  </div>
</template>
<script setup>
  import{Link} from '@inertiajs/inertia-vue3'
  import Listingaddress from '../../Components/ListingAddress.vue';
  
  defineProps({
    listing: Object
  })
</script>
<script>
 import MainLayout from '../../Layouts/MainLayout.vue'
export default {
  layout: MainLayout
}
</script>
