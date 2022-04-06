<template>
  <div class="container-nav">
    <div class="logo-container">
      <img src="@/assets/img/logo-h.png" class="logo" />
    </div>
    <div class="menu">
      <ul class="nav">
        <li @click="$emit('update-page', 'General')">
          <i><img src="@/assets/img/icons/general.png" /></i>Visão Geral
        </li>
        <li @click="$emit('update-page', 'Clients')">
          <i><img src="@/assets/img/icons/client.png" /></i>Clientes
        </li>
        <li @click="$emit('update-page', 'Products')">
          <i><img src="@/assets/img/icons/products.png" /></i>Produtos
        </li>
        <li @click="$emit('update-page', 'Sells')">
          <i><img src="@/assets/img/icons/sales.png" /></i>Vendas
        </li>
        <li @click="$emit('update-page', 'Report')">
          <i><img src="@/assets/img/icons/reports.png" /></i>Relatórios
        </li>
        <li @click="$router.push({ path: '/' })">
          <i><img src="@/assets/img/icons/logout.png" /></i>Logout
        </li>
      </ul>
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
.container-nav {
  width: 350px;
  display: grid;
  grid-template-rows: 150px 1fr;
  background-color: #161616;
}
@media (max-width: 1000px) {
  .container-nav {
    width: 270px;
  }
}
.logo-container {
  display: grid;
  align-items: center;
  justify-items: center;
}
.logo {
  width: 70%;
}
.menu {
  display: flex;
  justify-content: center;
}
.nav {
  list-style: none;
  width: 70%;
  padding: 0;
  margin-top: 0;
}
.nav li {
  color: white;
  font-family: 'Rounded Elegance';
  font-size: 25px;
  margin-bottom: 12px;
  padding: 10px;
  transition: 0.3s all ease-in-out;
}
.nav li:hover {
  background-color: #313131;
  border-radius: 10px;
  transition: 0.3s all ease-in-out;
}
.nav li i {
  margin-right: 5px;
}
</style>
