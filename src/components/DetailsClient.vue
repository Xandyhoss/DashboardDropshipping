<template>
  <div class="container-details-client">
    <div class="modal-overlay" v-if="showModal">
      <add-address
        @toggle-modal="ToggleModal"
        :id="client.id"
        @update-page="handleAddAddress"
      />
    </div>
    <div class="content-details-client">
      <div class="title">
        <div class="icon" @click="$emit('update-page', 'Clients')">
          <i class="fas fa-backward"></i>
        </div>
        <h1>detalhes do cliente</h1>
      </div>
      <div class="client-info">
        <div class="personal-info">
          <h2 class="group-title">informações pessoais</h2>
          <div class="info-item">
            <div class="info-item-title"><h2>nome</h2></div>
            <div class="info-item-line"></div>
            <div class="info-item-info">{{ client.nome }}</div>
          </div>
          <div class="info-item">
            <div class="info-item-title"><h2>última compra</h2></div>
            <div class="info-item-line"></div>
            <div class="info-item-info">{{ getLastBought() }}</div>
          </div>
          <div class="info-item">
            <div class="info-item-title"><h2>compras feitas</h2></div>
            <div class="info-item-line"></div>
            <div class="info-item-info">
              {{ this.client?.compras?.length }}
            </div>
          </div>
          <div class="info-item">
            <div class="info-item-title"><h2>cpf</h2></div>
            <div class="info-item-line"></div>
            <div class="info-item-info">{{ client.cpf }}</div>
          </div>
          <div class="info-item">
            <div class="info-item-title"><h2>telefone</h2></div>
            <div class="info-item-line"></div>
            <div class="info-item-info">{{ client.telefone }}</div>
          </div>
        </div>
        <hr class="separator" />
        <div class="address-info">
          <div class="header-title">
            <h2 class="group-title">endereços</h2>
            <button class="add-address-button" @click="ToggleModal">
              <i class="fas fa-plus-circle" />adicionar endereço
            </button>
          </div>
          <ul class="address-list">
            <li
              class="address-item"
              v-for="address in client.addresses"
              :key="address.id"
            >
              <i class="fas fa-map-marker-alt" />
              {{ address.endereco }}, {{ address.numero }},
              {{ address.complemento }} - {{ address.bairro }} -
              {{ address.cidade }} - {{ address.cep }} -
              {{ address.referencia }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import { SET_LOADING } from '@/store/modules/loading';
import { getClientByIdService } from '../services/clientsService';
import AddAddress from '@/components/AddAddress.vue';

export default {
  components: { AddAddress },
  data() {
    return { client: {}, showModal: false };
  },
  computed: {
    ...mapState({
      selectedClient: (state) => state.selectedClient.selectedClient,
    }),
  },
  methods: {
    ...mapMutations('loading', { setLoading: SET_LOADING }),
    async getClient() {
      try {
        this.setLoading(true);
        const client = await getClientByIdService(this.selectedClient);
        this.client = client;
      } catch (error) {
        console.log(error.response);
      } finally {
        this.setLoading(false);
      }
    },
    getLastBought() {
      if (this.client.compras?.length > 0) {
        return this.client.compras[this.client.compras.length - 1];
      }
      return 'Nenhum';
    },
    ToggleModal() {
      this.showModal = !this.showModal;
    },
    handleAddAddress() {
      this.ToggleModal();
      this.getClient();
    },
  },
  beforeMount() {
    this.getClient();
  },
};
</script>

<style scoped>
.modal-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #161616a8;
  z-index: 9999;
}
.header-title {
  display: flex;
  justify-content: space-between;
}
.add-address-button {
  height: 35px;
  width: auto;
  padding-inline: 20px;
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
  font-size: 15px;
  transition: 0.2s;
}
.add-address-button:active {
  filter: grayscale(1);
}
.container-details-client {
  background-color: #e8e6e6;
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
}
.content-details-client {
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
.personal-info {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  grid-template-rows: 50px auto;
}
.group-title {
  margin: 0;
  font-family: 'Typo Round';
  grid-column-start: 1;
  grid-column-end: 4;
}
.separator {
  margin-top: 20px;
}
.address-info {
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  margin-top: 1rem;
}
.address-list {
  width: 100%;
  list-style: none;
  padding-left: 5px;
  font-family: 'Bebas Neue';
  font-size: 25px;
}

.address-item {
  border-bottom: 1px solid rgb(212, 212, 212);
}

.info-item {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
}
.info-item-title h2 {
  font-family: 'Typo Round';
  margin: 0px;
}
.info-item-info {
  font-family: 'Bebas';
  font-size: 35px;
}
.info-item-line {
  height: 5px;
  width: 100%;
  align-self: flex-end;
  background: rgb(231, 47, 93);
  background: linear-gradient(
    90deg,
    rgba(231, 47, 93, 1) 0%,
    rgba(200, 37, 103, 1) 35%,
    rgba(242, 129, 47, 1) 71%,
    rgba(170, 32, 111, 1) 100%
  );
}

@media (min-width: 1920px) {
  .container-details-client {
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
  .personal-info {
    grid-template-columns: 1fr 1fr;
  }
  .group-title {
    grid-column-start: 1;
    grid-column-end: 3;
  }
}
@media (max-width: 1090px) {
}
@media (max-width: 940px) {
  .info-item-info {
    font-family: 'Bebas';
    font-size: 28px;
  }
  .title h1 {
    font-size: 40px;
  }
}
@media (max-width: 530px) {
  .personal-info {
    grid-template-columns: 1fr;
  }
  .address-info {
    grid-template-columns: 1fr;
  }
  .group-title {
    font-size: 24px;
    grid-column-start: 1;
    grid-column-end: 2;
  }
  .title h1 {
    font-size: 30px;
  }
}
@media (max-width: 415px) {
  .title h1 {
    font-size: 22px;
  }
  .group-title {
    font-size: 20px;
  }
}
</style>
