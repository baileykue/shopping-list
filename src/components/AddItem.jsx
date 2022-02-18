import { useState } from 'react';
import { useItem } from '../context/ItemContext';

export default function AddItem() {
  const [newItem, setNewItem] = useState('');
  const { handleAdd } = useItem();

  const handleSubmit = (event) => {
    event.preventDefault();
    setNewItem('');
    handleAdd(newItem);
  };

  return (
    <form>
      <label>
        New Item:
        <input
          type="text"
          aria-label="New Item Input"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
      </label>
      <button onClick={handleSubmit}>Add</button>
    </form>
  );
}
