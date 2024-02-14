<template>
   <div class="brend-card">

      <div class="brend-card__img-block">
         <div class="brend-card__img-block-blur" :class="[blurClass]"></div>
         <picture>
            <source
                    :src="cardData.webpImgSrc"
                    type="image/webp" />
            <img
                 class="brend-card__bg-img"
                 :src="cardData.imgSrc"
                 :alt="cardData.altText"
                 width="308"
                 height="405" />
         </picture>
      </div>

      <div class="brend-card__content-block" :class="colorContentClass">
         <h3 class="brend-card__title">{{ cardData.title }}</h3>
         <div class="brend-card__text">{{ cardData.subtitle }}</div>
      </div>

   </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps(['cardData']);

const blurClass = ref(`brend-card__img-block-blur_color_${props.cardData.blurColor}`);
const colorContentClass = ref(`brend-card__content-block_color_${props.cardData.blurColor}`);

</script>

<style src="./style.scss" lang="scss" scoped></style>