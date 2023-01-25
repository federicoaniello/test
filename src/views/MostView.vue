<template>
    <ProductList :products="jsonData" :selectedColor="selectedColor"/>
</template>
<script setup>
import ProductList from '../components/ProductList.vue';
import { onMounted, ref, toRefs, watch} from "vue";
import useDownload from "../hooks/useDownload";
const { download } = useDownload();
const props = defineProps({
  selectedColor: { type: String },
});
const { selectedColor } = toRefs(props);

const jsonData = ref(null);
onMounted(async () => {
   jsonData.value = await download("/data/most_view.json");

})
watch(selectedColor, (neww,old) => {
    console.log(neww)
})
</script>

<style lang="scss" scoped>

</style>