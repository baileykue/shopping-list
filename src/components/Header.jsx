import React from 'react';
import { useUser } from '../context/UserContext';

export default function Header() {
  const {
    user: { user },
  } = useUser();

  return (
    <header>
      {user ? (
        <h2>welcome back, {user.email}</h2>
      ) : (
        <h2>
          please <span>sign in</span> | <span>sign up!</span>
        </h2>
      )}
    </header>
  );
}
