<template>
  <div class="product" @click="openModal(item)">
    <div class="product--img">
      <div :class="{ 'additional-info': true, 'justify-content-end': !item?.discount }">
        <span v-if="item?.discount">{{ item?.discount }}</span>
        <img src="/svg/heart.svg" alt="">
      </div>
      <img :src="item?.['image-thumb']" alt="">
      <img class="eye" src="/svg/visible.svg" alt="">
    </div>
    <div class="product--info">
      <h5>{{ item?.name }}</h5>
      <h6>{{ item?.description }}</h6>
      <div class="prices">
        <span class="old-price" v-if="item?.['old-price']">{{ item?.['old-price'] }}</span>
        <span style="font-weight: bold;">{{ item?.price }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})
const emits = defineEmits(['onProductChosen'])

const openModal = (product) => {
  console.log('selected Item: ', product)
  emits('onProductChosen',product);
}
</script>

<style lang="scss" scoped>
.product {
  position: relative;
  min-height: 320px;
  max-width: 270px;

  @media (max-width:767px) {
    min-height: 300px;
  }

  overflow: hidden;

  :hover {
    .eye {
      opacity: 1;
    }
  }

  &--img {
    background-color: rgb(190, 190, 190);
    height: 320px;
    position: relative;
    
    @media (max-width:767px) {
      height: 220px;
    }

    .eye {
      opacity: 0;
      position: absolute;
      bottom: 0;
      right: 0;
      z-index: 5;
      width: 40px;
      border: 1px solid #dfe3e3;
      box-sizing: unset;
      padding: 10px 20px;
      background-color: #dfe3e3;
      transition: all 0.2s;
    }

    .additional-info {
      display: flex;
      top: 10px;
      justify-content: space-between;
      padding: 10px 20px;
      height: 44px;
      position: relative;
      z-index: 2;

      >span {
        background-color: red;
        color: white;
        border-radius: 5px;
        font-size: 0.8rem;
        padding: 2px 7px;

      }
    }

    >img:not(.eye) {
      position: absolute;
      bottom: 0;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      max-height: 250px;

      @media (max-width:767px) {
        max-height: 100%;
      }
    }

  }

  &--info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    text-align: center;

    @media (max-width:767px) {
      padding: 10px;
    }

    h5 {
      text-transform: uppercase;
      font-weight: bold;
      font-size: 18px;
    }

    h6 {
      text-transform: uppercase;
      font-weight: normal;
      font-size: 14px;
    }

    .prices {
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 5px;
      align-items: center;

      .old-price {
        text-decoration: line-through;
        color: gainsboro;
        font-weight: 200;
        font-size: 14px;
      }

      span {
        text-decoration: none;
        color: black;
        font-weight: 300;
        font-size: 16px;
      }
    }
  }

}
</style>