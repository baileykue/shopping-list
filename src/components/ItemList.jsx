import React from 'react';
import { useList } from '../context/ListContext';
import { editItem, updateItem } from '../services/grocery-list';

export default function ItemList({ handleDelete, handleEdit }) {
  const { list, setList } = useList();

  const handleCheck = async (task) => {
    await updateItem(task.id, !task.is_complete);
    setList((prevState) =>
      prevState.map((item) =>
        item.id === task.id ? { ...task, is_complete: !task.is_complete } : item
      )
    );
  };

  const handleEditing = async (task) => {
    await editItem(task.id, task.item);
    setList((prevState) =>
      prevState.map((item) =>
        item.id === task.id ? { ...task, item: task.item } : item
      )
    );
  };

  const handleDeleting = async (id) => {
    try {
      await deleteById(id);
      setList(toDos.filter((i) => i.id !== id));
      alert('You have successfully removed this task!');
    } catch {
      alert('Something went wrong! Please try again.');
    }
  };

  return (
    <div>
      {list.map((item) => (
        <div key={item.id}>
          <label>
            <input
              type="checkbox"
              checked={item.is_completed}
              onChange={(e) => {
                handleCheck({
                  ...item,
                  is_completed: e.target.checked,
                });
              }}
            />
            {item.item}
          </label>
          <button onClick={() => handleEditing(item)}>edit</button>
          <button onClick={() => handleDeleting(item.id)}>delete</button>
        </div>
      ))}
    </div>
  );
}
