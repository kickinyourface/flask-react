import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom/extend-expect';

test('renders Google Books Search title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Google Books Search/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders search button', () => {
  render(<App />);
  const searchButton = screen.getByText(/Buscar/i);
  expect(searchButton).toBeInTheDocument();
});

test('allows the user to input search text', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/Ingresa el título de un libro/i);
  fireEvent.change(inputElement, { target: { value: 'React' } });
  expect(inputElement.value).toBe('React');
});

test('renders max results input', () => {
  render(<App />);
  const maxResultsInput = screen.getByPlaceholderText(/Ingresa el máximo de resultados/i);
  expect(maxResultsInput).toBeInTheDocument();
});

test('renders start index input', () => {
  render(<App />);
  const startIndexInput = screen.getByPlaceholderText(/Ingresa el índice de inicio/i);
  expect(startIndexInput).toBeInTheDocument();
});
