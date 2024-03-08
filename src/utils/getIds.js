const getIds = (offset = 0, limit = Infinity) => (
  {
    action: 'get_ids',
    params: { offset, limit },
  }
);

export default getIds;
