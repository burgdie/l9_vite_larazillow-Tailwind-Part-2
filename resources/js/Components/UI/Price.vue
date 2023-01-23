<template>
  <span> {{ formattedPrice }}</span>
</template>
<script setup>
  import {computed} from 'vue'
const props = defineProps({
  price: [Number, String]
})

const formattedPrice = computed(
  () => Number(props.price).toLocaleString('en-US', { //de-DE
    style: 'currency',
    currency: 'USD',  //EUR
    maximumFractionDigits: 2,
  }),
)

</script>
