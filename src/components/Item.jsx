import { useState } from 'react';

export default function Item({ item }) {
  const [edit, setEdit] = useState(false);

  const handleSubmit = () => {
    setEdit(false);
    handleEditing(item);
  };

  return (
    <div>
      <label>
        <input type="checkbox" checked={item.is_completed} />
        {edit ? (
          <>
            <input type="text" value={item.item} placeholder={item.item} />
            <button onClick={handleSubmit}>save</button>
          </>
        ) : (
          <>
            <p>{item.item}</p>
            <button onClick={() => setEdit(true)}>edit</button>
          </>
        )}
      </label>
      <button onClick={() => handleDelete(item.id)}>delete</button>
    </div>
  );
}
