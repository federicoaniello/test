<template>
    <ProductList :products="jsonData"/>
</template>
<script setup>
import ProductList from '../components/ProductList.vue';
import { onMounted, ref, toRefs} from "vue";
import useDownload from "../hooks/useDownload";
const { download } = useDownload();
const jsonData = ref(null);
onMounted(async () => {
   jsonData.value = await download("/data/most_view.json");

})
</script>

<style lang="scss" scoped>

</style>