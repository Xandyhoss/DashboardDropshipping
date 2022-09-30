import axios from '@/utils/axios.js';

const getSellsService = async () => {
  const sells = await axios.get('/sells');
  return sells;
};

export { getSellsService };
