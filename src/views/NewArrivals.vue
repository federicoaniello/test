<template>
    <ProductList :products="jsonData"/>
</template>

<script setup>
import { onMounted, ref, toRefs } from 'vue';
import ProductList from '../components/ProductList.vue';
import useDownload from '../hooks/useDownload';
const jsonData = ref(null);
const { download } = useDownload();
const props = defineProps({
    selectedColor: String
});
const { selectedColor } = toRefs(props);

onMounted(async () => {
    console.log(selectedColor)
   jsonData.value = await download("/data/new_arrivals.json");
})
</script>

<style lang="scss" scoped>

</style>