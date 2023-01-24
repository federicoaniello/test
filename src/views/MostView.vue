<template>
    <template v-for="(item, index) in JsonData" :key="index">
        <ProductItem :item="item"/>
    </template>
</template>

<script setup>
import ProductItem from '../components/ProductItem.vue';
import { onMounted, ref } from "vue";
import useDownload from "../hooks/useDownload";
const { download } = useDownload();

const JsonData = ref(null);
onMounted(async () => {
   JsonData.value = await download("/data/most_view.json");
})
</script>

<style lang="scss" scoped>

</style>