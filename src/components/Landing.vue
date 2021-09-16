<template>
  <div class="landing">
      <!-- <button @click="show = !show">
        Toggle
      </button> -->
      <transition name="slide-fade" appear>
        <h1 v-if="show" class="tagline vertical-center">Technology, Simplified.</h1>
      </transition>
      <!-- <ParticlesJS /> -->
  </div>
</template>

<script>
export default {
    name: 'Landing',
    components: {
    },
    mount: {
        show: true
    },
    data: function() {
        return {
            show: true
        }
    }
}
</script>

<style>
.slide-fade-enter-active {
  transition: all 9s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.vertical-center {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
</style>