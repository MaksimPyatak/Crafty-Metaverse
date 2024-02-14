<template>
   <div class="our-resources">
      <div class="our-resources__container">
         <SectionsTitle title="Our resources" subtitle="What we do" margin="22px" />

         <div class="our-resources__content-block">

            <div class="our-resources__bg">
               <ResourcesLines />
            </div>

            <div class="our-resources__about-token">
               <div class="our-resources__blur"></div>
               <div class="our-resources__logo-block">
                  <picture>
                     <source
                             src="../../assets/img/our-resources/resources-logo.webp"
                             type="image/webp" />
                     <img
                          class="main-section__bg-img"
                          src="../../assets/img/our-resources/resources-logo.png"
                          alt="Logotype"
                          width="60"
                          height="60" />
                  </picture>
               </div>
               <h3 class="our-resources__abot-token-title">About toKen $Cmeta</h3>
               <div class="our-resources__text">CMETA, a BSC-based cryptocurrency token will be the sole governance token on
                  the platform. This means that every single transaction in the Crafty Metaverse space will be conducted with the $CMETA token</div>
               <TheButton :border="true" />
            </div>

            <div class="our-resources__logo-block">
               <div class="our-resources__logo">
                  <picture>
                     <source
                             src="../../assets/img/our-resources/logo.webp"
                             type="image/webp" />
                     <img
                          class="main-section__bg-img"
                          src="../../assets/img/our-resources/_logo.png"
                          alt="Logotype"
                          width="555"
                          height="525" />
                  </picture>
               </div>

               <ul class="our-resources__data-list">
                  <li class="our-resources__data-list-item data-list-item">
                     <div class="data-list-item__img">
                        <TLCircle />
                     </div>
                     <div class="data-list-item__text">
                        <p>Circulating Supply:</p>
                        <p>1,000,000,000</p>
                     </div>
                  </li>
                  <li class="our-resources__data-list-item data-list-item">
                     <div class="data-list-item__img">
                        <TRCircle />
                     </div>
                     <div class="data-list-item__text">
                        <p>Maximum Supply:</p>
                        <p>1,000,000,000</p>
                     </div>
                  </li>
                  <li class="our-resources__data-list-item data-list-item">
                     <div class="data-list-item__img">
                        <BRCircle />
                     </div>
                     <div class="data-list-item__text">
                        <p>Tax: 10%</p>
                        <p>Marketing : 5%</p>
                        <p>Development : 5%</p>
                     </div>
                  </li>
                  <li class="our-resources__data-list-item data-list-item">
                     <div class="data-list-item__img">
                        <BLCircle />
                     </div>
                     <div class="data-list-item__text">
                        <p>Token symbol: </p>
                        <p>$CMETA</p>
                     </div>
                  </li>

               </ul>

            </div>

         </div>

      </div>
   </div>
</template>

<script setup>
import SectionsTitle from '../SectionsTitle.vue';
import ResourcesLines from '../icons/ResourcesLines.vue';
import TheButton from '../ui/TheButton.vue';
import TLCircle from '../icons/TLCircle.vue';
import BRCircle from '../icons/BRCircle.vue';
import BLCircle from '../icons/BLCircle.vue';
import TRCircle from '../icons/TRCircle.vue';

</script>

<style src="./style.scss" lang="scss" scoped></style>