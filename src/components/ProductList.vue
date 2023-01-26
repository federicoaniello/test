<template>
    <TheModal @close="isModalShown = !isModalShown" v-if="isModalShown">
        <template #body>
            {{ productModalChosen }}
        </template>
        <template #image>
            <img :src="productModalChosen['image-preview']" alt="">
        </template>
        <template #info>
            <h1>{{ productModalChosen.name }}</h1>
            <h3 class="mb-5">{{ productModalChosen.description }}</h3>
            <div class="prices">
                <span class="old-price" v-if="productModalChosen['old-price']">{{
                    productModalChosen['old-price']
                }}</span>
                <div class="mb-5 d-flex justify-content-start align-items-center">
                    <span class="actual-price">{{ productModalChosen.price }}</span>
                    <span class="discount" v-if="productModalChosen.discount">{{ productModalChosen.discount }}</span>
                </div>
            </div>
            <button class="add-to-cart"> <a style="text-decoration: none; color:white" :href="productModalChosen.link"
                    target="_blank">Add To Cart</a></button>

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
        <template v-if="!products">
            <div style="padding-bottom: 500px;">

            </div>
        </template>
    </section>
    <div v-if="!isMaxValueHigherThanNumberOfItems" class="text-center mb-5">
        <button :disabled="isMaxValueHigherThanNumberOfItems"
            class="mt-5 show-more d-flex align-items-center justify-content-between"
            @click="showMore()">{{!isMaxValueHigherThanNumberOfItems ? 'View more' : 'No more products to see' }}
            <img class="rotate" :class="{'upside-down':isMaxValueHigherThanNumberOfItems}" :src="'/svg/right-arrow.svg'"
                alt="" />
        </button>
    </div>
</template>

<script setup>
import { computed, toRefs, ref, watch } from 'vue';
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
const truncateMax = ref(4);

const isMaxValueHigherThanNumberOfItems = computed(() => {
    return products?.value?.length >= truncateMax.value
})

const showMore = () => {
    if (!moreThanOneRow) {
        truncateMax.value = 4;
        return;
    }
    truncateMax.value += 4;
}

const filteredProducts = computed(() => {
    if (selectedColor.value === null || selectedColor.value === '') return products?.value?.slice(0, truncateMax.value);
    const filtered = products?.value?.filter(el => el.color.includes(selectedColor.value)).slice(0, truncateMax.value) || [];
    return filtered;
})

const moreThanOneRow = computed(() => {
    return filteredProducts?.value?.length > 4
})


watch(selectedColor, (newValue, oldValue) => {
    truncateMax.value = 4;
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

    @media (min-width:768px) and (max-width:992px) {
        grid-template-columns: 1fr 1fr 1fr;
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

    &:disabled {
        opacity: 30%;
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