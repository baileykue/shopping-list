import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('that the add, edit, and delete buttons work properly', () => {
  render(<App />);

  const addInput = screen.getByLabelText(/new item:/i);
  const addButton = screen.getByRole('button', { name: /add/i });

  screen.getByText(/wine/i);
  screen.getByText(/cheese/i);
  screen.getByText(/walnuts/i);
  screen.getByText(/crackers/i);

  expect(screen.queryByText(/tomatoes/i)).not.toBeInTheDocument();

  userEvent.type(addInput, 'Tomatoes');
  userEvent.click(addButton);

  screen.getByText(/tomatoes/i);

  const editButton = screen.getByLabelText(/edit-tomatoes/i);
  userEvent.click(editButton);

  const editInput = screen.getByLabelText(/tomatoes-text/i);
  const saveButton = screen.getByLabelText(/save-tomatoes/i);
  userEvent.type(editInput, ' & Bread');
  userEvent.click(saveButton);

  const editedItem = screen.getByText(/tomatoes & bread/i);
  expect(editedItem).toBeInTheDocument();
  expect(editInput).not.toBeInTheDocument();
  expect(screen.queryByLabelText(/save-tomatoes/i)).not.toBeInTheDocument();

  const deleteButton = screen.getByLabelText(/delete-tomatoes & bread/i);
  userEvent.click(deleteButton);
  expect(screen.queryByText(/tomatoes & bread/i)).not.toBeInTheDocument();
});
