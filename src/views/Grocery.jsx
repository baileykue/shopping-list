import { useReducer } from 'react';
import { itemReducer } from '../components/ItemReducer';

import AddItem from '../components/AddItem';
import ItemList from '../components/ItemList';
import { ListProvider } from '../context/ListContext';

export default function Shopping() {
  const initialState = [];

  const [items, dispatch] = useReducer(itemReducer, initialState);

  const handleAdd = (text) => {
    dispatch({
      type: 'add',
      id: items.length + 1,
      item: text,
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
      item: item,
    });
  };

  return (
    <div>
      <h1>shop til you drop</h1>
      <ListProvider>
        <AddItem handleAdd={handleAdd} />
        <ItemList handleEdit={handleEdit} handleDelete={handleDelete} />
      </ListProvider>
    </div>
  );
}
