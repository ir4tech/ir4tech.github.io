
<template>

    <section class="w-full mx-auto py-12 px-2 sm:w-3/5 text-center">

        <h5 class="text-base mb-8 mt-12 uppercase text-primary">Industrial Revolution 4</h5>
        <h2 class="text-7xl mb-9 font-sora text-dark-navy">Technology, Simplified</h2>
        <p class="text-lg mb-10 font-base text-light-navy">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <a href="#projects" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-blue-300 rounded-full px-9 py-3.5 text-center uppercase font-heading text-xl font-light my-5">
            Our Work <ArrowNarrowRightIcon class="w-5 inline mb-1 ml-3" /> 
        </a>

    </section>

</template>

<script>

    import { ArrowNarrowRightIcon } from '@heroicons/vue/outline'

    export default {
        name: 'HeroComponent',
        components: { ArrowNarrowRightIcon }
    }
</script>