<template>
  <div class="container">
    <Loading v-if="this.loading" />
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
        @update-data="fetchData"
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
import Loading from '@/components/Loading.vue';
import { mapMutations, mapState } from 'vuex';
import { SET_CLIENTS } from '@/store/modules/clients';
import { SET_LOADING } from '@/store/modules/loading';
import { SET_PRODUCTS } from '@/store/modules/products';
import { SET_SELLS } from '@/store/modules/sells';
import { getClientsService } from '@/services/clientsService';
import { getProductsService } from '@/services/productsService';
import { getSellsService } from '@/services/sellsService';

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
    Loading,
  },
  methods: {
    Update(page) {
      this.currentView = page;
    },
    fetchData() {
      this.getClientsList();
      this.getProductsList();
      this.getSellsList();
    },
    ...mapMutations('clients', { setClients: SET_CLIENTS }),
    ...mapMutations('loading', { setLoading: SET_LOADING }),
    ...mapMutations('products', { setProducts: SET_PRODUCTS }),
    ...mapMutations('sells', { setSells: SET_SELLS }),
    async getClientsList() {
      try {
        this.setLoading(true);
        const { data } = await getClientsService();
        data.length > 0 ? this.setClients(data) : null;
      } catch (error) {
        console.log(error);
      } finally {
        this.setLoading(false);
      }
    },
    async getProductsList() {
      try {
        this.setLoading(true);
        const { data } = await getProductsService();
        data.length > 0 ? this.setProducts(data) : null;
      } catch (error) {
        console.log(error);
      } finally {
        this.setLoading(false);
      }
    },
    async getSellsList() {
      try {
        this.setLoading(true);
        const { data } = await getSellsService();
        data.length > 0 ? this.setSells(data) : null;
      } catch (error) {
        console.log(error);
      } finally {
        this.setLoading(false);
      }
    },
  },
  computed: {
    ...mapState({
      loading: (state) => state.loading.loading,
    }),
  },
  created() {
    this.fetchData();
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
