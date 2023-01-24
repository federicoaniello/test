

<template>
    <div>
        <h3 class="title--purchase text-center">Purchase Online</h3>
    </div>
    <div>
    <div class="tabs">
      <router-link to="/">New Arrivals</router-link>  
      <router-link to="/bestseller">Best Seller</router-link>  
      <router-link to="/mostview">Most View</router-link>  
      <router-view></router-view>
    </div>
    </div>

</template>

<script setup>
</script>

<style lang="scss" scoped>
.title--purchase {
    font-size: 28px;

    &::after {
        display: block;
        content: "";
        width: 30px;
        height: 5px;
        background-color: yellow;
        margin: 20px auto 0;

        @media (max-width:767px) {
            width: 20px;
            margin: 0 auto;

        }
    }
}
</style>