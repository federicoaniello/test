<template>
    <swiper :modules="[Navigation]"
     :slides-per-view="1"
      :space-between="0"
       :centered-slides="true"
        :autoplay="true"
        :loop="true"
        :breakpoints="{
            768: {
                slidesPerView: 1.2,
                centeredSlides:true
              },
        }"
         :navigation="{ enabled: true, }"
          @swiper="onSwiper" @slideChange="onSlideChange">
        <swiper-slide>
            <section>
                <div>
                    <img :src="'./public/carousel/carousel-01.jpg'" alt="">
                    <div class="carousel--wrapper">
                        <div><strong>Extending</strong> tables</div>
                        <div class="second-div">See all <span><img class="ml-3" :src="'/svg/right-arrow.svg'" alt=""></span></div>
                    </div>
                </div>
            </section>
        </swiper-slide>
        <swiper-slide><img :src="'./public/carousel/carousel-02.jpg'" alt=""></swiper-slide>
        <swiper-slide><img :src="'./public/carousel/carousel-03.jpg'" alt=""></swiper-slide>
    </swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from "swiper";
// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

const onSwiper = (swiper) => {
    console.log(swiper);
};
const onSlideChange = () => {
    console.log('slide change');
};
</script>

<style lang="scss" scoped>
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

        .second-div{
            font-size: 15px;
            font-weight: lighter;
            img{
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