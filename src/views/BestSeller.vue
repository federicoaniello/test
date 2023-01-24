<template>
    <template v-for="(item, index) in JsonData" :key="index">
        <ProductItem :item="item"/>
    </template>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import ProductItem from '../components/ProductItem.vue';
import useDownload from '../hooks/useDownload';
const { download } = useDownload();

const JsonData = ref(null);
onMounted(async () => {
   JsonData.value = await download("/data/best_seller.json");
})
</script>

<style lang="scss" scoped>

</style>