<template>
  <ProductList :products="jsonData" :selectedColor="selectedColor" />
</template>

<script setup>
import { ref, onMounted, toRefs, watch } from 'vue';
import ProductList from '../components/ProductList.vue';
import useDownload from '../hooks/useDownload';
const { download, colorUtility } = useDownload();
const props = defineProps({
  selectedColor: { type: String },
});
const emits = defineEmits(['onColorsGathered'])

const { selectedColor } = toRefs(props);
const colors = ref([]);
const jsonData = ref(null);
onMounted(async () => {
  jsonData.value = await download("/data/best_seller.json");
  colors.value = colorUtility(jsonData);
   emits('onColorsGathered',colors.value);
})
</script>

<style lang="scss" scoped>

</style>