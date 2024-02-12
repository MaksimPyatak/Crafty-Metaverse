<template>
   <section class="about-us">
      <div class="about-us__bg-block">
         <picture>
            <source src="../../assets/img/about-us/bg.webp" type="image/webp">
            <img class="about-us__bg-img" src="../../assets/img/about-us/bg.png" alt="Blure" width="1920" height="1024">
         </picture>
      </div>
      <div class="about-us__container">
         <div class="about-us__content">
            <div class="about-us__subtitle">Profile</div>
            <h2 class="about-us__title">About Us</h2>
            <swiper
                    :scrollbar="{
                       hide: false,
                    }"
                    :modules="modules"
                    class="mySwiper">
               <swiper-slide v-for="slide in slides" :key="slide.id">{{ slide.text }}</swiper-slide>
            </swiper>
         </div>
      </div>
   </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';

import { Scrollbar } from 'swiper/modules';

import 'swiper/css';

import 'swiper/css/scrollbar';
const modules = [Scrollbar]

const slides = [
   { id: "1", text: "CYou are using the old write up. We are using this now.Crafty Metaverse is a multi-blockchain based virtual reality metaverse platform to develop the most immersive, imaginative, and addictive gaming experiences. We are providing our gaming community with the near-real-world experience while using their digital avatars. Our ecosystem will be a futuristic, decentralized, and persistent 3D virtual metaverse gaming platform especially for crypto enthusiasts, gamers, artists, and metaverse fans." },
   { id: "2", text: "Crafty Metaverse will soon launch Guardians of Lost Worlds, the first cross-chain P2E gaming experience. Our game will be available on multiple blockchains and then eventually on our side chain (SANKOFA). This will give users a seamless gameplay experience with little to no gas fees that allow users to focus on the game rather than worrying about losing their returns." }
]
</script>

<style src="./style.scss" lang="scss" scoped></style>