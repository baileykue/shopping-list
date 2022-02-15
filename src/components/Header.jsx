import React from 'react';

export default function Header({ user }) {
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
