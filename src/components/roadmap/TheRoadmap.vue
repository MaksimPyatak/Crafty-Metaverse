<template>
   <section class="roadmap">

      <div class="roadmap__bg">
         <StarTrack class="roadmap__bg-img" />
         <div class="roadmap__left-blur"></div>
         <div class="roadmap__right-blur"></div>
      </div>

      <div class="roadmap__container">

         <!--<div class="roadmap__wrapper-content">-->
         <div class="roadmap__subtitle">Our Way</div>
         <h2 class="roadmap__title">Roadmap</h2>

         <ul class="roadmap__blocks-list">
            <ListBlock
                       class="roadmap__blocks-list-item"
                       v-for="(blockList, index) in blocksList"
                       :content="blockList"
                       :index="index"
                       :key="blockList.id" />
         </ul>

         <!--</div>-->

      </div>
   </section>
</template>

<script setup>
import ListBlock from './components/list-block/ListBlock.vue'
import StarTrack from '../icons/StarTrack.vue'

const blocksList = [
   {
      id: 'Q1',
      title: 'Governance Token Launch on BSC ($CMETA)',
      lighthouse: 'purple',
      list: [
         {
            id: 1,
            li: 'Launch Date: Jan 8th, 2022 Contract Audit',
         },
         {
            id: 2,
            li: 'TechAudit Completed on Jan 21st, 20225k Telegram members',
         },
         {
            id: 3,
            li: '32k Telegram Members.  CG and CMC listings',
         },
         {
            id: 5,
            li: 'Application Sent CEX Listings',
         },
         {
            id: 6,
            li: 'CoinsBit Listing – Feb 8th . Website Revamp',
         },
         {
            id: 7,
            li: 'Contracted UI/UX Developers',
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
   {
      id: 'Q2',
      title: 'CMETA Ecosystem Begins',
      lighthouse: 'pink',
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
   {
      id: 'Q3',
      title: 'Guardians of Lost Worlds Released to Public (PC)',
      lighthouse: 'green',
      list: [
         {
            id: 1,
            li: 'Implement In-Game Staking ($KOFA Rewards)',
         },
         {
            id: 2,
            li: 'In-Game NFT Released',
            nestedList: [
               { id: 1, nli: 'SANKOFA Sidechain on Test Net' },
            ],
         },
         {
            id: 3,
            li: 'Fiat On-Ramp Added',
            nestedList: [{ id: 1, nli: 'Gameplay Battle Mode Introduced' },
            { id: 2, nli: 'Marketplace Introduced' },
            { id: 3, nli: 'CEX Listings and Marketing' },],
         },
      ],
   },
   {
      id: 'Q4',
      title: 'SANKOFA Mainnet Launch',
      lighthouse: 'blue',
      list: [
         {
            id: 1,
            li: ' Migrate Guardians of Lost Worlds to SANKOFA Sidechain',
            nestedList: [
               { id: 1, nli: 'CEX Listings & Marketing ' },
               { id: 2, nli: 'Virtual Arts Studio Introduced' },
               { id: 3, nli: 'Mobile Beta Gameplay Revealed' },
               { id: 4, nli: 'CMETA DEX Introduced: FORGE' },
            ],
         },
         {
            id: 3,
            li: 'Multi-Network Implementation',
            nestedList: [{ id: 1, nli: 'VR Game Dev Begins' }],
         },
      ],
   },
]
</script>

<style src="./style.scss" lang="scss" ></style>
