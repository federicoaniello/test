

<template>
    <div class="container-md">
        <h3 class="title--purchase text-center">Purchase Online</h3>
    </div>
    <div class="container-md">
        <div class="tabs mb-5">
            <div class="tabs--container">
                <router-link to="/" tag="button">New Arrivals</router-link>
                <router-link to="/bestseller" tag="'li'">
                    Best Seller
                </router-link>
                <router-link to="/mostview" tag="'li'">
                    Most View
                </router-link>
            </div>
            <select v-model="select_color" @change="onChange($event)" name="select_color" id="select_color">
                <option selected value="">Filter by color</option>
                <option v-for="(color, index) in colors" :key="index" :value="color">{{ color[0].toUpperCase() + color.substring(1) }}</option>
            </select>
        </div>
        <router-view :selected-color="select_color" @onColorsGathered="onColorsReceived($event)"></router-view>
    </div>

</template>

<script setup>
import { ref } from 'vue';

const select_color = ref(null);
const colors = ref([]);
const onChange = (event) => {
    select_color.value = event.target.value;
}

const onColorsReceived = (cl) => {
    colors.value = cl;
    select_color.value = '';
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
        flex-direction: column;
    }

    &--container {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }

    select {
        right: 0;
        border: 1px solid black;
        background-color: white;
        padding: 10px 20px;
        position: absolute;

        @media (max-width:767px) {
            position: static;
        }
    }

    .router-link-active {
        font-size: 24px;
        color: black;
        text-decoration: none;
    }

    >div {}
}
</style>