<template>
    <ProductList :products="jsonData" :selectedColor="selectedColor"/>
</template>
<script setup>
import ProductList from '../components/ProductList.vue';
import { onMounted, ref, toRefs, watch} from "vue";
import useDownload from "../hooks/useDownload";
const { download, colorUtility } = useDownload();
const props = defineProps({
  selectedColor: { type: String },
});
const emits = defineEmits(['onColorsGathered'])
const { selectedColor } = toRefs(props);
const colors = ref([]);
const jsonData = ref(null);
onMounted(async () => {
   jsonData.value = await download("/data/most_view.json");
    colors.value = colorUtility(jsonData);
   emits('onColorsGathered',colors.value);
})
watch(selectedColor, (neww,old) => {
    console.log(neww)
})
</script>

<style lang="scss" scoped>

</style>