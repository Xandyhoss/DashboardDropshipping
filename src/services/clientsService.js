import axios from '@/utils/axios.js';
import { useToast } from 'vue-toastification';
const toast = useToast();

export const getClientsService = async () => {
  const clients = await axios.get('/clients');
  return clients;
};

export const getClientByIdService = async (id) => {
  try {
    const client = await axios.get(`/clients/${id}`);
    return client.data;
  } catch (error) {
    console.log(error.response);
  }
};

export const createNewClientService = async (nome, cpf, telefone) => {
  try {
    const client = await axios.post('/clients', { nome, cpf, telefone });
    toast.success('Cliente criado com sucesso!', { timeout: 2000 });
    return client;
  } catch ({ response }) {
    console.log(response);
    const getMessage = response.data.errors[0].message;
    toast.error(getMessage, { timeout: 2000 });
  }
};
