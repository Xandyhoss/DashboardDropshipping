<template>
  <div class="container-products">
    <div class="content-products">
      <div class="title"><h1>produtos</h1></div>
      <div class="search">
        <input type="text" class="search-field" placeholder="procurar" />
      </div>
      <div class="add-product">
        <button
          class="add-product-button"
          @click="$emit('update-page', 'AddProduct')"
        >
          <i class="fas fa-plus-circle"></i>adicionar produto
        </button>
      </div>
      <div class="products">
        <table class="products-table">
          <tr>
            <th class="top-left">id</th>
            <th>produto</th>
            <th class="hide">custo</th>
            <th class="hide">preço de venda</th>
            <th class="hide">vendas</th>
            <th>link externo</th>
            <th class="top-right">opções</th>
          </tr>
          <tr v-for="product in products" :key="product.id">
            <td>01</td>
            <td
              class="cursor-pointer"
              @click="$emit('update-page', 'DetailsProduct')"
            >
              {{ product.produto }}
            </td>
            <td class="hide">R$ {{ product.valorCusto.toFixed(2) }}</td>
            <td class="hide">R$ {{ product.valorVenda.toFixed(2) }}</td>
            <td class="hide">{{ product.vendas.length }}</td>
            <td>
              <a :href="product.link" target="_blank"
                ><i class="fas fa-link icon"></i
              ></a>
            </td>
            <td>
              <i class="fas fa-edit icon"></i>
              <i class="fas fa-trash icon"></i>
            </td>
          </tr>
        </table>
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
    ...mapState({ products: (state) => state.products.products }),
  },
  beforeMount() {
    this.$emit('updateData');
  },
};
</script>

<style scoped>
.container-products {
  background-color: #e8e6e6;
  display: grid;
  grid-template-columns: 1fr;
}
.content-products {
  display: grid;
  grid-template-columns: 2fr 0.5fr 0.5fr;
  grid-template-rows: 60px auto;
  grid-gap: 1rem;
  padding: 2rem;
  grid-template-areas:
    'title search add-product'
    'products products products';
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
.add-product {
  display: grid;
  align-items: center;
  grid-area: add-product;
}
.add-product-button {
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
.add-product-button:active {
  filter: grayscale(1);
  transition: 0.2s;
}
.fa-plus-circle {
  margin-right: 5px;
}
.products {
  grid-area: products;
}
.products-table {
  border-collapse: collapse;
  width: 100%;
}
.products-table th {
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
  color: black;
}
.products-table td {
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
@media (min-width: 1920px) {
  .container-products {
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
  .add-product-button {
    width: 170px;
    font-size: 15px;
  }
  .products-table th {
    font-size: 20px;
  }
  .products-table td {
    font-size: 25px;
  }
}
@media (max-width: 1090px) {
  .products-table th {
    font-size: 18px;
  }
  .products-table td {
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
  .add-product-button {
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
  .add-product-button {
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
