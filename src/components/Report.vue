<template>
  <div class="container-general">
    <div class="content-general">
      <div class="title"><h1>relatórios</h1></div>
      <div class="billed">
        <div class="report-title">MONTANTE FATURADO</div>
        <div class="value">R${{ getTotalReceived.toFixed(2) }}</div>
      </div>
      <div class="pending">
        <div class="report-title">MONTANTE A RECEBER</div>
        <div class="value">R${{ getTotalPending.toFixed(2) }}</div>
      </div>
      <div class="report-info">
        <div class="report-item">
          <div class="report-item-title"><h2>mais vendido</h2></div>
          <div class="report-item-line"></div>
          <div class="report-item-info">{{ getMostSoldProduct() }}</div>
        </div>
        <div class="report-item">
          <div class="report-item-title"><h2>vendas concluídas</h2></div>
          <div class="report-item-line"></div>
          <div class="report-item-info">{{ finishedSells.length }}</div>
        </div>
        <div class="report-item">
          <div class="report-item-title"><h2>vendas em aberto</h2></div>
          <div class="report-item-line"></div>
          <div class="report-item-info">{{ pendingSells.length }}</div>
        </div>
        <div class="report-item">
          <div class="report-item-title"><h2>vendas canceladas</h2></div>
          <div class="report-item-line"></div>
          <div class="report-item-info">{{ canceledSells.length }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  setup() {
    return {};
  },
  computed: {
    ...mapState({ sells: (state) => state.sells.sells }),
    ...mapState({ products: (state) => state.products.products }),
    pendingSells() {
      function getPending(value) {
        if (value.status === 'pending_payment') {
          return value;
        }
      }
      return this.sells.filter(getPending);
    },
    finishedSells() {
      function getFinished(value) {
        if (value.status === 'finished') {
          return value;
        }
      }
      return this.sells.filter(getFinished);
    },
    canceledSells() {
      function getCanceled(value) {
        if (value.status === 'canceled') {
          return value;
        }
      }
      return this.sells.filter(getCanceled);
    },
    getTotalReceived() {
      const finishedSells = this.finishedSells;
      let totalReceived = finishedSells.reduce(function (accumulator, sell) {
        return accumulator + sell.value;
      }, 0);
      return totalReceived;
    },
    getTotalPending() {
      const pendingSells = this.pendingSells;
      let totalPending = pendingSells.reduce(function (accumulator, sell) {
        return accumulator + sell.value;
      }, 0);
      return totalPending;
    },
  },
  beforeMount() {
    this.$emit('updateData');
  },
  methods: {
    getMostSoldProduct() {
      const products = this.products.sort(
        (a, b) => b.vendas.length - a.vendas.length
      );
      if (products.length > 0 && products[0].vendas.length > 0)
        return products[0].produto;
      return 'Nenhum';
    },
  },
};
</script>

<style scoped>
.container-general {
  background-color: #e8e6e6;
  display: grid;
  grid-template-columns: 1fr;
}
.content-general {
  display: grid;
  grid-gap: 1rem;
  padding: 2rem;
  grid-template-columns: 0.5fr 0.5fr;
  grid-template-rows: 60px 180px 150px;
  grid-template-areas:
    'title title'
    'billed pending'
    'report-info report-info';
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
.report-title {
  display: grid;
  background: rgb(231, 47, 93);
  background: linear-gradient(
    90deg,
    rgba(231, 47, 93, 1) 10%,
    rgba(200, 37, 103, 1) 56%,
    rgba(170, 32, 111, 1) 100%
  );
  font-size: 30px;
  font-family: 'Typo Round';
  padding: 10px;
  color: white;
  justify-items: center;
}
.value {
  display: grid;
  margin-top: -3px;
  border: solid;
  border-image-slice: 1;
  border-width: 3px;
  border-image-source: linear-gradient(
    90deg,
    rgba(231, 47, 93, 1) 10%,
    rgba(200, 37, 103, 1) 56%,
    rgba(170, 32, 111, 1) 100%
  );
  font-size: 80px;
  font-family: 'Bebas';
  padding: 10px;
  color: #161616;
  justify-items: center;
}
.billed {
  display: grid;
  grid-template-rows: auto 1fr;
  grid-area: billed;
}
.pending {
  display: grid;
  grid-template-rows: auto 1fr;
  grid-area: pending;
}
.report-info {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 90px;
  grid-gap: 1rem;
  grid-area: report-info;
  margin-top: 1rem;
}
.report-item {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
}
.report-item-title h2 {
  font-family: 'Typo Round';
  margin: 0px;
}
.report-item-info {
  font-family: 'Bebas';
  font-size: 35px;
}
.report-item-line {
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
  .container-general {
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

@media (max-width: 1090px) {
  .content-general {
    display: grid;
    grid-gap: 1rem;
    padding: 2rem;
    grid-template-columns: 0.5fr 0.5fr;
    grid-template-rows: 60px 150px 110px;
    grid-template-areas:
      'title title'
      'billed pending'
      'report-info report-info';
  }
  .report-info {
    grid-template-columns: 1fr 1fr;
  }
  .report-title {
    font-size: 25px;
  }
}

@media (max-width: 940px) {
  .content-general {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      'title'
      'billed'
      'pending'
      'report-info';
  }
  .report-info {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
    grid-area: report-info;
  }
}
@media (max-width: 530px) {
}
@media (max-width: 415px) {
}
</style>
