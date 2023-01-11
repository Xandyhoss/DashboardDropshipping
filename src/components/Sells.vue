<template>
  <div class="container-sales">
    <div class="content-sales">
      <div class="title"><h1>vendas</h1></div>
      <div class="search">
        <input type="text" class="search-field" placeholder="procurar" />
      </div>
      <div class="add-sale">
        <button
          class="add-sale-button"
          @click="$emit('update-page', 'AddSell')"
        >
          <i class="fas fa-plus-circle"></i>criar venda
        </button>
      </div>
      <div class="sales">
        <table class="sales-table" v-if="sells.length > 0">
          <tr>
            <th class="top-left">id</th>
            <th>cliente</th>
            <th class="hide">data</th>
            <th class="hide">valor</th>
            <th class="top-right">status</th>
          </tr>
          <tr v-for="sell in this.sells" :key="sell.id">
            <td @click="$emit('update-page', 'DetailsSell')">01</td>
            <td>{{ getClientNameById(sell.clientId) }}</td>
            <td class="hide">
              {{ format(parseISO(sell.createdAt), 'dd/MM/yyyy') }}
            </td>
            <td class="hide">R$ {{ sell.value.toFixed(2) }}</td>
            <td>
              <div class="status" :class="getBackgroundByStatus(sell.status)">
                {{ getStatus(sell.status) }}
              </div>
            </td>
          </tr>
        </table>
        <div class="else-message" v-else>
          <p>Nenhuma venda realizada ainda.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { format, parseISO } from 'date-fns';
export default {
  data() {
    return {
      format,
      parseISO,
    };
  },
  setup() {
    return {};
  },
  methods: {
    getClientNameById(id) {
      function getClientName(client) {
        if (client.id === id) {
          return client;
        }
      }
      return this.clients.filter(getClientName)[0].nome;
    },
    getStatus(status) {
      switch (status) {
        case 'pending_payment':
          return 'Pagamento Pendente';
        case 'payment_confirmed':
          return 'Pagamento Confirmado';
        case 'finished':
          return 'Finalizada';
        case 'canceled':
          return 'Cancelada';
      }
    },
    getBackgroundByStatus(status) {
      switch (status) {
        case 'pending_payment':
          return { 'background-orange': true };
        case 'payment_confirmed':
          return { 'background-blue': true };
        case 'finished':
          return { 'background-green': true };
        case 'canceled':
          return { 'background-red': true };
      }
    },
  },
  computed: {
    ...mapState({ sells: (state) => state.sells.sells }),
    ...mapState({ clients: (state) => state.clients.clients }),
  },
  beforeMount() {
    this.$emit('updateData');
  },
};
</script>

<style scoped>
.background-green {
  background-color: rgb(1, 252, 1);
}
.background-orange {
  background-color: #fa6603;
}
.background-red {
  background-color: #ff1100;
  color: white;
}
.background-blue {
  background-color: #413eeb;
  color: white;
}
.container-sales {
  background-color: #e8e6e6;
  display: grid;
  grid-template-columns: 1fr;
}
.content-sales {
  display: grid;
  grid-template-columns: 2fr 0.5fr 0.5fr;
  grid-template-rows: 60px auto;
  grid-gap: 1rem;
  padding: 2rem;
  grid-template-areas:
    'title search add-sale'
    'sales sales sales';
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
.add-sale {
  display: grid;
  align-items: center;
  grid-area: add-sale;
}
.add-sale-button {
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
.add-sale-button:active {
  filter: grayscale(1);
  transition: 0.2s;
}
.fa-plus-circle {
  margin-right: 5px;
}
.sales {
  grid-area: sales;
}
.sales-table {
  border-collapse: collapse;
  width: 100%;
}
.sales-table th {
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
.sales-table td {
  font-family: 'Bebas';
  font-size: 30px;
  text-align: center;
  padding: 10px;
  border: 1px solid rgba(170, 32, 111, 1);
}
.status {
  border-radius: 10px;
  padding: 3px;
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
  .container-sales {
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
  .add-sale-button {
    width: 170px;
    font-size: 15px;
  }
  .sales-table th {
    font-size: 20px;
  }
  .sales-table td {
    font-size: 25px;
  }
}
@media (max-width: 1090px) {
  .sales-table th {
    font-size: 18px;
  }
  .sales-table td {
    font-size: 20px;
  }
}
@media (max-width: 940px) {
  .title h1 {
    font-size: 25px;
  }
  .search-field {
    width: 120px;
    font-size: 14px;
  }
  .add-sale-button {
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
  .add-sale-button {
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
