<template>
  <div class="flex flex-col-reverse md:grid md:grid-cols-12 gap-4">
    <Box class="md:col-span-7 flex items-center w-full">
      <div class="w-full text-center font-medium text-gray-500 dark:text-gray-500" >No images</div>
    </Box>
    <div class="md:col-span-5 flex flex-col gap-">
      <Box>
        <template #header>Basic Info</template>
        <Price :price="listing.price" class="text-2xl font-bold" />
        <ListingSpace :listing="listing" class="text-lg"/>
        <Listingaddress :listing="listing" class="text-gray-500" />
      </Box>
      <Box>
        <template #header>Offer</template>
        Make an Offer
      </Box>
    </div>
  </div>

</template>
<script setup>
  import{Link} from '@inertiajs/inertia-vue3'
  import Listingaddress from '../../Components/ListingAddress.vue';
  import Price from '../../Components/UI/Price.vue';
  import ListingSpace from '../../Components/UI/ListingSpace.vue';
  import Box from '../../Components/UI/Box.vue';

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
