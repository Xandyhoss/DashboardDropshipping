import axios from '@/utils/axios.js';
import { useToast } from 'vue-toastification';
const toast = useToast();

export const getProductsService = async () => {
  const products = await axios.get('/products');
  return products;
};

export const createNewProductService = async (
  produto,
  valorCusto,
  valorVenda,
  link
) => {
  try {
    const product = await axios.post('/products', {
      produto,
      valorCusto,
      valorVenda,
      link,
    });
    toast.success('Produto criado com sucesso!', { timeout: 2000 });
    return product;
  } catch ({ response }) {
    console.log(response);
    const getMessage = response.data.errors[0].message;
    toast.error(getMessage, { timeout: 2000 });
  }
};
