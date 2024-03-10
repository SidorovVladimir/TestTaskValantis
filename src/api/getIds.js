import api from './index.js';

const getIds = (offset = 0, limit = Infinity) => api.post(
  '',
  {
    action: 'get_ids',
    params: { offset, limit },
  },
);

export default getIds;
