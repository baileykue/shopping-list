import Header from './components/Header';
import { useUser } from './context/UserContext';
import Auth from './views/Auth';
import Grocery from './views/Grocery';

export default function App() {
  const { user } = useUser();

  return (
    <div>
      <Header />
      {user ? <Grocery /> : <Auth />}
    </div>
  );
}
