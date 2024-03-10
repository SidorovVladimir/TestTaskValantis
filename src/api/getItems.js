import api from './index.js';

const getItems = (ids) => api.post(
  '',
  {
    action: 'get_items',
    params: { ids },
  },
);

export default getItems;
