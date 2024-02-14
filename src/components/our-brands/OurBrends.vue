<template>
   <section class="our-brend">
      <div class="our-brend__container">
         <!--<div class="our-brend__subtitle">No problem</div>
         <h2 class="our-brend__title">Our brands</h2>-->
         <SectionsTitle subtitle="No problem" title="Our brands" margin="24px" />
         <div class="our-brend__cards-block">
            <BrendCard v-for="cardData in cardsData" :key="cardData.id" :cardData="cardData" />
         </div>

      </div>

   </section>
</template>

<script setup>
import BrendCard from './components/brend-card/BrendCard.vue';
import SectionsTitle from '../SectionsTitle.vue';

import webpFirstCard from "../../assets/img/our-brands/first-card.webp";
import firstCard from "../../assets/img/our-brands/_first-card.png";
import webpSecondCard from "../../assets/img/our-brands/second-card.webp";
import secondCard from "../../assets/img/our-brands/second-card.png";
import webpLastCard from "../../assets/img/our-brands/last-card.webp";
import lasttCard from "../../assets/img/our-brands/last-card.png";

const cardsData = [
   {
      id: 1,
      blurColor: "turquoise",
      webpImgSrc: webpFirstCard,
      imgSrc: firstCard,
      altText: "Logo of brand",
      title: "Guardians of Lost Worlds (P2E Game)",
      subtitle: "Crafty Metaverse will soon launch Guardians of Lost Worlds, the first cross-chain P2E gaming experience. Our game will be available on multiple blockchains and then eventually on our side chain (SANKOFA). This will give users a seamless gameplay experience with little to no gas fees that allow users to focus on the game rather than worrying about losing their returns.",
   },
   {
      id: 2,
      blurColor: "purple",
      webpImgSrc: webpSecondCard,
      imgSrc: secondCard,
      altText: "Logo of brand",
      title: "Crafty Metaverse Ecosystem",
      subtitle: "Crafty Metaverse presents a Virtual Arts Studio where you can enhance your creativity by creating digital arts inspired by your game. A virtual marketplace to allow the users to trade and stake our $CMETA token and their NFTs. Negotiate with the digital avatars of other users to sell your NFTs at the best prices and generate passive income while playing",
   },
   {
      id: 3,
      blurColor: "pink",
      webpImgSrc: webpLastCard,
      imgSrc: lasttCard,
      altText: "Logo of brand",
      title: "SANKOFA",
      subtitle: "SANKOFA($KOFA) is an Ethereum sidechain that will be created with Guardians of Lost Worlds community in mind. LYQUID, the team behind Guardians of Lost Worlds, will build a reliable, fast and cheap network that could cater to the demands of the game.",
   },
]

</script>

<style src="./style.scss" lang="scss" scoped></style>