<template>
    <header class="w-full mx-auto py-9 px-2 sm:w-3/5">
        
        <div class="flex flex-row">

            <div class="basis-1/2">
                <a href="/" alt="IR4 logo">
                    <img src="../assets/images/logo.png" class="w-12" /> 
                </a>
            </div>

            <div class="basis-1/2 text-right">
                <a href="#contact-us"
                    type="button" 
                    class="text-primary hover:text-primary border border-gray-200 hover:bg-transparent hover:border-primary focus:ring-4 focus:ring-purple-300 font-light rounded-full text-sm px-5 py-2.5 text-center font-heading text-upperase">
                    Contact Us    
                </a>
            </div>

        </div>

    </header>
</template>

<script>
    export default {
        name: 'HeaderComponent'
    }
</script>
