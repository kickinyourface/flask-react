import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PopUp from './PopUp';

const mockBook = {
  title: 'React Book',
  description: 'Learn React with this comprehensive guide.'
};

test('renders book title in modal', () => {
  render(<PopUp show={true} book={mockBook} handleClose={() => {}} />);
  const titleElement = screen.getByText(/React Book/i);
  expect(titleElement).toBeInTheDocument();
});
