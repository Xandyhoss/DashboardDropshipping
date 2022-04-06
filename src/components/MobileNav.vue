<template>
  <div :class="['container-mobile', { open: menuOpen }]">
    <div class="logo-mobile">
      <img src="@/assets/img/logo-h.png" class="logo" />
    </div>
    <div class="hamburguer">
      <div
        :class="['hamburguer-wrapper', { open: menuOpen }]"
        @click="handleNav"
      >
        <div :class="['bar']"></div>
      </div>
    </div>
    <div :class="['menu', { open: menuOpen }]">
      <ul class="nav">
        <li
          @click="
            $emit('update-page', 'General');
            this.menuOpen = false;
          "
        >
          <i><img src="@/assets/img/icons/general.png" /></i>Visão Geral
        </li>
        <li
          @click="
            $emit('update-page', 'Clients');
            this.menuOpen = false;
          "
        >
          <i><img src="@/assets/img/icons/client.png" /></i>Clientes
        </li>
        <li
          @click="
            $emit('update-page', 'Products');
            this.menuOpen = false;
          "
        >
          <i><img src="@/assets/img/icons/products.png" /></i>Produtos
        </li>
        <li
          @click="
            $emit('update-page', 'Sells');
            this.menuOpen = false;
          "
        >
          <i><img src="@/assets/img/icons/sales.png" /></i>Vendas
        </li>
        <li
          @click="
            $emit('update-page', 'Report');
            this.menuOpen = false;
          "
        >
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
  data() {
    return { menuOpen: false };
  },
  methods: {
    handleNav() {
      if (this.menuOpen === false) {
        this.menuOpen = true;
      } else {
        this.menuOpen = false;
      }
    },
  },
};
</script>

<style scoped>
.container-mobile {
  height: 90px;
  background-color: #161616;
  display: grid;
  grid-template-rows: 90px 1fr;
  grid-template-columns: 240px 1fr;
  transition: all 0.5s ease-in-out;
  overflow: hidden;
}
.container-mobile.open {
  height: 500px;
  grid-template-rows: 90px 1fr;
  transition: all 0.5s ease-in-out;
}
.logo-mobile {
  display: grid;
  justify-items: center;
  align-items: center;
}
.logo {
  width: 80%;
}
.hamburguer {
  display: grid;
  align-items: center;
  justify-items: flex-end;
  padding-inline: 30px;
}
.hamburguer-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
}
.bar {
  width: 100%;
  height: 3px;
  margin-bottom: 5px;
  border-radius: 2px;
  background-color: white;
  transition: all 0.6s ease-in-out;
}
.bar::before,
.bar::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 3px;
  margin-bottom: 5px;
  border-radius: 2px;
  background-color: white;
  transition: all 0.5s ease-in-out;
}
.bar::before {
  transform: translateY(-10px);
}
.bar::after {
  transform: translateY(10px);
}

/* ANIMATION HAMBURGUER */
.hamburguer-wrapper.open .bar {
  background-color: transparent;
}
.hamburguer-wrapper.open .bar::before {
  transform: rotate(45deg);
}
.hamburguer-wrapper.open .bar::after {
  transform: rotate(-45deg);
}

.menu {
  grid-column-start: 1;
  grid-column-end: 3;
  overflow: hidden;
  display: flex;
  opacity: 1;
  justify-content: center;
  transition: all 0.5s ease-in-out;
}
.menu.open {
  grid-column-start: 1;
  grid-column-end: 3;
  height: 400px;
  overflow: hidden;
  opacity: 1;
  transition: all 0.5s ease-in-out;
}
.nav {
  display: flex;
  flex-direction: column;
  align-items: center;
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
