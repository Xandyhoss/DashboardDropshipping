<template>
  <div class="container-add-sell">
    <div class="content-add-sell">
      <div class="title">
        <div class="icon" @click="$emit('update-page', 'Sells')">
          <i class="fas fa-backward"></i>
        </div>
        <h1>criar venda</h1>
      </div>
      <div class="sell-form">
        <div class="sell-info">
          <select class="input-select" v-model="client">
            <option :value="{}" selected disabled>cliente</option>
            <option
              v-for="client in this.clients"
              :value="client"
              :key="client.id"
            >
              {{ client.nome }}
            </option>
          </select>
          <select class="input-select" v-model="selectedAddress">
            <option :value="{}" selected disabled>endereço</option>
            <option
              v-for="address in this.addresses"
              :value="address"
              :key="address.id"
            >
              {{ address.endereco }}, {{ address.numero }} -
              {{ address.bairro }} -
              {{ address.cidade }}
            </option>
          </select>
        </div>
        <div class="products-section">
          <div
            class="checkbox-group"
            v-for="product in this.products"
            :key="product.id"
          >
            <input
              :id="product.id"
              type="checkbox"
              v-model="selectedProducts"
              :value="product"
            />
            <label :for="product.id"
              >{{ product.id }} | {{ product.produto }}</label
            >
          </div>
        </div>
        <div class="buttons">
          <button class="submit-button" @click="createSell()">
            <i class="fas fa-plus-circle"></i>cadastrar
          </button>
          <button class="cancel-button" @click="$emit('update-page', 'Sells')">
            cancelar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import { SET_LOADING } from '@/store/modules/loading';
import { getClientByIdService } from '../services/clientsService';
import { createNewSellService } from '../services/sellsService';
import { useToast } from 'vue-toastification';

export default {
  setup() {
    const toast = useToast();
    return { toast };
  },
  data() {
    return {
      client: {},
      addresses: {},
      selectedAddress: {},
      selectedProducts: [],
    };
  },
  computed: {
    ...mapState({ clients: (state) => state.clients.clients }),
    ...mapState({ products: (state) => state.products.products }),
  },
  methods: {
    ...mapMutations('loading', { setLoading: SET_LOADING }),
    async getClient() {
      try {
        this.setLoading(true);
        const client = await getClientByIdService(this.client.id);
        this.addresses = client.addresses;
      } catch (error) {
        console.log(error.response);
      } finally {
        this.setLoading(false);
      }
    },
    async createSell() {
      try {
        this.setLoading(true);

        const productIds = this.selectedProducts.map((item) => item.id);

        const client = await createNewSellService(
          this.client.id,
          this.selectedAddress.id,
          productIds
        );
        if (client) this.$emit('update-page', 'Sells');
      } catch (error) {
        console.log(error);
      } finally {
        this.setLoading(false);
      }
    },
  },
  watch: {
    client() {
      this.getClient(this.client.id);
      this.selectedAddress = {};
    },
  },
};
</script>

<style scoped>
.products-section {
  background-color: transparent;
  border-style: solid;
  border-width: 1px;
  border-color: rgba(170, 32, 111, 1);
  border-radius: 10px;
  width: 100%;
  height: auto;
  max-height: 250px;
  overflow: scroll;
  margin-bottom: 1rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  padding: 10px;
  box-sizing: border-box;
}

.checkbox-group {
  display: flex;
  gap: 10px;
  align-items: center;
  background-color: #d6d6d6;
  padding: 5px;
  border-radius: 4px;
  font-family: 'Typo Round';
  font-size: 16px;
  font-weight: bold;
}

.checkbox-group input {
  width: 18px;
  height: 18px;
}

.products-section::-webkit-scrollbar {
  width: 0px;
  height: 0px;
}

.container-add-sell {
  background-color: #e8e6e6;
  display: grid;
  grid-template-columns: 1fr;
}
.content-add-sell {
  display: grid;
  grid-gap: 1rem;
  padding: 2rem;
  grid-template-columns: 1fr;
  grid-template-rows: 60px auto;
}
.title {
  display: flex;
  align-items: center;
  gap: 10px;
}
.icon {
  width: 25px;
  align-items: center;
  justify-content: center;
  display: flex;
}
.title h1 {
  margin: 0;
  color: #161616;
  font-family: 'Typo Round';
  font-size: 50px;
}
.sell-info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  grid-template-rows: auto;
  margin-bottom: 1rem;
}
.input-select {
  height: 35px;
  background-color: transparent;
  border-style: solid;
  border-width: 1px;
  border-color: rgba(170, 32, 111, 1);
  border-radius: 10px;
  padding-left: 10px;
  font-family: 'Bebas';
  font-size: 20px;
}
.group-title {
  margin: 0;
  font-family: 'Typo Round';
  grid-area: group-title;
}
.buttons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 300px;
  grid-gap: 1rem;
}
.submit-button {
  height: 45px;
  border-radius: 10px;
  border: none;
  background: rgb(231, 47, 93);
  background: linear-gradient(
    90deg,
    rgba(231, 47, 93, 1) 10%,
    rgba(200, 37, 103, 1) 56%,
    rgba(170, 32, 111, 1) 100%
  );
  color: white;
  font-family: 'Typo Round';
  font-size: 20px;
  transition: 0.2s;
}
.submit-button:active {
  filter: grayscale(1);
  transition: 0.2s;
}
.fa-plus-circle {
  margin-right: 5px;
}
.cancel-button {
  color: #161616;
  font-family: 'Typo Round';
  font-size: 20px;
  border-radius: 10px;
  background-color: transparent;
  border-style: solid;
  border-width: 1px;
  border-color: rgba(170, 32, 111, 1);
  transition: 0.2s all ease-in-out;
}
.cancel-button:active {
  background-color: #d6d6d6;
  transition: 0.2s all ease-in-out;
}

@media (min-width: 1920px) {
  .container-add-sell {
    background-color: #e8e6e6;
    display: grid;
    grid-template-columns: 1500px;
    justify-content: center;
  }
}
@media (max-width: 1500px) {
}
@media (max-width: 1300px) {
}
@media (max-width: 1190px) {
}
@media (max-width: 1090px) {
}
@media (max-width: 940px) {
  .sell-info {
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    grid-template-rows: auto;
  }
}
@media (max-width: 530px) {
}
@media (max-width: 415px) {
}
</style>
