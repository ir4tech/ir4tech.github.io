<template>

    <section class="w-full mx-auto py-10 mt-8 px-2 sm:w-3/5">
        <div class="flex flex-wrap">
            <div class="sm:w-2/3 w-full">
                <hr class="w-10 h-6 mb-6 bg-primary" />
                <h2 class="text-heading text-5xl text-dark-navy font-dark mb-6">
                    About Us
                </h2>
                <p class="text-light-navy">
                    We are building decentralised and public good software and protocols that leverage the Avalanche platform.
                    We aim to grow the network and support the network through commercial enterprise and self-sufficient public utilities.
                </p>
            </div>

            <div class="sm:w-1/3 w-full">
                <img src="../assets/images/blockchain.png" class="object-contain w-56 sm:ml-auto mx-auto mt-8 " />
            </div>
        </div>

        <div class="flex flex-wrap pt-12">
            <h2 class="text-light-navy mb-5">
                By building on the avalanche platform all our products benefit from these inherited properties.
            </h2>
            <div class="sm:w-1/3 w-full mb-12 mt-6 pr-5" v-for="project in projects" :key="project.id">
                <ArrowsExpandIcon class="bg-primary text-white w-10 p-1 rounded-full" v-if="project.type == 'chart'" />
                <ChipIcon class="bg-primary text-white w-10 p-1 rounded-full" v-else-if="project.type == 'chip'"/>
                <EmojiHappyIcon class="bg-primary text-white w-10 p-1 rounded-full" v-else-if="project.type == 'credit'" />
                <EyeOffIcon class="bg-primary text-white w-10 p-1 rounded-full" v-else-if="project.type == 'eye'"/>
                <ViewGridIcon class="bg-primary text-white w-10 p-1 rounded-full" v-else-if="project.type == 'hand'"/>
                <LibraryIcon class="bg-primary text-white w-10 p-1 rounded-full" v-else /> 
                <h4 class="text-dark-navy text-xl font-heading mt-6 font-light" >
                    {{ project.title }}
                </h4>
                <p class="text-light-navy text-sm mt-3">
                    {{ project.blurb }}
                </p>
            </div>

        </div>

    </section>

</template>

<script>
    import { ArrowsExpandIcon, ChipIcon, EyeOffIcon, LibraryIcon, EmojiHappyIcon, ViewGridIcon } from '@heroicons/vue/solid'

    export default {
        name: 'AboutComponent',
        components: { ArrowsExpandIcon, EmojiHappyIcon, ChipIcon, EyeOffIcon, LibraryIcon, ViewGridIcon },
        data: function () {
            return {
                projects: [
                    {id: 1, title: 'Infinite Replication', type: 'chart', blurb: 'Scaling up and down to thousands or tens of thousands of nodes without the need for cluster rebalancing or sharding'},
                    {id: 2, title: 'Highly Available', type: 'chip', blurb: 'Not bound by just where you can source data centres, open participation allows truly global service infrastructure'},
                    {id: 3, title: 'Quiescence', type: 'credit', blurb: 'Our protocols are Green. They only work when you have work to do'},
                    {id: 5, title: 'Leaderless', type: 'eye', blurb: "Don't stop work if your leader node stops responding. Leaderless protocols allow you to always generate work when it is required"},
                    {id: 4, title: 'Decentralised', type: 'hand', blurb: 'Reliance on centralisation adds a maintaince burden. Decentralised services take on a life of their own and can become self-healing.'},
                    {id: 6, title: 'Auditability', type: 'library', blurb: 'Be reassured that your data is correct and auditable through its entire history'},
                ]
            }
        }
    }
</script>