<template>
  <div class="container">
    <MobileNav class="mobile-nav" @update-page="Update" />
    <Nav class="desktop-nav" @update-page="Update" />
    <transition
      enter-active-class="animate__animated animate__fadeInRight"
      leave-active-class="animate__animated animate__fadeOutLeft"
      mode="out-in"
    >
      <component
        class="dynamic-component"
        :is="currentView"
        @update-page="Update"
      />
    </transition>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue';
import MobileNav from '@/components/MobileNav.vue';
import General from '@/components/General.vue';
import Clients from '@/components/Clients.vue';
import Products from '@/components/Products.vue';
import Sells from '@/components/Sells.vue';
import Report from '@/components/Report.vue';
import AddClient from '@/components/AddClient.vue';
import AddProduct from '@/components/AddProduct.vue';
import AddSell from '@/components/AddSell.vue';
import DetailsClient from '@/components/DetailsClient.vue';
import DetailsProduct from '@/components/DetailsProduct.vue';
import DetailsSell from '@/components/DetailsSell.vue';

export default {
  data() {
    return { currentView: 'General' };
  },
  components: {
    Nav,
    MobileNav,
    General,
    Clients,
    Products,
    Sells,
    Report,
    AddClient,
    AddProduct,
    DetailsClient,
    DetailsProduct,
    DetailsSell,
    AddSell,
  },
  methods: {
    Update(page) {
      this.currentView = page;
    },
  },
};
</script>

<style scoped>
.animate__animated.animate__fadeInRight,
.animate__animated.animate__fadeOutLeft {
  --animate-duration: 0.5s;
}
.dynamic-component {
  z-index: 0;
}
.mobile-nav {
  display: none;
  z-index: 1;
}
.desktop-nav {
  z-index: 1;
}
.container {
  display: grid;
  grid-template-columns: auto 1fr;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
}
@media (max-width: 800px) {
  .container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    height: 100vh;
  }
  .desktop-nav {
    display: none;
  }
  .mobile-nav {
    display: grid;
  }
}
</style>
