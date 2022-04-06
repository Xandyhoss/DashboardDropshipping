<template>
  <div class="container-login">
    <div class="container-logo">
      <img src="@/assets/img/logo.png" class="logo" />
    </div>
    <div class="form">
      <p class="title">PAINEL DE CONTROLE</p>
      <div class="form-group">
        <input type="text" placeholder="Usuário" class="form-field" />
        <input type="password" placeholder="Senha" class="form-field" />
        <button
          type="submit"
          class="submit-button"
          @click="$router.push({ path: '/dashboard' })"
        >
          Entrar
        </button>
      </div>
    </div>
    <div class="bottomline"></div>
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
.container-login {
  display: grid;
  grid-template-rows: 220px 1fr 5px;
  border-radius: 20px 20px 0px 0px;
  align-self: center;
  justify-self: center;
  width: 480px;
  height: 560px;
  background-color: white;
}
.bottomline {
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
.container-logo {
  width: 60%;
  height: 100%;
  justify-self: center;
}
.logo {
  width: 100%;
}
.form {
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: center;
}
.form-group {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.title {
  align-self: center;
  color: #161616;
  font-size: 28px;
  font-family: 'Typo Round';
  margin-top: 0px;
  text-align: center;
}
.form-field {
  width: 80%;
  align-self: center;
  border: none;
  border-bottom: 1px solid #636363;
  font-family: 'Rounded Elegance';
  font-size: 25px;
  margin-bottom: 30px;
  text-align: center;
}
.form-field:focus {
  outline: none;
}
.form-field::placeholder {
  text-align: center;
}
.submit-button {
  background: rgb(231, 47, 93);
  background: linear-gradient(
    90deg,
    rgba(231, 47, 93, 1) 10%,
    rgba(200, 37, 103, 1) 56%,
    rgba(170, 32, 111, 1) 100%
  );
  border: none;
  outline: none;
  font-size: 20px;
  padding: 10px;
  border-radius: 20px;
  color: white;
  font-family: 'Rounded Elegance';
  width: 30%;
  align-self: center;
  transition: 0.2s;
}
.submit-button:active {
  filter: grayscale(1);
  transition: 0.2s;
}

@media (max-width: 650px) {
  .container-login {
    display: grid;
    grid-template-rows: 220px 1fr 5px;
    border-radius: 20px 20px 0px 0px;
    align-self: center;
    justify-self: center;
    width: 80%;
    height: 560px;
    background-color: white;
  }
  .container {
    width: 70%;
  }
  .container-logo {
    width: 65%;
    height: 100%;
    justify-self: center;
  }
  .logo {
    width: 100%;
  }
}
@media (max-width: 500px) {
  .container-logo {
    width: 85%;
    height: 100%;
    justify-self: center;
  }
}
@media (max-width: 400px) {
  .container-logo {
    width: 100%;
    height: 100%;
    justify-self: center;
  }
  .submit-button {
    width: 50%;
  }
}
</style>
