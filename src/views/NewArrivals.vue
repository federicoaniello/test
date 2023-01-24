<template>
    <template v-for="(item, index) in JsonData" :key="index">
        <ProductItem :item="item"/>
    </template>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import ProductItem from '../components/ProductItem.vue';
import useDownload from '../hooks/useDownload';
const JsonData = ref(null);
const { download } = useDownload();
onMounted(async () => {
   JsonData.value = await download("/data/new_arrivals.json");
})
</script>

<style lang="scss" scoped>

</style>