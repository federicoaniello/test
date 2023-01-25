

<template>
    <div class="container-md">
        <h3 class="title--purchase text-center">Purchase Online</h3>
    </div>
    <div class="container-md">
        <div class="tabs mb-5">
            <router-link to="/" tag="button">New Arrivals</router-link>
            <router-link to="/bestseller" tag="'li'">
                Best Seller
            </router-link>
            <router-link to="/mostview" tag="'li'">
                Most View
            </router-link>
            <select @change="onChange($event)" name="select_color" id="select_color">
                <option value="red">Red</option>
                <option value="white">White</option>
                <option value="blue">Blue</option>
                <option value="grey">Grey</option>
                <option value="purple">Purple</option>
                <option value="brown">Brown</option>
                <option value="orange">Orange</option>
                <option value="black">Black</option>
                <option value="yellow">Yellow</option>
                <option value="greeb">Green</option>
                <option selected value="">Filter by color</option>
            </select>
        </div>
        <router-view :selected-color="select_color"></router-view>
    </div>

</template>

<script setup>
import { ref, provide } from 'vue';

const select_color = ref(null);

const onChange = (event) => {
    select_color.value = event.target.value;
}
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

.tabs {
    display: flex;
    gap: 5px;
    justify-content: center;
    position: relative;
    @media (max-width:767px) {
        flex-wrap: wrap;
    }
    select {
        right: 0;
        border: 1px solid black;
        background-color: white;
        padding: 10px 20px;
        position: absolute;
    }

    .router-link-active {
        font-size: 24px;
        color: black;
        text-decoration: none;
    }

    >div {}
}
</style>