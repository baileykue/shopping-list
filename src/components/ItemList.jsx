import React, { useState } from 'react';
import { useItem } from '../context/ItemContext';

import Item from './Item';

export default function ItemList() {
  const { items, handleEdit, handleDelete } = useItem();

  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <Item
            item={item}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </div>
      ))}
    </div>
  );
}
