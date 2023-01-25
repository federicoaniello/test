<template>
    <swiper :modules="[Navigation]" :slides-per-view="1" :space-between="0" :centered-slides="false" :autoplay="true"
        :loop="true" :breakpoints="{
            768: {
                slidesPerView: 1.2,
                centeredSlides: true,
                navigation: {
                    enabled: true,
                    nextEl: '.image-swiper-button-next',
                    prevEl: '.image-swiper-button-prev',
                }
            },
        }" @swiper="onSwiper" @slideChange="onSlideChange">
        <swiper-slide>
            <main class="overlay-buttons">
                <button class="image-swiper-button-prev"></button>
                <button class="image-swiper-button-next"></button>
            </main>
            <section>
                <div>
                    <img :src="'./public/carousel/carousel-01.jpg'" alt="">
                    <div class="carousel--wrapper">
                        <div><strong>Extending</strong> tables</div>
                        <div class="second-div">See all <span><img class="ml-3" :src="'/svg/right-arrow.svg'"
                                    alt=""></span></div>
                    </div>
                </div>
            </section>

        </swiper-slide>
        <swiper-slide>
            <main class="overlay-buttons">
                <button class="image-swiper-button-prev"></button>
                <button class="image-swiper-button-next"></button>
            </main>
            <img :src="'./public/carousel/carousel-02.jpg'" alt="">
        </swiper-slide>
        <swiper-slide>
            <main class="overlay-buttons">
                <button class="image-swiper-button-prev"></button>
                <button class="image-swiper-button-next"></button>
            </main>
            <img :src="'./public/carousel/carousel-03.jpg'" alt="">
        </swiper-slide>
    </swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from "swiper";
// Import Swiper styles
import 'swiper/scss';

const onSwiper = (swiper) => {
    console.log(swiper);
};
const onSlideChange = () => {
    console.log('slide change');
};
</script>

<style lang="scss" scoped>

.swiper-slide{
    @media (max-width:767px) {
        width: 100vw;
        >img{
            overflow: hidden;
        }
    }
}
.overlay-buttons {
    opacity: 0;
    transition: all 0.3s;
    left: 0;
    right: 0;
    z-index: 5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    @media (max-width:767px) {
        display: none;
    }

    &:hover {
        opacity: 1;
    }

    >button {
        width: 70px;
        height: 100px;
        border: none;
        padding: 20px;
        background-color: #00000045;

        &.image-swiper-button-next,
        &.image-swiper-button-prev {
            &::after {
                display: flex;
                justify-content: center;
                align-items: center;
                content: url('/svg/right-arrow-transparent.svg');

            }
        }

        &.image-swiper-button-prev {
            transform: rotate(-180deg);
        }
    }
}



img {
    @media (min-width:768px) {
        width: 100%;
    }
}

section {
    position: relative;

    >div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .second-div {
            font-size: 15px;
            font-weight: lighter;

            img {
                width: 12px;
            }
        }


        .carousel--wrapper {
            position: absolute;
            color: white;
            font-size: 36px;
            text-align: center;
            font-weight: lighter;

            @media (max-width:767px) {
                font-size: 34px;
            }
        }

    }
}
</style>