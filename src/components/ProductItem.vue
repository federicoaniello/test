<template>
  <div>
<p> {{ item.name }}</p>
<p> {{ item.description }} </p>
<p>{{ item.price }}</p>
<p> {{ item.link }}
</p>
<p>{{ item.color }}</p>
<img :src="item['image-thumb']" alt="">

  </div>
</template>

<script setup>
const props = defineProps({
  item: Object,
  required:true,
  validator: () => item !== null
})
</script>

<style lang="scss" scoped>

</style>