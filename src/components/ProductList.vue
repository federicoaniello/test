<template>
    <section class="grid container">
        <template v-for="(item, index) in truncatedProducts" :key="index">
            <ProductItem :item="item" />
        </template>
    </section>
    <div class="text-center">
        <button class="mt-3 show-more" v-on:click="showMore">Show More</button>
    </div>
</template>

<script setup>
import { computed, toRefs, ref } from 'vue';
import ProductItem from './ProductItem.vue';
const props = defineProps({
    products: Object,
});
const { products }  = props; 
let truncateMax = 4;


const showMore = () => {
    truncateMax += 4;
}

const truncatedProducts = computed(() => {
    return products?.slice(0,truncateMax) || null
})
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
.show-more{
    padding: 10px 20px;
    border: 2px solid black;
    font-size: 18px;
    margin: 0 auto;
}
</style>