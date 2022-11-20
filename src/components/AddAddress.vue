<template>
  <div class="container">
    <div class="title">
      <h1>adicionar endereço</h1>
      <div @click="$emit('toggle-modal')"><i class="icon fas fa-times" /></div>
    </div>
    <div class="form">
      <input
        type="text"
        class="input-field"
        placeholder="endereço"
        v-model="endereco"
      />
      <input
        type="number"
        class="input-field"
        placeholder="número"
        v-model="numero"
      />
      <input
        type="text"
        class="input-field"
        placeholder="bairro"
        v-model="bairro"
      />
      <input type="text" class="input-field" placeholder="cep" v-model="cep" />
      <input
        type="text"
        class="input-field"
        placeholder="complemento"
        v-model="complemento"
      />
      <input
        type="text"
        class="input-field"
        placeholder="referência"
        v-model="referencia"
      />
      <input
        type="text"
        class="input-field"
        placeholder="cidade"
        v-model="cidade"
      />
    </div>
    <div class="buttons">
      <button class="submit-button" @click="createAddress()">
        <i class="fas fa-plus-circle"></i>cadastrar
      </button>
    </div>
  </div>
</template>

<script>
import { createNewAddressService } from '@/services/clientsService';
import { mapMutations } from 'vuex';
import { SET_LOADING } from '@/store/modules/loading';
import { useToast } from 'vue-toastification';
export default {
  props: ['id'],
  setup() {
    const toast = useToast();
    return { toast };
  },
  data() {
    return {
      endereco: '',
      numero: '',
      bairro: '',
      cep: '',
      complemento: '',
      referencia: '',
      cidade: '',
      renderComponent: true,
    };
  },
  methods: {
    ...mapMutations('loading', { setLoading: SET_LOADING }),
    async createAddress() {
      console.log({
        id: this.id,
        endereco: this.endereco,
        numero: this.numero,
        bairro: this.bairro,
        cep: this.cep,
        complemento: this.complemento,
        referencia: this.referencia,
        cidade: this.cidade,
      });
      try {
        this.setLoading(true);
        const address = await createNewAddressService(
          this.id,
          this.endereco,
          this.numero,
          this.bairro,
          this.cep,
          this.complemento,
          this.referencia,
          this.cidade
        );
        if (address) this.$emit('update-page');
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
.container {
  background-color: white;
  width: 80%;
  height: auto;
  border-radius: 10px;
  padding: 10px;
  box-sizing: border-box;
}
.title {
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
  margin-bottom: 1rem;
}
.title h1 {
  margin: 0;
  color: #161616;
  font-family: 'Typo Round';
  font-size: 40px;
}

.form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;
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
  width: 100%;
  display: flex;
  justify-content: flex-end;
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
</style>
