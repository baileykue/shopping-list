import { useReducer } from 'react';

import AddItem from '../components/AddItem';
import ItemList from '../components/ItemList';

const initialItems = [
  { id: 0, text: 'Cheese ', is_complete: false },
  { id: 1, text: 'Wine', is_complete: false },
  { id: 2, text: 'Walnuts', is_complete: false },
];

export default function Shopping() {
  function itemReducer(items, action) {
    switch (action.type) {
      case 'add': {
        return [
          ...items,
          {
            id: action.id,
            text: action.text,
            is_complete: false,
          },
        ];
      }
      case 'edit': {
        return items.map((item) => {
          if (item.id === action.task.id) {
            return action.task;
          }
          return item;
        });
      }
      case 'delete': {
        return items.filter((item) => item.id !== action.id);
      }
      default: {
        throw Error(
          `this is not the action i was looking for: ${action.type} not recognized`
        );
      }
    }
  }

  const [items, dispatch] = useReducer(itemReducer, initialItems);

  const handleAdd = (text) => {
    dispatch({
      type: 'added',
      id: items.length + 1,
      text,
    });
  };

  const handleEdit = (task) => {
    dispatch({
      type: 'changed',
      task,
    });
  };

  const handleDelete = (taskId) => {
    dispatch({
      type: 'deleted',
      id: taskId,
    });
  };

  return (
    <div>
      <h1>grocery shop til you drop</h1>
      <AddItem handleAdd={handleAdd} />
      <ItemList
        items={items}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
}
