import { useState } from 'react';
import { useList } from '../context/ListContext';
import { createItem } from '../services/grocery-list';

export default function AddItem({ handleAdd }) {
  const { setList } = useList();
  const [text, setText] = useState('');

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   handleAdd(text);
  //   setText('');
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const [resp] = await createItem(text);
      console.log(resp);
      setList((prevState) => [...prevState, resp]);
      handleAdd(text);
      setText('');
      alert('You have successfully added an item!');
    } catch {
      alert('Something went wrong! Please try again.');
    }
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
