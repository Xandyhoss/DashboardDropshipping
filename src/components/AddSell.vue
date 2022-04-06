<template>
  <div class="container-add-sell">
    <div class="content-add-sell">
      <div class="title">
        <div class="icon" @click="$emit('update-page', 'Products')">
          <i class="fas fa-backward"></i>
        </div>
        <h1>criar venda</h1>
      </div>
      <div class="sell-form">
        <div class="sell-info">
          <select class="input-select">
            <option selected disabled>cliente</option>
            <option selected>cliente</option>
            <option selected>cliente</option>
            <option selected>cliente</option>
          </select>
          <select class="input-select">
            <option selected disabled>produto</option>
            <option selected>produto</option>
            <option selected>produto</option>
            <option selected>produto</option>
          </select>
        </div>
        <div class="buttons">
          <button class="submit-button">
            <i class="fas fa-plus-circle"></i>cadastrar
          </button>
          <button
            class="cancel-button"
            @click="$emit('update-page', 'Products')"
          >
            cancelar
          </button>
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
