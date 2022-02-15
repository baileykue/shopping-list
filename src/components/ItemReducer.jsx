const itemReducer = (items, { type, id, text, task }) => {
  switch (type) {
    case 'add':
      return [...items, { id: id, item: text, done: false }];
    case 'delete':
      return items.filter((item) => item.id !== id);
    case 'edit':
      return items.map((item) => {
        if (item.id === task.id) {
          return task;
        }
        return item;
      });
    default:
      throw new Error(`this is not the ${type} i was looking for`);
  }
};

export { itemReducer };
