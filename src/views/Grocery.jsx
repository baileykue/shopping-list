import { useReducer } from 'react';
import { itemReducer } from '../components/ItemReducer';

import AddItem from '../components/AddItem';
import ItemList from '../components/ItemList';

export default function Shopping() {
  const initialState = [];

  const [items, dispatch] = useReducer(itemReducer, initialState);

  const handleAdd = (text) => {
    dispatch({
      type: 'add',
      id: items.length + 1,
      text: text,
    });
  };

  const handleDelete = (itemId) => {
    dispatch({
      type: 'delete',
      id: itemId,
    });
  };

  const handleEdit = (item) => {
    dispatch({
      type: 'edit',
      item,
    });
  };

  return (
    <div>
      <h1>shop til you drop</h1>
      <AddItem handleAdd={handleAdd} />
      <ItemList
        items={items}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
}
