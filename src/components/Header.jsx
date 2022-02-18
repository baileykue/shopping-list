import React from 'react';
import { useItem } from '../context/ItemContext';

export default function Header() {
  const { items, handleReset } = useItem();

  const handleSubmit = () => {
    handleReset(items);
  };

  return (
    <header>
      {`You have ${items.length} items on your grocery list`}
      <button onClick={handleSubmit}>clear list</button>
    </header>
  );
}
