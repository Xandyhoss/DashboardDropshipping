<template>
  <div class="container-clients">
    <div class="content-clients">
      <div class="title"><h1>clientes</h1></div>
      <div class="search">
        <input type="text" class="search-field" placeholder="procurar" />
      </div>
      <div class="add-client">
        <button
          class="add-client-button"
          @click="$emit('update-page', 'AddClient')"
        >
          <i class="fas fa-plus-circle"></i>adicionar cliente
        </button>
      </div>
      <div class="clients">
        <table class="clients-table" v-if="clients.length > 0">
          <tr>
            <th class="top-left">id</th>
            <th>nome</th>
            <th class="hide">cidade</th>
            <th class="hide">compras</th>
            <th class="top-right">opções</th>
          </tr>
          <tr v-for="client in this.clients" :key="client.id">
            <td>
              {{ client.id }}
            </td>
            <td class="cursor-pointer" @click="goToClient(client.id)">
              {{ client.nome }}
            </td>
            <td class="hide">
              {{
                client.addresses ? client.addresses[0].cidade : 'Não Definida'
              }}
            </td>
            <td class="hide">
              {{ client.compras ? client.compras.length : '0' }}
            </td>
            <td>
              <i class="fas fa-edit icon"></i>
              <i class="fas fa-trash icon"></i>
            </td>
          </tr>
        </table>
        <div class="else-message" v-else>
          <p>Nenhum cliente adicionado ainda.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import { SET_SELECTED_CLIENT } from '@/store/modules/selectedClient';
export default {
  setup() {
    return {};
  },
  computed: {
    ...mapState({ clients: (state) => state.clients.clients }),
  },
  methods: {
    ...mapMutations('selectedClient', { setClient: SET_SELECTED_CLIENT }),
    goToClient(id) {
      this.setClient(id);
      this.$emit('update-page', 'DetailsClient');
    },
  },
  beforeMount() {
    this.$emit('updateData');
  },
};
</script>

<style scoped>
.container-clients {
  background-color: #e8e6e6;
  display: grid;
  grid-template-columns: 1fr;
}
.content-clients {
  display: grid;
  grid-template-columns: 2fr 0.5fr 0.5fr;
  grid-template-rows: 60px auto;
  grid-gap: 1rem;
  padding: 2rem;
  grid-template-areas:
    'title search add-client'
    'clients clients clients';
}
.title {
  display: grid;
  align-items: center;
  grid-area: title;
}
.title h1 {
  margin: 0;
  color: #161616;
  font-family: 'Typo Round';
  font-size: 50px;
}
.search {
  display: grid;
  align-items: center;
  grid-area: search;
}
.search-field {
  height: 40px;
  width: 220px;
  background-color: transparent;
  border-style: solid;
  border-width: 1px;
  border-color: rgba(170, 32, 111, 1);
  border-radius: 10px;
  font-family: 'Typo Round';
  font-size: 20px;
  text-align: right;
  background: url('../assets/img/icons/lens.png') no-repeat left;
  background-size: 20px;
  padding-right: 15px;
  background-position-x: 2%;
}
.search-field:focus {
  outline: none;
}
.search-field::placeholder {
  text-align: right;
  margin-right: 10px;
}
.add-client {
  display: grid;
  align-items: center;
  grid-area: add-client;
}
.add-client-button {
  height: 45px;
  width: 220px;
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
.add-client-button:active {
  filter: grayscale(1);
  transition: 0.2s;
}
.fa-plus-circle {
  margin-right: 5px;
}
.clients {
  grid-area: clients;
}
.clients-table {
  border-collapse: collapse;
  width: 100%;
}
.clients-table th {
  border: 1px solid transparent;
  background: rgb(231, 47, 93);
  background: linear-gradient(
    90deg,
    rgba(231, 47, 93, 1) 10%,
    rgba(200, 37, 103, 1) 56%,
    rgba(170, 32, 111, 1) 100%
  );
  height: 35px;
  font-size: 25px;
  padding: 10px;
  font-family: 'Typo Round';
  color: white;
}
.top-left {
  border-radius: 15px 0px 0px 0px;
}
.top-right {
  border-radius: 0px 15px 0px 0px;
}
.icon {
  height: 25px;
  margin-inline: 2px;
}
.clients-table td {
  font-family: 'Bebas';
  font-size: 30px;
  text-align: center;
  padding: 10px;
  border: 1px solid rgba(170, 32, 111, 1);
}

.cursor-pointer {
  cursor: pointer;
  transition: 0.2s;
}

.cursor-pointer:hover {
  background-color: #c2c2c2;
  transition: 0.2s;
}

.else-message {
  width: 100%;
  display: flex;
  justify-content: center;
}

.else-message p {
  font-size: 30px;
  font-family: 'Bebas';
}
@media (min-width: 1920px) {
  .container-clients {
    background-color: #e8e6e6;
    display: grid;
    grid-template-columns: 1500px;
    justify-content: center;
  }
}
@media (max-width: 1500px) {
}
@media (max-width: 1300px) {
  .search-field,
  .add-client-button {
    width: 170px;
    font-size: 15px;
  }
  .clients-table th {
    font-size: 20px;
  }
  .clients-table td {
    font-size: 25px;
  }
}
@media (max-width: 1090px) {
  .clients-table th {
    font-size: 18px;
  }
  .clients-table td {
    font-size: 20px;
  }
}
@media (max-width: 940px) {
  .title h1 {
    font-size: 40px;
  }
  .search-field {
    width: 120px;
    font-size: 14px;
  }
  .add-client-button {
    width: 150px;
    font-size: 14px;
  }
  .hide {
    display: none;
  }
}
@media (max-width: 530px) {
  .search-field {
    width: 80px;
    padding-right: 5px;
    font-size: 10px;
  }
  .add-client-button {
    width: 100px;
    font-size: 10px;
  }
  .title h1 {
    font-size: 25px;
  }
}
@media (max-width: 415px) {
}
</style>
