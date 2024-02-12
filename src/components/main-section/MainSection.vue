<template>
   <section class="main-section">
      <div class="main-section__bg-block">
         <picture>
            <source src="../../assets/img/main-section/bg.webp" type="image/webp">
            <img class="main-section__bg-img" src="../../assets/img/main-section/bg.png" alt="Bacground image" width="1920" height="1024">
         </picture>
      </div>
      <div class="main-section__blures-block">
      </div>
      <!--<div class="main-section__content">-->
      <div class="main-section__container">
         <div class="main-section__liner-img-box">
            <picture>
               <source src="../../assets/img/main-section/liners.webp" type="image/webp">
               <img class="main-section__liner-img" src="../../assets/img/main-section/liners.png" alt="Blure" width="1348" height="476">
            </picture>
            <div class="main-section__content">
               <div class="main-section__title-box">
                  <div class="main-section__subtitle">Crafty Metaverse</div>
                  <h1 class="main-section__title">A SHARED, IMMERSIVE MULTI-BLOCKCHAIN BASED <span class="main-section__title-star">
                        <svg viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M23 0L26.2527 19.7473L46 23L26.2527 26.2527L23 46L19.7473 26.2527L0 23L19.7473 19.7473L23 0Z" fill="white" />
                        </svg>
                     </span> METAVERSE ECOSYSTEM</h1>
               </div>
               <TheButton class="main-section__button" :border="true">Invest Now</TheButton>
            </div>
         </div>
      </div>

      <!--</div>-->


   </section>
</template>

<script setup>
import TheButton from "../ui/TheButton.vue";

</script>

<style src="./style.scss" lang="scss" scoped></style>