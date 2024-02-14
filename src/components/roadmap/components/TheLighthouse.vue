<template>
   <div class="lighthohuse" :class="[classAn]">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
   </div>
</template>

<script setup>
defineProps(['classAn'])
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/config/breakpoints';

.lighthohuse {
   position: relative;
   width: 134px;
   height: 134px;

   @include respond-below(sm) {
      width: 93px;
      height: 93px;
   }

   div {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border: 1px solid (243, 82, 179);
      box-shadow: inset 0 0 30px rgb(240, 93, 181);
      transform: scale(0);
      animation-duration: 4s;
      animation-iteration-count: infinite;

      &:nth-child(2) {
         transform: scale(1);
         animation-delay: 1s;
      }

      &:nth-child(3) {
         transform: scale(0.8);
         animation-delay: 2s;
      }

      &:nth-child(4) {
         transform: scale(0.7);
         animation-delay: 2s;
      }

      &:nth-child(5) {
         transform: scale(0.6);
         animation-delay: 4s;
      }

      &:nth-child(6) {
         transform: scale(0.5);
         animation-delay: 5s;
      }

      &:last-child {
         width: 70px;
         height: 70px;
         transform: translate(45%, 45%);
         animation-name: none;

         @include respond-below(sm) {
            width: 45px;
            height: 45px;
            transform: translate(53%, 53%);
         }
      }
   }
}

.purple {
   &::after {
      content: "";
      width: 158.18px;
      height: 166.34px;
      transform: rotate(-150deg);
      background: rgba(195, 68, 255, 1);
      filter: blur(140px);
      display: block;
   }

   div {
      animation-name: purple;

      &:last-child {
         background: #ecdae9;
         border-color: rgb(243, 82, 179);
         box-shadow: inset 0 0 30px rgb(240, 93, 181);
      }
   }
}

@keyframes purple {
   0% {
      transform: scale(0);
      border-color: rgb(243, 82, 179);
      box-shadow: inset 0 0 30px rgb(240, 93, 181);
      background: #ecdae9;
   }

   30% {
      border-color: rgb(243, 82, 179);
      box-shadow: inset 0 0 30px rgb(240, 93, 181);
      background: #ecdae9;
   }

   95% {
      transform: scale(1);
      border-color: rgba(103, 66, 235, 0.421);
      box-shadow: inset 0 0 30px rgba(109, 73, 239, 0.546);
      background: rgba(191, 105, 225, 0);
   }

   100% {
      transform: scale(1);
      border-color: rgba(103, 66, 235, 0);
      box-shadow: inset 0 0 30px rgba(109, 73, 239, 0);
      background: rgba(191, 105, 225, 0);
   }
}

.pink {
   &::after {
      content: "";
      width: 204px;
      height: 215px;
      transform: rotate(-150deg);
      background: rgba(255, 68, 236, 0.4);
      filter: blur(140px);
      display: block;
   }

   div {
      animation-name: pink;

      &:last-child {
         background: #ecdae9;
         border-color: rgb(243, 82, 179);
         box-shadow: inset 0 0 30px rgb(240, 93, 181);
      }
   }
}

@keyframes pink {
   0% {
      transform: scale(0);
      border-color: rgb(243, 82, 179);
      box-shadow: inset 0 0 30px rgb(240, 93, 181);
      background: #ecdae9;
   }

   30% {
      border-color: rgb(243, 82, 179);
      box-shadow: inset 0 0 30px rgb(240, 93, 181);
      background: #ecdae9;
   }

   95% {
      transform: scale(1);
      border-color: rgba(235, 66, 204, 0.421);
      box-shadow: inset 0 0 30px rgba(239, 73, 197, 0.546);
      background: rgba(225, 105, 207, 0);
   }

   100% {
      transform: scale(1);
      border-color: rgba(235, 66, 204, 0);
      box-shadow: inset 0 0 30px rgba(239, 73, 197, 0);
      background: rgba(225, 105, 207, 0);
   }
}

.green {
   &::after {
      content: "";
      width: 217px;
      height: 288px;
      transform: rotate(-150deg);
      background: rgba(68, 255, 199, 0.4);
      display: block;
      filter: blur(90px);
      border-radius: 50%;
   }

   div {
      animation-name: green;

      &:last-child {
         background: #ecdae9;
         border-color: rgb(114 243 82);
         box-shadow: inset 0 0 30px rgb(93 240 121 / 54%);
      }
   }
}

@keyframes green {
   0% {
      transform: scale(0);
      border-color: rgb(91 243 82);
      box-shadow: inset 0 0 30px rgb(93 240 99);
      background: #daecde;
   }

   30% {
      border-color: rgb(82 243 121);
      box-shadow: inset 0 0 26px rgb(103 240 93);
      background: #daecda;
   }

   95% {
      transform: scale(1);
      border-color: rgb(66 235 94 / 42%);
      box-shadow: inset 0 0 27px rgb(73 239 102 / 25%);
      background: rgb(105 225 114 / 1%);
   }

   100% {
      transform: scale(1);
      border-color: rgba(66, 235, 94, 0);
      box-shadow: inset 0 0 27px rgba(73, 239, 101, 0);
      background: rgba(105, 225, 115, 0);
   }
}

.blue {
   &::after {
      content: "";
      position: relative;
      bottom: 100%;
      right: 50%;
      width: 217px;
      height: 288px;
      transform: rotate(-230deg);
      background: rgba(68, 255, 244, 0.4);
      display: block;
      filter: blur(90px);
      border-radius: 50%;
   }

   div {
      animation-name: blue;

      &:last-child {
         background: #ecdae9;
         border-color: rgb(19 198 243);
         box-shadow: inset 0 0 30px rgb(0 133 255);
      }
   }
}

@keyframes blue {
   0% {
      transform: scale(0);
      border-color: rgb(84 82 243);
      box-shadow: inset 0 0 30px rgb(93 110 240);
      background: #ecdae9;
   }

   30% {
      border-color: rgb(60 50 244);
      box-shadow: inset 0 0 30px rgb(5 40 237);
      background: #ecdae9;
   }

   95% {
      transform: scale(1);
      border-color: rgb(119 194 234 / 42%);
      box-shadow: inset 0 0 30px rgb(134 205 245 / 55%);
      background: rgba(191, 105, 225, 0);
   }

   100% {
      transform: scale(1);
      border-color: rgba(119, 194, 234, 0);
      box-shadow: inset 0 0 30px rgba(134, 204, 245, 0);
      background: rgba(191, 105, 225, 0);
   }
}
</style>
