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
        <template #header>
          Monthly Payment
        </template>
        <div>
          <label class="label">Interest Rate({{ interestRate }})</label>
          <input  v-model.number="interestRate"  type="range" name="" id="" min="0.1" max="30" step="0.1" class="w-full h-4 bg-gray-200 rounded-lg appearance-none curso-pointer dark:bg-gray-700">

          <label class="label">Duration({{ duration }} years)</label>
          <input v-model.number="duration" type="range" name="" id="" min="3" max="35" step="1" class="w-full h-4 bg-gray-200 rounded-lg appearance-none curso-pointer dark:bg-gray-700">
          <div class="text-gray-600 dark:text-gray-300 mt-2">
            <div class="text-gray-400">Your monthly payment
              <Price :price="monthlyPayment" class="text-3xl" />
            </div>
            <div class="mt-2 text-gray-500">
              <div class="flex justify-between">
                <div class="">Total Paid</div>
                <div class="">
                  <Price :price="totalPaid" class="font-medium"/>
                </div>
              </div>
              <div class="flex justify-between">
                <div class="">Principal Paid</div>
                <div class="">
                  <Price :price="listing.price" class="font-medium"/>
                </div>
              </div>
              <div class="flex justify-between">
                <div class="">Interest Paid</div>
                <div class="">
                  <Price :price="totalInterest" class="font-medium"/>
                </div>
              </div>

            </div>



          </div>



        </div>

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

import { ref } from 'vue'

import { useMonthlyPayment } from '../../Composables/useMonthlyPayment'

const interestRate = ref(2.5);
const duration = ref(25);


const props = defineProps({
  listing: Object
})
const { monthlyPayment, totalPaid, totalInterest } = useMonthlyPayment(
  props.listing.price, interestRate, duration,
)



</script>
<script>
import MainLayout from '../../Layouts/MainLayout.vue'

export default {
  layout: MainLayout
}
</script>
