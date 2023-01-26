

<template>
    <div class="container-md">
        <h3 class="title--purchase text-center">Purchase Online</h3>
    </div>
    <div class="container-md">
        <div class="tabs mb-5">
            <div class="tabs--container">
                <router-link to="/" tag="button">New Arrivals</router-link>
                <router-link to="/bestseller">
                    Best Seller
                </router-link>
                <router-link to="/mostview">
                    Most View
                </router-link>
            </div>
            <select v-model="select_color" @change="onChange($event)">
                <option selected value="">Filter by color</option>
                <option v-for="(color, index) in colors" :key="index" :value="color">{{
                    toCapitalized(color)
                }}</option>
            </select>
        </div>
        <router-view :selected-color="select_color" @onColorsGathered="onColorsReceived($event)"></router-view>
    </div>

</template>

<script setup>
import { ref } from 'vue';
import useDownload from '../hooks/useDownload';

const select_color = ref(null);
const colors = ref([]);
const onChange = (event) => {
    select_color.value = event.target.value;
}
const { toCapitalized } = useDownload();


const onColorsReceived = (cl) => {
    colors.value = cl;
    select_color.value = '';
}
</script>

<style lang="scss" scoped>
.title--purchase {
    font-size: 28px;
    font-weight: lighter;
    margin-bottom: 20px;

    &::after {
        display: block;
        content: "";
        width: 60px;
        height: 5px;
        background-color: #eed75d;
        margin: 20px auto 0;

        @media (max-width:767px) {
            width: 25px;
            margin: 8px auto;

        }
    }
}

.tabs {
    display: flex;
    gap: 5px;
    justify-content: center;
    position: relative;
    align-items: center;
    
    @media (max-width:767px) {
        flex-direction: column;
        align-items: unset;
    }   

    &--container {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;


        a {
            text-decoration: none;
color: black;
font-size: 18px;
opacity: 0.6;
font-weight: lighter;
        }
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
        text-decoration: none;
        color: black;
        font-size: 18px;
        opacity: 1;
        font-weight: bold;
    }

    >div {}
}
</style>