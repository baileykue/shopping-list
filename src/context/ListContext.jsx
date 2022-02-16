import { useState, createContext, useContext, useEffect } from 'react';
import { fetchGroceries } from '../services/grocery-list';

const ListContext = createContext();

export function ListProvider({ children }) {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchGroceries();
      setList(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  const ListValues = { list, setList, loading, setLoading };

  return (
    <ListContext.Provider value={ListValues}>{children}</ListContext.Provider>
  );
}

export function useList() {
  const context = useContext(ListContext);

  if (context === undefined) {
    throw new Error('useList must be defined within an ListContext Provider');
  }

  return context;
}
