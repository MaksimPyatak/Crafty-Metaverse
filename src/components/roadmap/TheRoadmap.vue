<template>
   <section class="roadmap">

      <div class="roadmap__bg">
         <StarTrack />
      </div>

      <div class="roadmap__container">
         <div class="roadmap__wrapper-content">
            <div class="roadmap__subtitle">Our Way</div>
            <h2 class="roadmap__title">Roadmap</h2>

            <ul class="roadmap__blocks-list">
               <ListBlock
                          v-for="(blockList, index) in blocksList"
                          :content="blockList"
                          :index="index"
                          :key="blockList.id" />
            </ul>

         </div>
      </div>
   </section>
</template>

<script setup>
import ListBlock from './components/list-block/ListBlock.vue'
import StarTrack from '../icons/StarTrack.vue'

const blocksList = [
   {},
   {
      id: 'Q1',
      title: 'Governance Token Launch on BSC ($CMETA)',
      lighthouse: 'purple',
      list: [
         {
            id: 1,
            li: 'CMETA Staking Release',
         },
         {
            id: 2,
            li: 'SANKOFA Sidechain DEV Starts ($KOFA)',
            nestedList: [
               { id: 1, nli: 'CEX Listings and Marketing' },
               { id: 2, nli: 'Governance Token Launch on SOL ($CMETA)' },
            ],
         },
         {
            id: 3,
            li: 'Bridge BSC, ETH Smart Contracts to Solana Contract',
            nestedList: [{ id: 1, nli: 'Social Media Marketing Pushü' }],
         },
         {
            id: 4,
            li: '10K Telegram Members',
         },
         {
            id: 5,
            li: '10K Twitter Followers',
         },
      ],
      continuedList: [
         {
            id: 1,
            li: 'CMETA Staking Release',
         },
         {
            id: 2,
            li: 'SANKOFA Sidechain DEV Starts ($KOFA)',
            nestedList: [
               { id: 1, nli: 'CEX Listings and Marketing' },
               { id: 2, nli: 'Governance Token Launch on SOL ($CMETA)' },
            ],
         }
      ],
   },
]
</script>

<style src="./style.scss" lang="scss" scoped></style>
