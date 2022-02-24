<template>
    <header class="w-full mx-auto py-6 px-2 sm:w-3/5">
        
        <div class="flex flex-row">

            <div class="basis-1/2">
                <a href="/" alt="IR4 logo">
                    <img src="../assets/images/logo.png" class="w-12" /> 
                </a>
            </div>

            <div class="basis-1/2 text-right">
                <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:ring-cyan-200">
                    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                        Contact Us
                    </span>
                </button>
            </div>

        </div>

    </header>
</template>

<script>
    export default {
        name: 'HeaderComponent'
    }
</script>