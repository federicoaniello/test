<template>
  <section class="grid">
    <template v-for="(item, index) in filteredProducts" :key="index">
      <ProductItem @on-product-chosen="showModal($event)" :item="item" />
    </template>
    <div v-if="products?.length == 0" style="padding-bottom: 500px"></div>
  </section>
  <div v-if="moreToShow || moreThan4" class="text-center mb-5">
    <button
      :disabled="!moreToShow"
      class="mt-5 show-more d-flex align-items-center justify-content-between"
      @click="showMore()"
    >
      {{ moreToShow ? "View more" : "No more products to see" }}
      <img
        class="rotate"
        :class="{ 'upside-down': !moreToShow }"
        :src="'/svg/right-arrow.svg'"
        alt=""
      />
    </button>
  </div>
</template>

<script setup>
import { computed, toRefs, ref, watch } from "vue";
import ProductItem from "./ProductItem.vue";

const isModalShown = ref(false);
const productModalChosen = ref(null);
const { products, selectedColor } = toRefs(props);
const truncateValue = ref(4);
const props = defineProps({
  products: {
    type: Array,
    required: true,
  },
  selectedColor: {
    type: String,
    required: false,
  },
});

//COMPUTED

const moreToShow = computed(() => {
  console.log("products Length", productsLength.value);

  return productsLength.value > truncateValue.value;
});

const moreThan4 = computed(() => {
  return filteredProducts?.value?.length > 3;
});

const productsLength = computed(() => {
  if (selectedColor.value === null || selectedColor.value === "")
    return products?.value?.length;
  return products?.value?.filter((el) => el.color.includes(selectedColor.value))
    .length;
});

/**
 * Restituisce i prodotti filtrati per colore e per il truncateValue (multiplo di 4)
 */
const filteredProducts = computed(() => {
  if (selectedColor.value === null || selectedColor.value === "")
    return products?.value?.slice(0, truncateValue.value);
  const filtered =
    products?.value
      ?.filter((el) => el.color.includes(selectedColor.value))
      .slice(0, truncateValue.value) || [];
  return filtered;
});

//FUNCTIONS

/**
 * Mostra la modale inviando allo store il prodotto selezionato
 * @param {*} product
 */
const showModal = (product) => {
  isModalShown.value = !isModalShown.value;
  productModalChosen.value = product;
};

const showMore = () => {
  truncateValue.value += 4;
};

//WATCH

/**
 * Ogni volta che cambio colore o ricevo nuovi prodotti, resetto il truncateValue
 */
watch([selectedColor, products], () => {
  truncateValue.value = 4;
});
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: 40px;
  column-gap: 25px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 10px;
  }

  @media (min-width: 768px) and (max-width: 992px) {
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
    content: "";
    background: url("");
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
