<template>
    <section class="grid container">
        <template v-for="(item, index) in products" :key="index">
            <ProductItem :item="item" />
        </template>
    </section>
</template>

<script setup>
import { toRefs } from 'vue';
import ProductItem from './ProductItem.vue';
const props = defineProps({
    products: Object,
});

const { products } = toRefs(props);
</script>

<style lang="scss" scoped>
.grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;

    @media (max-width:767px) {
        grid-template-columns: 1fr 1fr;
    }
}
</style>