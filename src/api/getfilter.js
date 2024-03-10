import api from './index.js';

const getFilter = (category, value) => api.post(
  '',
  {
    action: 'filter',
    params: { [category]: value },
  },
);

export default getFilter;
