import { useState } from 'react';

export default function Item({ item, handleDelete, handleEdit }) {
  const [edit, setEdit] = useState(false);

  const handleSubmit = () => {
    setEdit(false);
    handleEdit(item);
  };

  return (
    <div>
      <label>
        <input type="checkbox" />
        {edit ? (
          <>
            <input type="text" defaultValue={item.text} />
            <button onClick={handleSubmit}>save</button>
          </>
        ) : (
          <>
            <p>{item.text}</p>
            <button onClick={() => setEdit(true)}>edit</button>
          </>
        )}
      </label>
      <button onClick={() => handleDelete(item.id)}>delete</button>
    </div>
  );
}
