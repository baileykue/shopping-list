import React, { useState } from 'react';

import Item from './Item';

export default function ItemList({ handleDelete, handleEdit, items }) {
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
