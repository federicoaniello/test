<template>
    <swiper
        :modules="[Navigation]"
        :slides-per-view="1"
        :allow-touch-move="true"
        :prevent-interaction-on-transition="false"
        :navigation="false"
        :space-between="0"
        :centered-slides="true"
        :loop="true"
        :breakpoints="{
            768: {
                preventInteractionOnTransition: true,
                allowTouchMove: false,
                slidesPerView: 1.2,
                navigation: {
                    enabled: true,
                    nextEl: '.image-swiper-button-next',
                    prevEl: '.image-swiper-button-prev',
                },
            },
        }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
    >
        <swiper-slide v-for="(slide, index) in swiper_data" :key="index">
            <main class="overlay-buttons">
                <button class="image-swiper-button-prev"></button>
                <button class="image-swiper-button-next"></button>
            </main>
            <div class="img-wrapper">
                <img :src="slide.img" alt="" />
                <div v-if="slide.titles" class="carousel--wrapper">
                    <div v-html="slide.titles.first"></div>
                    <div class="second-div">
                        {{ slide.titles.second
                        }}<span
                            ><img
                                class="ml-3"
                                :src="'/svg/right-arrow.svg'"
                                alt=""
                        /></span>
                    </div>
                </div>
            </div>
        </swiper-slide>
    </swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper'
import { swiper_data } from './data'
// Import Swiper styles
import 'swiper/scss'

const onSwiper = (swiper) => {}
const onSlideChange = () => {
    console.log('slide change')
}
</script>

<style lang="scss" scoped>
.swiper-slide {
    @media (max-width: 767px) {
        width: 100vw;

        > img {
            overflow: hidden;
        }
    }

    &-active {
        .overlay-buttons {
            display: flex;

            @media (max-width: 767px) {
                display: none;
            }
        }
    }
}

.img-wrapper {
    @media (max-width: 767px) {
        overflow: hidden;
        width: 100vw;
    }
}
.overlay-buttons {
    display: none;
    opacity: 0;
    transition: all 0.3s;
    left: 0;
    right: 0;
    z-index: 5;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;

    &:hover {
        opacity: 1;
    }

    > button {
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
    @media (min-width: 768px) {
        width: 100%;
    }
}

.carousel--wrapper {
    position: absolute;
    color: white;
    font-size: 54px;
    text-align: center;
    font-weight: lighter;
    top: 50%;
    transform: translate(-50%, -50%);
    left: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 767px) {
        font-size: 34px;
    }
    .second-div {
        font-size: 18px;
        font-weight: lighter;

        img {
            width: 12px;
        }

        span {
            margin-left: 10px;
        }
    }
}
</style>
