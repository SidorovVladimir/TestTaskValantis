export const removeDuplicatesIds = (Ids) => [...new Set(Ids)];

export const removeDuplicatesItems = (items) => items
  .filter((item, index) => items
    .findIndex((i) => i.id === item.id) === index);
