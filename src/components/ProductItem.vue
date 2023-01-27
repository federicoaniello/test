
<template>
  <div class="product" @click="openModal(item)">
    <div class="product--img">
      <div :class="{ 'additional-info': true, 'justify-content-end': !item?.discount }">
        <span v-if="item?.discount">{{ item?.discount }}</span>
        <img src="/svg/heart.svg" alt="">
      </div>
      <img :src="item?.['image-thumb']" alt="">
<svg class="eye" fill="white" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 129 129">
  <g>
    <g>
      <path d="m64.7,36.3c-28.4,0-55.9,27.1-57,28.3-0.8,0.8-1.2,1.8-1.2,2.9s0.4,2.1 1.2,2.9c1.2,1.2 28.6,28.3 57,28.3s55.9-27.1 57-28.3c0.8-0.8 1.2-1.8 1.2-2.9s-0.4-2.1-1.2-2.9c-1.1-1.2-28.5-28.3-57-28.3zm0,54.1c-19.9,0-40.4-16.2-48.1-23 7.7-6.8 28.2-23 48.1-23s40.4,16.2 48.1,23c-7.7,6.8-28.2,23-48.1,23z"/>
      <path d="m50,67.4c0,8.1 6.6,14.8 14.8,14.8s14.8-6.6 14.8-14.8-6.6-14.8-14.8-14.8-14.8,6.7-14.8,14.8zm21.3,0c0,3.6-2.9,6.6-6.6,6.6-3.6,0-6.6-2.9-6.6-6.6s2.9-6.6 6.6-6.6c3.6,0.1 6.6,3 6.6,6.6z"/>
    </g>
  </g>
</svg>

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
import useModalStore from '../store/useModalStore';

const modal = useModalStore();
const {sendModalData} = modal;
const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})
const emits = defineEmits(['onProductChosen'])

const openModal = (product) => {
  console.log('selected Item: ', product);
  sendModalData(product)
  emits('onProductChosen',product);
}
</script>

<style lang="scss" scoped>
@use "src/styles/variables" as vars;

.product {
  position: relative;
  min-height: 320px;

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
    background-color: rgb(232, 232, 232);
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
      width: 26px;
      border: 1px solid #cec8c8;
      box-sizing: unset;
      padding: 10px 20px;
      background-color: #cec8c8;
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
        background-color: vars.$red_discounts;
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
      max-height: calc(100% - 60px);
      max-width: 100%;
      object-fit: contain;
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