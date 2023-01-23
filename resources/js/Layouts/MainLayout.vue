<template>
<!-- Start Header Section  -->
 <header class="border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800 w-full">
  <div class="container mx-auto">
    <!-- Start Navigation  -->
    <nav class="p-4 flex items-center justify-between ">
      <div class="text-lg font-medium">
         <Link :href="route('listing.index')">Listings</Link>
      </div>
      <div class="text-xl text-indigo-600 dark:text-indigo-300 font-bold text-center">
        <Link :href="route('listing.index')">LaraZillow</Link>
      </div>
      <div class="">
       <Link :href="route('listing.create')" class="bg-indigo-600 hover:bg-indigo-500 text-white font-medium p-2 rounded">+ New Listing </Link>
      </div>
    </nav>
    <!-- End Navigation-->
  </div>
 </header>
 <!-- End Header Section -->

 <!--  Start Main Section  -->
 <main class="container mx-auto p-4 ">
  <div v-if="flashSuccess" class="mb-4 border rounded-md  shadow-sm  border-green-200 dark:border-green-800 bg-green-50 dark:bg_green-900 p-2">
    {{ flashSuccess }}

  </div>
  <slot>Default</slot>
 </main>
 <!-- End Main Section  -->

</template>
<script setup>
  import {computed} from 'vue';
  import {Link, usePage } from'@inertiajs/inertia-vue3';



 const page = usePage()
 const flashSuccess = computed(
  ()=>page.props.value.flash.success,
  )

</script>


