<template>
   <div class="title-block">
      <div class="title-block__subtitle" :style="{ marginBottom: margin }">
         {{ subtitle }}
      </div>
      <h2 class="title-block__title">
         {{ title }}
      </h2>
   </div>
</template>

<script setup>
defineProps(['subtitle', 'title', 'margin'])
</script>

<style lang="scss" scoped>
@import '../assets/scss/config/breakpoints.scss';

.title-block {
   margin: 0 auto;

   &__subtitle {
      font-size: 20px;
      font-weight: 400;
      line-height: 140%;
      letter-spacing: 0em;
      text-align: center;
      text-transform: uppercase;

      @include respond-below(s) {
         margin: 0px 0px 20px 0px;
         font-size: 16px;
         line-height: 137.5%;
      }
   }

   &__title {
      font-family: HeliosExtC;
      font-size: clamp(28px, 5.2vw, 45px);
      font-weight: 700;
      line-height: 109%;
      letter-spacing: 0em;
      text-align: center;
      text-transform: uppercase;
   }
}
</style>