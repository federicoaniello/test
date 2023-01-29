<script setup>
import TheHeaderVue from "./components/UI/Header/TheHeader.vue";
import TheCarousel from "./components/TheCarousel.vue";
import SomeText from "./components/SomeText.vue";
import TheCatalogue from "./components/TheCatalogue.vue";
import TheModal from "./components/UI/Modal/TheModal.vue";
</script>
<template>
  <TheModal />
  <TheHeaderVue />
  <TheCarousel />
  <SomeText />
  <TheCatalogue />
</template>

<style scoped lang="scss">
@use "styles/style";
@forward "styles/style" as list-*;
</style>
