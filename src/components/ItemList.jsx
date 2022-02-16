import React, { useState } from 'react';
import { useList } from '../context/ListContext';
import { updateItem, deleteById } from '../services/grocery-list';

import Item from './Item';

export default function ItemList({ handleDelete, handleEdit }) {
  const { list, setList } = useList();
  const [updateText, setUpdateText] = useState('');

  const handleEditing = async (item) => {
    await updateItem(item);
    setList((prevState) =>
      prevState.map((it) =>
        it.id === item.id ? { ...item, item: item.item } : it
      )
    );
    handleEdit(item.item);
  };

  const handleDeleting = async (id) => {
    try {
      await deleteById(id);
      setList(list.filter((i) => i.id !== id));
      handleDelete(id);
      alert('You have successfully removed this task!');
    } catch {
      alert('Something went wrong! Please try again.');
    }
  };

  return (
    <div>
      {list.map((item) => (
        <div key={item.id}>
          <Item
            item={item}
            handleEditing={handleEditing}
            handleDeleting={handleDeleting}
            setTextEdit={setTextEdit}
          />
        </div>
      ))}
    </div>
  );
}
