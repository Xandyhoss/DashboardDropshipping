<template>
  <transition
    enter-active-class="animate__animated animate__fadeInRight"
    leave-active-class="animate__animated animate__fadeOutLeft"
  >
    <router-view />
  </transition>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>
