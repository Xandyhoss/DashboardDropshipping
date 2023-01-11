import axios from '@/utils/axios.js';
import { useToast } from 'vue-toastification';
const toast = useToast();

const getSellsService = async () => {
  const sells = await axios.get('/sells');
  return sells;
};

const createNewSellService = async (clientId, addressId, productsIds) => {
  try {
    const sell = await axios.post('/sell', {
      clientId,
      addressId,
      productsIds,
    });
    toast.success('Venda criada com sucesso!', { timeout: 2000 });
    return sell;
  } catch ({ response }) {
    console.log(response);
    const getMessage = response.data.errors[0].message;
    toast.error(getMessage, { timeout: 2000 });
  }
};

export { getSellsService, createNewSellService };
