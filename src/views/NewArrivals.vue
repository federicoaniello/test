<template>
    <ProductList :products="jsonData" :selectedColor="selectedColor"/>
</template>

<script setup>
import { onMounted, ref, toRefs, watch } from 'vue';
import ProductList from '../components/ProductList.vue';
import useDownload from '../hooks/useDownload';
const jsonData = ref(null);
const props = defineProps({
  selectedColor: { type: String },
});
const emits = defineEmits(['onColorsGathered'])
const colors = ref([]);
const { selectedColor } = toRefs(props);
const { download, colorUtility } = useDownload();
onMounted(async () => {
    console.log("STRING = ",selectedColor.value)
   jsonData.value = await download("/data/new_arrivals.json");
   colors.value = colorUtility(jsonData);
   emits('onColorsGathered',colors.value);
})
</script>

<style lang="scss" scoped>

</style>