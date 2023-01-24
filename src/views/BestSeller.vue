<template>
    <ProductList :products="jsonData"/>
</template>

<script setup>
import { ref, onMounted, toRefs } from 'vue';
import ProductList from '../components/ProductList.vue';
import useDownload from '../hooks/useDownload';
const { download } = useDownload();
const props = defineProps({
    selectedColor: String
});
const { selectedColor } = toRefs(props);

const jsonData = ref(null);
onMounted(async () => {
    console.log(selectedColor.value)

   jsonData.value = await download("/data/best_seller.json");
})
</script>

<style lang="scss" scoped>

</style>