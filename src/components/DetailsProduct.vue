<template>
  <div class="container-details-product">
    <div class="content-details-product">
      <div class="title">
        <div class="icon" @click="$emit('update-page', 'Products')">
          <i class="fas fa-backward"></i>
        </div>
        <h1>detalhes do produto</h1>
      </div>
      <div class="product-info">
        <div class="info-item">
          <div class="info-item-title"><h2>produto</h2></div>
          <div class="info-item-line"></div>
          <div class="info-item-info">Smartwatch m4</div>
        </div>
        <div class="info-item">
          <div class="info-item-title"><h2>custo</h2></div>
          <div class="info-item-line"></div>
          <div class="info-item-info">R$ 35,00</div>
        </div>
        <div class="info-item">
          <div class="info-item-title"><h2>venda</h2></div>
          <div class="info-item-line"></div>
          <div class="info-item-info">R$ 65,00</div>
        </div>
        <div class="info-item">
          <div class="info-item-title"><h2>ROI</h2></div>
          <div class="info-item-line"></div>
          <div class="info-item-info">85,7%</div>
        </div>
        <div class="info-item">
          <div class="info-item-title"><h2>unidades vendidas</h2></div>
          <div class="info-item-line"></div>
          <div class="info-item-info">8</div>
        </div>
        <div class="info-item">
          <div class="info-item-title"><h2>link externo</h2></div>
          <div class="info-item-line"></div>
          <div class="info-item-info">acesso</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped>
.container-details-product {
  background-color: #e8e6e6;
  display: grid;
  grid-template-columns: 1fr;
}
.content-details-product {
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
.product-info {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
  align-self: flex-start;
  grid-template-rows: auto;
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
  .container-details-product {
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
  .product-info {
    grid-template-columns: 1fr 1fr;
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
  .product-info {
    grid-template-columns: 1fr;
  }
  .title h1 {
    font-size: 30px;
  }
}
@media (max-width: 415px) {
  .title h1 {
    font-size: 22px;
  }
}
</style>
