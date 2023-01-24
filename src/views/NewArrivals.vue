<template>
    <ProductList :products="jsonData"/>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import ProductList from '../components/ProductList.vue';
import useDownload from '../hooks/useDownload';
const jsonData = ref(null);
const { download } = useDownload();
onMounted(async () => {
   jsonData.value = await download("/data/new_arrivals.json");
})
</script>

<style lang="scss" scoped>

</style>