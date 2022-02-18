import { useState } from 'react';

export default function AddItem({ handleAdd }) {
  const [newItem, setNewItem] = useState('');

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
