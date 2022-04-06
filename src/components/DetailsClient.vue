<template>
  <div class="container-details-client">
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
            <div class="info-item-info">Alexandre Harrison</div>
          </div>
          <div class="info-item">
            <div class="info-item-title"><h2>última compra</h2></div>
            <div class="info-item-line"></div>
            <div class="info-item-info">smartwatch m4</div>
          </div>
          <div class="info-item">
            <div class="info-item-title"><h2>compras feitas</h2></div>
            <div class="info-item-line"></div>
            <div class="info-item-info">5</div>
          </div>
          <div class="info-item">
            <div class="info-item-title"><h2>cpf</h2></div>
            <div class="info-item-line"></div>
            <div class="info-item-info">700.758.716-02</div>
          </div>
          <div class="info-item">
            <div class="info-item-title"><h2>telefone</h2></div>
            <div class="info-item-line"></div>
            <div class="info-item-info">73991013527</div>
          </div>
        </div>
        <hr class="separator" />
        <div class="address-info">
          <h2 class="group-title">informações de endereço</h2>
          <div class="info-item">
            <div class="info-item-title"><h2>endereço</h2></div>
            <div class="info-item-line"></div>
            <div class="info-item-info">Rua Venceslau Braz</div>
          </div>
          <div class="info-item">
            <div class="info-item-title"><h2>nº</h2></div>
            <div class="info-item-line"></div>
            <div class="info-item-info">302</div>
          </div>
          <div class="info-item">
            <div class="info-item-title"><h2>bairro</h2></div>
            <div class="info-item-line"></div>
            <div class="info-item-info">Santa Rita</div>
          </div>
          <div class="info-item">
            <div class="info-item-title"><h2>cep</h2></div>
            <div class="info-item-line"></div>
            <div class="info-item-info">45990782</div>
          </div>
          <div class="info-item">
            <div class="info-item-title"><h2>complemento</h2></div>
            <div class="info-item-line"></div>
            <div class="info-item-info">ap 02</div>
          </div>
          <div class="info-item">
            <div class="info-item-title"><h2>referência</h2></div>
            <div class="info-item-line"></div>
            <div class="info-item-info">rua da arena futgol</div>
          </div>
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
.container-details-client {
  background-color: #e8e6e6;
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
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  grid-template-rows: 50px auto;
  margin-top: 1rem;
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
  .address-info {
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
