import Header from './components/Header';
import { ItemProvider } from './context/ItemContext';
import Grocery from './views/Grocery';

export default function App() {
  return (
    <div>
      <ItemProvider>
        <Header />
        <Grocery />
      </ItemProvider>
    </div>
  );
}
