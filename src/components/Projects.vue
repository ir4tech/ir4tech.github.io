<template>
  <section class="w-full mx-auto py-10 mt-3 px-2 sm:w-3/5" id="projects">
    <div class="w-full">
      <hr class="w-10 h-6 mb-6 bg-primary" />
      <h2 class="text-heading text-5xl text-dark-navy font-dark mb-6">
        Projects
      </h2>
      <!-- <p class="text-light-navy">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> -->
    </div>

    <div class="flex flex-wrap mt-10">
      <div
        class="basis-full sm:basis-1/3 px-1.5 mb-6"
        v-for="project in projects"
        :key="project.name"
      >
        <div class="rounded-lg shadow-lg bg-white">
          <a href="https://raptor.farm/" target="_blank">
            <img class="rounded-t-lg" src="../assets/images/raptr.png" alt="" />
          </a>
          <div class="p-6">
            <h5 class="text-dark-navy text-xl text-heading font-dark mb-2">
              {{project.name}}
            </h5>
            <p class="text-light-navy text-sm mb-4">
              {{project.taglink}}
            </p>
            <div class="text-center w-full py-5">
              <a
                :href="project.link"
                class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-blue-300 rounded-full px-4 py-3 text-center uppercase font-heading text-sm font-light"
              >
                View project
                <ArrowNarrowRightIcon class="w-5 inline mb-0.5 ml-3" />
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import { ArrowNarrowRightIcon } from "@heroicons/vue/outline";

export default {
  name: "ProjectsComponent",
  components: { ArrowNarrowRightIcon },
  data() {
    return {
      projects: [
        {
          name: "Jurassicc Farm",
          taglink: "Building a community through memetic NFT ownership and token gameplay with beautiful art",
          link: "https://raptor.farm",
          image: "../assets/images/raptr.png"
        },
      ],
    };
  },
};
</script>
