import { useState } from 'react';

export default function AddItem({ handleAdd }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdd(text);
    setText('');
  };

  return (
    <form>
      <label>
        New Item:
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      <button onClick={handleSubmit}>Add</button>
    </form>
  );
}
