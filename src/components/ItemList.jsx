import React from 'react';

export default function ItemList({ handleDelete, handleEdit, items }) {
  return (
    <div>
      {items.map((item) => (
        <label key={item.id}>
          <input type="checkbox" />
          {item.item}
        </label>
      ))}
    </div>
  );
}
