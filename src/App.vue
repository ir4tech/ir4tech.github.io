<template>

    <div id="app">
        <HeaderComponent /> 
        <HeroComponent /> 
        <AboutComponent /> 
        <ProjectsComponent /> 
        <ContactComponent /> 
        <FooterComponent /> 
    </div>

</template>

<script>

import HeaderComponent from './components/Header.vue'
import HeroComponent from './components/Hero.vue'
import AboutComponent from './components/About.vue'
import ProjectsComponent from './components/Projects.vue'
import ContactComponent from './components/Contact.vue'
import FooterComponent from './components/Footer.vue'

export default {
    name: 'App',
    components: {
        HeaderComponent,
        HeroComponent,
        AboutComponent,
        ProjectsComponent,
        ContactComponent,
        FooterComponent
    }
}
</script>

<style>

</style>
