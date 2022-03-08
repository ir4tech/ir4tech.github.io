<template>

    <hr class="w-10 h-6 mt-5 mb-12 bg-primary mx-auto" />

    <section class="w-full mx-auto py-10 mt-3 px-2 sm:w-3/5 bg-purple-50 rounded-lg p-10" id="contact-us">
        
        <div class="flex flex-wrap p-8">

            <div class="basis-full sm:basis-1/2 p-3">
                <h2 class="text-heading text-5xl text-dark-navy font-dark mb-6">Contact Us</h2>
                <p class="text-base text-light-navy">Drop us an email or find us through our social media.</p>

                <div class="flex flex-row flex-wrap justify-start mt-6">
                    <a href="https://twitter.com/IR4_Tech" class="w-10 p-2 bg-purple-200 rounded-full mr-3">
                        <img src="../assets/images/twitter.svg" alt="IR4 Official Twitter account" />
                    </a>
                    <a href="https://github.com/ir4tech" class="w-10 p-2 bg-purple-200 rounded-full mr-3">
                        <img src="../assets/images/github.svg" alt="IR4 Official GitHub" />
                    </a>
                    <!--
                    <a href="#" class="w-10 p-2 bg-purple-200 rounded-full mr-3">
                        <img src="../assets/images/linked-in.svg" alt="IR4 Official LinkedIn account" />
                    </a>
                    -->
                </div>
            </div>

            <div class="basis-full sm:basis-1/2 p-3">
                <form class="mt-12" ref="form" @submit.prevent="sendEmail">
                    <label class="block mb-3">
                        <input 
                            ref="sender_name" 
                            name="from_name" 
                            type="text" 
                            placeholder="Name" 
                            class="form-input w-full rounded-lg border-gray-200 bg-transparent text-dark-navy focus:border-purple-100 placeholder:text-light-navy placeholder:font-light" required />
                    </label>
                    <label class="block mb-3">
                        <input 
                            ref="sender_email"
                            name="reply_to" 
                            type="email" 
                            placeholder="Email"
                             class="form-input w-full rounded-lg border-gray-200 bg-transparent text-dark-navy focus:border-purple-100 placeholder:text-light-navy placeholder:font-light" required />
                    </label>

                    <label class="block mb-3">
                        <textarea 
                            ref="message"
                            name="message" 
                            rows="6" 
                            placeholder="Describe your project..." 
                            class="form-textarea w-full rounded-lg border-gray-200 bg-transparent text-dark-navy focus:border-purple-100 placeholder:text-light-navy placeholder:font-light" required></textarea>
                    </label>

                    <label class="block text-center">
                        <button :disabled="this.isSendingEmail"
                            type="submit" 
                            class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-blue-300 rounded-full px-8 pb-2.5 pt-3 text-center uppercase font-heading text-sm font-light disabled:bg-gray-200 disabled:text-gray-300 disabled:hover:background-gray-200 disabled:from-transparent disabled:to-transparent" >
                            Send<span v-if="this.isSendingEmail">ing...</span>
                                <i v-if="!this.isSendingEmail"><ArrowNarrowRightIcon class="w-5 inline mb-0.5 ml-3" /></i>
                                <i v-if="this.isSendingEmail"><CogIcon class="w-5 inline mb-0.5 ml-3 animate-spin" /></i>
                        </button>
                    </label>

                    <div class="mt-6 p-4 rounded-lg bg-green-300 text-dark-navy font-heading" v-if="this.hasEmailSucceeded">
                        Your email has been sent!
                    </div>

                    <div class="mt-6 p-4 rounded-lg bg-red-300 text-dark-navy font-heading" v-if="this.hasEmailFailed">
                        Error sending your email. Please try again.
                    </div>

                </form>
            </div>

        </div>

    </section>
</template>

<script>
    import { ArrowNarrowRightIcon, CogIcon } from '@heroicons/vue/outline'
    import emailjs from '@emailjs/browser'

    const serviceId = 'service_2678qpg';
    const templateId = 'template_ebmk7jp';
    const userId = 'user_h8GNuDX8GRn1MWw0jp2S8';

    export default {
        name: 'ContactComponent',
        components: { ArrowNarrowRightIcon, CogIcon },
        data() {
            return {
                isSendingEmail: false,
                hasEmailSucceeded: false,
                hasEmailFailed: false,
            }
        },
        methods: {
            sendEmail() {
                let senderName = this.$refs.sender_name.value.trim();
                let senderEmail = this.$refs.sender_email.value.trim();
                let senderMessage = this.$refs.message.value.trim();

                if(!senderName || !senderEmail || !senderMessage) {
                    alert('Plase provide valid inputs!')
                    return
                }
                
                this.isSendingEmail = true
                emailjs.sendForm(serviceId, templateId, this.$refs.form, userId)
                    .then(result => {
                        console.log('success', result.text)
                        this.hasEmailSucceeded = true
                        this.isSendingEmail = false
                    })
                    .catch(error => {
                        console.log('error', error)
                        this.hasEmailFailed = true
                        this.isSendingEmail = false
                    })
            }
        }
    }
</script>