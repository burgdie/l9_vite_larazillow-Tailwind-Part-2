<template>
  <div>
    <h1>Main Page</h1>
    <Link href="/hello">Show page</Link>
  </div>
  <div>
    The message is {{ message }}
  </div>
</template>
<script setup>
  import{Link} from '@inertiajs/inertia-vue3'

  defineProps({
    message: String
  })
</script>
<script>
 import MainLayout from '../../Layouts/MainLayout.vue'
export default {
  layout: MainLayout
}
</script>
