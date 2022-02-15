const itemReducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return {};
    case 'delete':
      return {};
    case 'edit':
      return {};
    default:
      throw new Error(`this is not the ${action.type} i was looking for`);
  }
};

export { itemReducer };
