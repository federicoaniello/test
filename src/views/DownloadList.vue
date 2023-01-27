<template>
  <ProductList :products="jsonData" :selectedColor="selectedColor" />
</template>

<script setup>
import { ref, onBeforeMount, toRefs, watch } from 'vue';
import ProductList from '../components/ProductList.vue';
import useDownload from '../hooks/useDownload';

const { download, colorUtility } = useDownload();
const props = defineProps({
  selectedColor: { type: String },
  api: { type: String, required: true },
});
const emits = defineEmits(['onColorsGathered'])

const { selectedColor, api } = toRefs(props);
const colors = ref([]);
const jsonData = ref(null);
onBeforeMount(async () => {
  init();
})

watch(api, (_new, _old) => {
  jsonData.value = [];
  init();
})

const init = async () => {
  console.log("EXECUTE INIT");
  jsonData.value = await download(api.value);
  colors.value = colorUtility(jsonData);
  emits('onColorsGathered', colors.value);
}
</script>

<style lang="scss" scoped>

</style>