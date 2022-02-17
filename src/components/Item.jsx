import { useEffect, useState } from 'react';
import { fetchById } from '../services/grocery-list';

export default function Item({
  item,
  handleDeleting,
  handleEditing,
  setUpdateText,
}) {
  const [edit, setEdit] = useState(false);

  const handleSubmit = () => {
    setEdit(false);
    handleEditing(item);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={item.is_completed}
          onChange={(e) => {
            handleEditing({
              ...item,
              is_completed: e.target.checked,
            });
          }}
        />
        {edit ? (
          <>
            <input
              type="text"
              value={item.item}
              placeholder={item.item}
              onChange={(e) => setUpdateText(e.target.value)}
            />
            <button onClick={handleSubmit}>save</button>
          </>
        ) : (
          <>
            <p>{item.item}</p>
            <button onClick={() => setEdit(true)}>edit</button>
          </>
        )}
      </label>
      <button onClick={() => handleDeleting(item.id)}>delete</button>
    </div>
  );
}
