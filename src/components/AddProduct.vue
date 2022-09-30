<template>
  <div class="container-add-product">
    <div class="content-add-product">
      <div class="title">
        <div class="icon" @click="$emit('update-page', 'Products')">
          <i class="fas fa-backward"></i>
        </div>
        <h1>adicionar produto</h1>
      </div>
      <div class="product-form">
        <div class="product-info">
          <input
            type="text"
            class="input-field"
            placeholder="nome do produto"
            v-model="produto"
          />
          <input
            type="number"
            class="input-field"
            placeholder="preço de custo"
            v-model="precoCusto"
          />
          <input
            type="number"
            class="input-field"
            placeholder="preço de venda"
            v-model="precoVenda"
          />
          <input
            type="text"
            class="input-field"
            placeholder="link externo"
            v-model="link"
          />
        </div>
        <div class="buttons">
          <button class="submit-button" @click="createProduct()">
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
import { useToast } from 'vue-toastification';
import { mapMutations } from 'vuex';
import { SET_LOADING } from '@/store/modules/loading';
import { createNewProductService } from '../services/productsService';
export default {
  setup() {
    const toast = useToast();
    return { toast };
  },
  data() {
    return {
      produto: '',
      precoCusto: '',
      precoVenda: '',
      link: '',
    };
  },
  methods: {
    ...mapMutations('loading', { setLoading: SET_LOADING }),
    async createProduct() {
      try {
        this.setLoading(true);
        const client = await createNewProductService(
          this.produto,
          this.precoCusto,
          this.precoVenda,
          this.link
        );
        if (client) this.$emit('update-page', 'Products');
      } catch (error) {
        console.log(error);
      } finally {
        this.setLoading(false);
      }
    },
  },
};
</script>

<style scoped>
.container-add-product {
  background-color: #e8e6e6;
  display: grid;
  grid-template-columns: 1fr;
}
.content-add-product {
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
  grid-template-columns: 2fr 1fr 1fr;
  grid-column-gap: 1rem;
  grid-template-rows: auto;
}
.group-title {
  margin: 0;
  font-family: 'Typo Round';
  grid-area: group-title;
}
.input-field {
  height: 40px;
  background-color: transparent;
  border-style: solid;
  border-width: 1px;
  border-color: rgba(170, 32, 111, 1);
  border-radius: 10px;
  font-family: 'Typo Round';
  font-size: 20px;
  padding-left: 10px;
  text-align: left;
  margin-bottom: 15px;
}
.input-field:focus {
  outline: none;
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
  .container-add-product {
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
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 1rem;
    grid-template-rows: 50px auto;
    grid-template-areas:
      'group-title'
      'input-field'
      'input-field';
  }
}
@media (max-width: 1090px) {
}
@media (max-width: 940px) {
}
@media (max-width: 530px) {
}
@media (max-width: 415px) {
}
</style>
