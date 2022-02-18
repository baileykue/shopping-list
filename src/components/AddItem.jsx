export default function AddItem({ handleAdd }) {
  return (
    <form>
      <label>
        New Item:
        <input type="text" aria-label="New Item Input" />
      </label>
      <button>Add</button>
    </form>
  );
}
