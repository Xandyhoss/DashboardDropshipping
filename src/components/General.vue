<template>
  <div class="container-general">
    <div class="content-general">
      <div class="billed">
        <div class="title">MONTANTE FATURADO</div>
        <div class="value">R${{ getTotalReceived.toFixed(2) }}</div>
      </div>
      <div class="pending">
        <div class="title">MONTANTE A RECEBER</div>
        <div class="value">R${{ getTotalPending.toFixed(2) }}</div>
      </div>
      <div class="general-info">
        <div class="box">
          <div class="icon">
            <img src="@/assets/img/icons/big-sales.png" />
          </div>
          <div class="quantity">{{ finishedSells.length }}</div>
          <div class="info-title">VENDAS CONCLUÍDAS</div>
        </div>
        <div class="box">
          <div class="icon">
            <img src="@/assets/img/icons/big-sales.png" />
          </div>
          <div class="quantity">{{ pendingSells.length }}</div>
          <div class="info-title">VENDAS PENDENTES</div>
        </div>
        <div class="box">
          <div class="icon">
            <img src="@/assets/img/icons/big-products.png" />
          </div>
          <div class="quantity">{{ this.products.length }}</div>
          <div class="info-title">PRODUTOS CADASTRADOS</div>
        </div>
        <div class="box">
          <div class="icon">
            <img src="@/assets/img/icons/big-clients.png" />
          </div>
          <div class="quantity">{{ this.clients.length }}</div>
          <div class="info-title">CLIENTES CADASTRADOS</div>
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
  methods: {},
  computed: {
    ...mapState({ clients: (state) => state.clients.clients }),
    ...mapState({ products: (state) => state.products.products }),
    ...mapState({ sells: (state) => state.sells.sells }),
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
        if (value.status !== 'pending_payment') {
          return value;
        }
      }
      return this.sells.filter(getFinished);
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
  grid-template-rows: 180px 150px;
  grid-template-areas:
    'billed pending'
    'general-info general-info';
}
.title {
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
.general-info {
  display: grid;
  grid-template-columns: 0.25fr 0.25fr 0.25fr 0.25fr;
  grid-gap: 1rem;
  grid-area: general-info;
}
.box {
  display: grid;
  grid-template-columns: 0.5fr 0.5fr;
  grid-template-rows: 0.6fr 0.4fr;
  grid-template-areas:
    'icon quantity'
    'info-title info-title';
  height: auto;
  background: rgb(231, 47, 93);
  background: linear-gradient(
    90deg,
    rgba(231, 47, 93, 1) 10%,
    rgba(200, 37, 103, 1) 56%,
    rgba(170, 32, 111, 1) 100%
  );
}
.icon {
  display: flex;
  align-items: flex-start;
  grid-area: icon;
  padding: 10px;
}
.quantity {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  color: white;
  font-size: 60px;
  font-family: 'Bebas';
  padding: 10px;
  grid-area: quantity;
}
.info-title {
  color: white;
  font-size: 35px;
  font-family: 'Typo Round';
  padding: 10px;
  line-height: 95%;
  grid-area: info-title;
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
  .info-title {
    font-size: 28px;
  }
}

@media (max-width: 1300px) {
  .info-title {
    font-size: 20px;
    align-self: flex-end;
  }
  .icon img {
    width: 80%;
  }
  .quantity {
    font-size: 45px;
  }
}

@media (max-width: 1090px) {
  .content-general {
    display: grid;
    grid-gap: 1rem;
    padding: 2rem;
    grid-template-columns: 0.5fr 0.5fr;
    grid-template-rows: 150px 110px;
    grid-template-areas:
      'billed pending'
      'general-info general-info';
  }
  .info-title {
    font-size: 18px;
  }
  .title {
    font-size: 20px;
  }
  .value {
    font-size: 60px;
  }
}

@media (max-width: 940px) {
  .content-general {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      'billed'
      'pending'
      'general-info'
      'general-info';
  }
  .general-info {
    display: grid;
    grid-template-columns: 0.5fr 0.5fr;
    grid-gap: 1rem;
    grid-area: general-info;
  }
  .info-title {
    font-size: 30px;
    align-self: flex-end;
  }
  .icon img {
    width: 65%;
  }
  .quantity {
    font-size: 60px;
  }
  .title {
    font-size: 30px;
  }
  .value {
    font-size: 80px;
  }
}
@media (max-width: 530px) {
  .content-general {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
  .general-info {
    grid-template-columns: 1fr;
  }
  .icon img {
    width: 30%;
  }
}
@media (max-width: 415px) {
  .general-info {
    grid-template-columns: 1fr;
  }
  .icon img {
    width: 60%;
  }
  .title {
    font-size: 20px;
  }
  .value {
    font-size: 60px;
  }
}
</style>
