import React from 'react';
import { useList } from '../context/ListContext';

export default function ItemList({ handleDelete, handleEdit }) {
  const { list } = useList();

  return (
    <div>
      {list.map((item) => (
        <div key={item.id}>
          <label>
            <input type="checkbox" />
            {item.item}
          </label>
          <button>edit</button>
          <button>delete</button>
        </div>
      ))}
    </div>
  );
}
