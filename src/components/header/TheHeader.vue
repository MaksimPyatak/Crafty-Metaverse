<template>
   <header class="header">
      <div class="header__container">
         <a class="header__logo-box" href="#">
            <HeaderLogo />
         </a>
         <nav class="header__nav nav" :class="{ header__nav_show: mobileMenu }">
            <ul class="nav__list">
               <li class="nav__list-item" v-for="link in links" :key="link.id">
                  <a class="nav__list-link" :href="link.link">{{ link.text }}</a>
               </li>
            </ul>
            <div class="nav__bg">
               <picture>
                  <source src="../../assets/img/header/burger-menu-bg.webp" type="image/webp">
                  <img class="nav__bg-img" src="../../assets/img/header/burger-menu-bg.png">
               </picture>
            </div>
         </nav>
         <div class="header__burger-menu" :class="{ 'header__burger-menu_active': mobileMenu }" @click=showMenu>
            <span></span>
         </div>
      </div>
   </header>
</template>

<script setup>
import { ref } from "vue";

import HeaderLogo from "../icons/HeaderLogo.vue";

import { useBodyLock } from "../../composables/body-lock.js";

const links = [
   { id: 1, text: "Home", link: "#" },
   { id: 2, text: "About Us", link: "#" },
   { id: 3, text: "White paper", link: "#" },
   { id: 4, text: "Tokenomics", link: "#" },
   { id: 5, text: "Road Map", link: "#" },
   { id: 6, text: "How to buy", link: "#" },
   { id: 7, text: "Buy", link: "#" },
]

const mobileMenu = ref(false)

function showMenu() {
   mobileMenu.value = !mobileMenu.value;
   useBodyLock(mobileMenu.value);
}
</script>

<style src="./style.scss" lang="scss" scoped></style>