<template>
  <div class="container-add-clients">
    <div class="content-add-clients">
      <div class="title">
        <div class="icon" @click="$emit('update-page', 'Clients')">
          <i class="fas fa-backward"></i>
        </div>
        <h1>clientes</h1>
      </div>
      <div class="client-form">
        <div class="personal-info">
          <h2 class="group-title">informações pessoais</h2>
          <input
            type="text"
            class="input-field"
            placeholder="nome"
            v-model="nome"
          />
          <input
            type="text"
            class="input-field"
            placeholder="cpf"
            v-model="cpf"
            maxlength="11"
          />
          <input
            type="text"
            class="input-field"
            placeholder="telefone"
            v-model="telefone"
          />
        </div>
        <!-- <div class="address-info">
          <h2 class="group-title">endereço</h2>
          <input type="text" class="input-field" placeholder="rua" />
          <input type="text" class="input-field" placeholder="nº" />
          <input type="text" class="input-field" placeholder="bairro" />
          <input type="text" class="input-field" placeholder="cep" />
          <input type="text" class="input-field" placeholder="complemento" />
          <input
            type="text"
            class="input-field"
            placeholder="ponto de referência"
          />
        </div> -->
        <div class="buttons">
          <button class="submit-button" @click="createClient()">
            <i class="fas fa-plus-circle"></i>cadastrar
          </button>
          <button
            class="cancel-button"
            @click="$emit('update-page', 'Clients')"
          >
            cancelar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import { SET_LOADING } from '@/store/modules/loading';
import { createNewClientService } from '../services/clientsService';
import { useToast } from 'vue-toastification';
export default {
  setup() {
    const toast = useToast();
    return { toast };
  },
  data() {
    return {
      nome: '',
      cpf: '',
      telefone: '',
    };
  },
  methods: {
    ...mapMutations('loading', { setLoading: SET_LOADING }),
    async createClient() {
      try {
        this.setLoading(true);
        const client = await createNewClientService(
          this.nome,
          this.cpf,
          this.telefone
        );
        if (client) this.$emit('update-page', 'Clients');
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
.container-add-clients {
  background-color: #e8e6e6;
  display: grid;
  grid-template-columns: 1fr;
}
.content-add-clients {
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
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 1rem;
  grid-template-rows: 50px auto;
  grid-template-areas:
    'group-title group-title'
    'input-field input-field';
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
.address-info {
  display: grid;
  grid-template-columns: 1fr 0.1fr 1fr;
  grid-column-gap: 1rem;
  grid-template-rows: 50px auto;
  grid-template-areas:
    'group-title group-title group-title'
    'input-field . .';
  margin-top: 1rem;
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
  .container-add-clients {
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
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 1rem;
    grid-template-rows: 50px auto;
    grid-template-areas:
      'group-title'
      'input-field'
      'input-field';
  }
  .address-info {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1rem;
    grid-template-rows: 50px auto;
    grid-template-areas:
      'group-title group-title'
      'input-field . ';
    margin-top: 1rem;
  }
}
@media (max-width: 1090px) {
}
@media (max-width: 940px) {
  .address-info {
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 1rem;
    grid-template-rows: 50px auto;
    grid-template-areas:
      'group-title'
      'input-field';
    margin-top: 1rem;
  }
}
@media (max-width: 530px) {
}
@media (max-width: 415px) {
}
</style>
