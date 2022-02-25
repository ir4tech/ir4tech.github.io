<template>

    <section class="w-full mx-auto py-10 mt-8 px-2 sm:w-3/5">
        <div class="flex flex-wrap">
            <div class="sm:w-1/2 w-full">
                <hr class="w-10 h-6 mb-6 bg-magenta" />
                <h2 class="text-heading text-5xl text-dark-navy font-dark mb-6">About Us</h2>
                <p class="text-light-navy">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>

            <div class="w-1/2">
                <img src="../assets/images/avalanche-logo.png" />
            </div>
        </div>

        <div class="flex flex-wrap pt-12">

            <div class="sm:w-1/3 w-full mb-12 mt-6 pr-5">
                <ChartSquareBarIcon class="bg-magenta text-white w-10 p-1 rounded-full" />
                <h4 class="text-dark-navy text-xl font-heading mt-6 font-light">Service Title</h4>
                <p class="text-light-navy text-sm mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>

            <div class="sm:w-1/3 w-full mb-12 mt-6 pr-5">
                <ChipIcon class="bg-magenta text-white w-10 p-1 rounded-full" />
                <h4 class="text-dark-navy text-xl font-heading mt-6 font-light">Service Title</h4>
                <p class="text-light-navy text-sm mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>

            <div class="sm:w-1/3 w-full mb-12 mt-6 pr-5">
                <CreditCardIcon class="bg-magenta text-white w-10 p-1 rounded-full" />
                <h4 class="text-dark-navy text-xl font-heading mt-6 font-light">Service Title</h4>
                <p class="text-light-navy text-sm mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>

            <div class="sm:w-1/3 w-full mb-12 mt-6 pr-5">
                <EyeOffIcon class="bg-magenta text-white w-10 p-1 rounded-full" />
                <h4 class="text-dark-navy text-xl font-heading mt-6 font-light">Service Title</h4>
                <p class="text-light-navy text-sm mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>

            <div class="sm:w-1/3 w-full mb-12 mt-6 pr-5">
                <HandIcon class="bg-magenta text-white w-10 p-1 rounded-full" />
                <h4 class="text-dark-navy text-xl font-heading mt-6 font-light">Service Title</h4>
                <p class="text-light-navy text-sm mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>

            <div class="sm:w-1/3 w-full mb-12 mt-6 pr-5">
                <LibraryIcon class="bg-magenta text-white w-10 p-1 rounded-full" /> 
                <h4 class="text-dark-navy text-xl font-heading mt-6 font-light">Service Title</h4>
                <p class="text-light-navy text-sm mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>

        </div>

    </section>

</template>

<script>
    import { ChartSquareBarIcon, ChipIcon, CreditCardIcon, EyeOffIcon, HandIcon, LibraryIcon } from '@heroicons/vue/solid'

    export default {
        name: 'AboutComponent',
        components: { ChartSquareBarIcon, ChipIcon, CreditCardIcon, EyeOffIcon, HandIcon, LibraryIcon }
    }
</script>