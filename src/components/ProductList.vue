<template>
    <section class="row filter-container">
        <div class="col-12">
            
        </div>
    </section>
    <section class="grid">
        <template v-for="(item, index) in filteredProducts" :key="index">
            <ProductItem :item="item" />
        </template>
    </section>
    <div v-if="products" class="text-center">
        <button class="mt-3 show-more" @click="showMore()">Show More {{ isMaxValueHigherThanNumberOfItems ? 'DOWN' : 'UP' }}</button>
    </div>
</template>

<script setup>
import { computed, toRefs, ref, watch, watchEffect } from 'vue';
import ProductItem from './ProductItem.vue';
const props = defineProps({
    products: Array,
    required:true
});
const { products } = toRefs(props);
let truncateMax = ref(4);


const showMore = () => {
    if(!isMaxValueHigherThanNumberOfItems.value){
        truncateMax.value = 4;
        return;
    }
    truncateMax.value = truncateMax.value + 4;
}

// watch(truncateMax, (prev, n) => {
//     //products.value = products.value.slice(0, n)
// })

const filteredProducts = computed(() => {
    return products?.value?.slice(0, truncateMax.value) || []
})

const isMaxValueHigherThanNumberOfItems = computed(() => {
    return products?.value?.length > truncateMax.value
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

.show-more {
    padding: 10px 20px;
    border: 2px solid black;
    font-size: 18px;
    margin: 0 auto;
    &::after{
        content: '';
        background: url('');
    }
}
</style>