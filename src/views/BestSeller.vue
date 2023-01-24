<template>
    <ProductList :products="jsonData"/>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import ProductList from '../components/ProductList.vue';
import useDownload from '../hooks/useDownload';
const { download } = useDownload();
const jsonData = ref(null);
onMounted(async () => {
   jsonData.value = await download("/data/best_seller.json");
})
</script>

<style lang="scss" scoped>

</style>