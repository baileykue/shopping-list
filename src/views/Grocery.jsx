import React from 'react';
import AddItem from '../components/AddItem';
import ItemList from '../components/ItemList';

export default function Shopping() {
  return (
    <div>
      <h1>shop til you drop</h1>
      <AddItem />
      <ItemList />
    </div>
  );
}
