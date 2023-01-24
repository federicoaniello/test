<template>
    <ProductList :products="jsonData"/>
</template>
<script setup>
import ProductList from '../components/ProductList.vue';
import { onMounted, ref, toRefs} from "vue";
import useDownload from "../hooks/useDownload";
const { download } = useDownload();
const props = defineProps({
    selectedColor: String
});
const { selectedColor } = toRefs(props);
const jsonData = ref(null);
onMounted(async () => {
    console.log(selectedColor)

   jsonData.value = await download("/data/most_view.json");

})
</script>

<style lang="scss" scoped>

</style>