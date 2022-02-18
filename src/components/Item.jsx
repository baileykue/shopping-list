import { useState } from 'react';

export default function Item({ item, handleDelete, handleEdit }) {
  const [edit, setEdit] = useState(false);

  const handleSubmit = (e) => {
    setEdit(false);
  };

  return (
    <div>
      <input type="checkbox" />
      {edit ? (
        <>
          <input
            type="text"
            aria-label={`${item.text}-Text`}
            defaultValue={item.text}
            checked={item.is_complete}
            onChange={(e) => handleEdit({ ...item, text: e.target.value })}
          />
          <button aria-label={`save-${item.text}`} onClick={handleSubmit}>
            save
          </button>
        </>
      ) : (
        <>
          <p>{item.text}</p>
          <button
            aria-label={`edit-${item.text}`}
            onClick={() => setEdit(true)}
          >
            edit
          </button>
        </>
      )}

      <button
        aria-label={`delete-${item.text}`}
        onClick={() => handleDelete(item.id)}
      >
        delete
      </button>
    </div>
  );
}
