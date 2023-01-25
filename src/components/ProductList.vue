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
import { computed, toRefs, ref } from 'vue';
import ProductItem from './ProductItem.vue';
const props = defineProps({
    products: {
        type: Array,
        required: true
    },
    selectedColor: {
        type: String,
        required: false
    }
});
const { products, selectedColor } = toRefs(props);
let truncateMax = ref(4);


const showMore = () => {
    if(!isMaxValueHigherThanNumberOfItems.value){
        truncateMax.value = 4;
        return;
    }
    truncateMax.value = truncateMax.value + 4;
}

const filteredProducts = computed(() => {
    console.log("PRODUCT LIST COLOR = ", selectedColor.value)
    return products?.value?.slice(0, truncateMax.value).filter(el => el.color.includes(selectedColor.value)) || []
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