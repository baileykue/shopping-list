import { useState, createContext, useContext } from 'react';

const ListContext = createContext();

export function ListProvider({ children }) {
  const ListValues = {};

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
