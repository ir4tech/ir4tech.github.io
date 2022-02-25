<template>

    <hr class="w-10 h-6 mt-5 mb-12 bg-magenta mx-auto" />

    <section class="w-full mx-auto py-10 mt-3 px-2 sm:w-3/5 bg-purple-50 rounded-lg p-10" id="contact-us">
        
        <div class="flex flex-wrap p-8">

            <div class="basis-full sm:basis-1/2 p-3">
                <h2 class="text-heading text-5xl text-dark-navy font-dark mb-6">Contact Us</h2>
                <p class="text-base text-light-navy">Drop us an email or find us through our social media.</p>

                <div class="flex flex-row flex-wrap justify-start mt-6">
                    <a href="#" class="w-10 p-2 bg-purple-200 rounded-full mr-3">
                        <img src="../assets/images/twitter.svg" alt="IR4 Official Twitter account" />
                    </a>
                    <a href="#" class="w-10 p-2 bg-purple-200 rounded-full mr-3">
                        <img src="../assets/images/github.svg" alt="IR4 Official GitHub" />
                    </a>
                    <a href="#" class="w-10 p-2 bg-purple-200 rounded-full mr-3">
                        <img src="../assets/images/linked-in.svg" alt="IR4 Official LinkedIn account" />
                    </a>
                </div>
            </div>

            <div class="basis-full sm:basis-1/2 p-3">
                <form class="mt-12">
                    <label class="block mb-3">
                        <input name="name" type="text" placeholder="Name" class="form-input w-full rounded-lg border-gray-200 bg-transparent text-dark-navy focus:border-purple-100 placeholder:text-light-navy placeholder:font-light" />
                    </label>
                    <label class="block mb-3">
                        <input name="email" type="email" placeholder="Email" class="form-input w-full rounded-lg border-gray-200 bg-transparent text-dark-navy focus:border-purple-100 placeholder:text-light-navy placeholder:font-light" />
                    </label>

                    <label class="block mb-3">
                        <textarea rows="6" placeholder="Describe your project..." class="form-textarea w-full rounded-lg border-gray-200 bg-transparent text-dark-navy focus:border-purple-100 placeholder:text-light-navy placeholder:font-light"></textarea>
                    </label>

                    <label class="block text-center">
                        <button type="submit" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-blue-300 rounded-full px-8 pb-2.5 pt-3 text-center uppercase font-heading text-sm font-light">
                            Send <ArrowNarrowRightIcon class="w-5 inline mb-0.5 ml-3" /> 
                        </button>
                    </label>
                </form>
            </div>

        </div>

    </section>
</template>

<script>
    import { ArrowNarrowRightIcon } from '@heroicons/vue/outline'

    export default {
        name: 'ContactComponent',
        components: { ArrowNarrowRightIcon }
    }
</script>