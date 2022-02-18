import { createContext, useReducer, useContext } from 'react';

const initialItems = [
  { id: 0, text: 'Cheese ', is_complete: false },
  { id: 1, text: 'Wine', is_complete: false },
  { id: 2, text: 'Walnuts', is_complete: false },
  { id: 3, text: 'Crackers', is_complete: false },
];

export const ItemContext = createContext();

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
    case 'reset': {
      return (items = []);
    }
    default: {
      throw Error(
        `this is not the action i was looking for: ${action.type} not recognized`
      );
    }
  }
}

const ItemProvider = ({ children }) => {
  const [items, dispatch] = useReducer(itemReducer, initialItems);

  const handleAdd = (text) => {
    dispatch({
      type: 'add',
      id: items.length + 1,
      text,
    });
  };

  const handleEdit = (task) => {
    dispatch({
      type: 'edit',
      task,
    });
  };

  const handleDelete = (taskId) => {
    dispatch({
      type: 'delete',
      id: taskId,
    });
  };

  const handleReset = (items) => {
    dispatch({
      type: 'reset',
      items,
    });
  };

  const itemValue = { items, handleEdit, handleAdd, handleDelete, handleReset };

  return (
    <ItemContext.Provider value={itemValue}>{children}</ItemContext.Provider>
  );
};

const useItem = () => {
  const context = useContext(ItemContext);

  if (context === undefined) {
    throw new Error('useItem must be used within a ItemProvider');
  }

  return context;
};

export { ItemProvider, useItem };
