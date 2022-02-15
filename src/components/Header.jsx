import React from 'react';
import { useUser } from '../context/UserContext';

export default function Header() {
  const { user } = useUser();

  return (
    <header>
      {user ? (
        <h2>welcome back, {user}</h2>
      ) : (
        <h2>please sign in / sign up!</h2>
      )}
    </header>
  );
}
