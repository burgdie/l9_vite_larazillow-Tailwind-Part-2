<template>
  <div>
    <h2>Show Page</h2>
  </div>
  <Link href="/">Home</Link>
</template>
<script  setup>
  import {Link } from '@inertiajs/inertia-vue3';
</script>

<script>
import MainLayout from '../../Layouts/MainLayout.vue'
export default {
  layout: MainLayout
}
</script>
