import AddItem from '../components/AddItem';
import ItemList from '../components/ItemList';
import { ItemProvider } from '../context/ItemContext';

export default function Shopping() {
  return (
    <div>
      <h1>grocery shop til you drop</h1>
      <ItemProvider>
        <AddItem />
        <ItemList />
      </ItemProvider>
    </div>
  );
}
