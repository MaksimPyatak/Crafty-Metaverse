<template>
   <div :class="{ 'button-wrapper': border }">
      <button class="button">
         <slot></slot>
      </button>
   </div>
</template>

<script setup>
defineProps(['border'])
</script>

<style lang="scss" scoped>
@import '../../assets/scss/config/breakpoints';

.button-wrapper {
   padding: 1px;
   border-radius: 6px;
   background: linear-gradient(
      109.56deg,
      rgba(255, 255, 255, 0.56) 3.9%,
      rgba(255, 255, 255, 0) 63.11%
   );
}

.button {
   width: 100%;
   height: 100%;
   border-radius: 6px;
   background: linear-gradient(98.73deg, #7a42f4 0%, #4642f4 100%);
   font-family: HeliosExtC;
   font-size: 18px;
   font-weight: 900;
   line-height: 144%;
   letter-spacing: 0em;

   @include respond-below(s) {
      font-size: 16px;
   }
}
</style>
