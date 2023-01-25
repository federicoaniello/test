<template>
    <TheModal @close="isModalShown = !isModalShown" v-if="isModalShown">
          <template #body>
            {{ productModalChosen }}
          </template>
          <template #image>
            <img :src="productModalChosen['image-preview']" alt="">
          </template>
          <template #info>
            <h1>Officine Tamborino</h1>
            <h3 class="mb-5">sottotitolo con braciola</h3>
            <div class="prices mb-5">
                <span class="old-price">oldPrice</span>
                <div class="d-flex justify-content-start align-items-center">
                    <span class="actual-price">price</span>
                    <span class="discount">discount</span>
                </div>
            </div>
            <button class="add-to-cart">Add To Cart</button>
          </template>
    </TheModal>
    <section class="row filter-container">
        <div class="col-12">

        </div>
    </section>
    <section class="grid">
        <template v-for="(item, index) in filteredProducts" :key="index">
            <ProductItem @on-product-chosen="showModal($event)" :item="item" />
        </template>
    </section>
    <div v-if="moreThanOneRow" class="text-center mb-5">
        <button class="mt-5 show-more d-flex align-items-center justify-content-between" @click="showMore()">View more
            <img class="rotate" :class="{'upside-down':!isMaxValueHigherThanNumberOfItems}"
                :src="'/svg/right-arrow.svg'" alt="" />
        </button>
    </div>
</template>

<script setup>
import { computed, toRefs, ref } from 'vue';
import ProductItem from './ProductItem.vue';
import TheModal from './UI/Modal/TheModal.vue';
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

const isModalShown = ref(false);
const productModalChosen = ref(null);
const showModal = product => {
    isModalShown.value = !isModalShown.value;
    productModalChosen.value = product;
}
const { products, selectedColor } = toRefs(props);
let truncateMax = ref(4);


const showMore = () => {
    if (!isMaxValueHigherThanNumberOfItems.value) {
        truncateMax.value = 4;
        return;
    }
    truncateMax.value = truncateMax.value + 4;
}

const filteredProducts = computed(() => {
    console.log("PRODUCT LIST COLOR = ", selectedColor.value)
    if (selectedColor.value === null || selectedColor.value === '') return products?.value?.slice(0, truncateMax.value);

    return products?.value?.filter(el => el.color.includes(selectedColor.value)).slice(0, truncateMax.value) || []
})

const isMaxValueHigherThanNumberOfItems = computed(() => {
    return products?.value?.length > truncateMax.value
})

const moreThanOneRow = computed(() => {
    
    return products?.value?.length > 4;
})

const goTo = link => {
    window.location.href = link;
}


</script>

<style lang="scss" scoped>
.grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    row-gap: 40px;
    column-gap: 25px;
    @media (max-width:767px) {
        grid-template-columns: 1fr 1fr;
        column-gap: 10px;
    }
}

.show-more {
    padding: 12px 30px;
    border: 1px solid black;
    font-size: 15px;
    margin: 0 auto;
    margin-top: 0px;
    background: white;
    font-weight: bold;

    &::after {
        content: '';
        background: url('');
    }


}

.rotate {
    transform: rotate(90deg);
    width: 12px;
    margin-left: 14px;
    filter: opacity(100%) brightness(0%);
}

.upside-down {
    transform: rotate(-90deg);
}
</style>