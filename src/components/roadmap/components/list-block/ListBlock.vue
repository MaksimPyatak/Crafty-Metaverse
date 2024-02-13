<template>
   <div class="block-list">
      <TheLighthouse :class="[blockListClasses[1], content.lighthouse]" />
      <div class="block-list__content-box" :class="blockListClasses[0]">
         <div class="block-list__subtitle">{{ content.id }}</div>
         <h3 class="block-list__title">{{ content.title }}</h3>

         <ul class="block-list__list">
            <li
                v-for="item in content.list"
                :key="item.id"
                class="block-list__list-item">
               <div>
                  <ListItemMarker class="block-list__list-item-marker" />
                  <div class="block-list__list-item">{{ item.li }}</div>
               </div>

               <ul v-if="item.nestedList" class="block-list__nested-list">
                  <li v-for="item in item.nestedList" :key="item.id" class="block-list__item-nested-list">
                     <span>·</span>{{ item.nli }}
                  </li>
               </ul>

            </li>
         </ul>

         <transition name="fade">
            <ul v-show="isMore" class="block-list__list">
               <li
                   v-for="item in content.continuedList"
                   :key="item.id"
                   class="block-list__list-item">
                  <div>
                     <ListItemMarker class="block-list__list-item-marker" />{{ item.li }}
                  </div>

                  <ul v-if="item.nestedList" class="block-list__nested-list">
                     <li v-for="item in item.nestedList" :key="item.id" class="block-list__item-nested-list">
                        <span>·</span>{{ item.nli }}
                     </li>
                  </ul>

               </li>
            </ul>
         </transition>

         <div v-if="content.continuedList" @click="showMore" class="block-list__more-buttom">
            More
            <DownArrow class="block-list__more-buttom-arrow" />
         </div>

      </div>
   </div>
</template>

<script setup>
import { ref, computed } from 'vue'

import TheLighthouse from '../TheLighthouse.vue'
import ListItemMarker from '../../../icons/ListItemMarcer.vue'
import DownArrow from '../../../icons/DownArrow.vue'

const props = defineProps(['content', 'index'])

const isMore = ref(false);
function showMore() {
   isMore.value = !isMore.value
}
//const contentClass=ref(null);

const blockListClasses = computed(() =>
   (props.index + 1) % 2
      ? [
         'block-list__content-box_position_first',
         'block-list__lighthuse_position_second',
      ]
      : ['', ''],
)
</script>

<style src="./style.scss" lang="scss" scoped></style>
