<template>
  <!-- <div>
<p> {{ item.name }}</p>
<p> {{ item.description }} </p>
<p>{{ item.price }}</p>
<p> {{ item.link }}
</p>
<p>{{ item.color }}</p>
<img :src="item['image-thumb']" alt="">

  </div> -->
  <div class="product">
    <div class="product--img">
      <div :class="{ 'additional-info': true, 'justify-content-end': !item.discount }">
        <span v-if="item?.discount">{{ item.discount }}</span>
        <img src="/svg/heart.svg" alt="">
      </div>
    </div>
    <div class="product--info">
      <h5>{{ item.name }}</h5>
      <h6>{{ item.description }}</h6>
      <div class="prices">
       <span class="old-price" v-if="item?.['old-price']">{{ item['old-price'] }}</span>
       <span>{{ item.price }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  item: Object,
  required: true,
  validator: () => item !== null
})
</script>

<style lang="scss" scoped>
.product {
  position: relative;
  min-height: 400px;

  &--img {
    background-color: rgb(190, 190, 190);
    height: 300px;

    .additional-info {
      display: flex;
      top: 0;
      justify-content: space-between;
      padding: 10px;
      height: 45px;

      >span {
        background-color: red;
        color: white;
        border-radius: 5px;
        font-size: 0.8rem;
        padding: 2px 7px;

      }
    }
  }

  &--info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    h5{
      text-transform: uppercase;
      font-weight: bold;
      font-size: 18px;
    }
    h6{
      text-transform: uppercase;
      font-weight: normal;
      font-size: 14px;
      text-align: center;
    }
    .prices{
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 5px;
      .old-price{
        text-decoration: line-through;
        color: gainsboro;
        font-weight: 200;
        font-size: 12px;
      }
      span{
        text-decoration: none;
        color: black;
        font-weight: 300;
        font-size: 13px;
      }
    }
  }
}
</style>