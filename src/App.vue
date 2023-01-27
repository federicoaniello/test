<script setup>
import TheHeaderVue from './components/UI/Header/TheHeader.vue';
import TheCarousel from './components/TheCarousel.vue';
import SomeText from './components/SomeText.vue';
import TheCatalogue from './components/TheCatalogue.vue';
import useModalStore from './store/useModalStore';
const modal = useModalStore();

</script>
<template>
  <TheHeaderVue/>
  <TheCarousel/>
  <SomeText/>
  <TheCatalogue/>
  </template>

<style scoped lang="scss">
@use "styles/style";
@forward "styles/style" as list-*;
</style>
