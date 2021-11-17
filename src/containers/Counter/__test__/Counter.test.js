import React from 'react';
import Counter from '../../Counter';
import { render, screen, fireEvent } from '@testing-library/react';

beforeEach(()=>render(<Counter />));

test('Testing Counter Component heading', () => {
  expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('My Counter');
});

test('Counter initially start with text 0', () => {
  expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(0);
});

test('Add button add input value to counter', () => {
  const addBtnEl = screen.getByText('+');
  const counterEl = screen.getByRole('heading', { level: 2 });
  const inputEl = screen.getByRole('spinbutton');

  fireEvent.change(inputEl, { target: { value: '5' } });
  fireEvent.click(addBtnEl);
  expect(counterEl).toHaveTextContent('5');
});

test('Subtract button minus the input value from counter', () => {
  const subtractBtnEl = screen.getByText('-');
  const counterEl = screen.getByRole('heading', { level: 2 });
  const inputEl = screen.getByRole('spinbutton');

  fireEvent.change(inputEl, { target: { value: '5' } });
  fireEvent.click(subtractBtnEl);
  expect(counterEl).toHaveTextContent('-5');
});

test('Add and Subtract button show correct value in counter', () => {
  const addBtnEl = screen.getByText('+');
  const subtractBtnEl = screen.getByText('-');
  const counterEl = screen.getByRole('heading', { level: 2 })
  const inputEl = screen.getByRole('spinbutton');

  fireEvent.change(inputEl, { target: { value: '10' } });
  fireEvent.click(addBtnEl);
  fireEvent.click(addBtnEl);
  fireEvent.click(addBtnEl);
  fireEvent.click(addBtnEl);
  fireEvent.click(addBtnEl);
  fireEvent.click(subtractBtnEl);
  expect(counterEl).toHaveTextContent('40');

  fireEvent.change(inputEl, { target: { value: '5' } });
  fireEvent.click(addBtnEl);
  fireEvent.click(addBtnEl);
  fireEvent.click(subtractBtnEl);
  fireEvent.click(subtractBtnEl);
  fireEvent.click(subtractBtnEl);
  fireEvent.click(subtractBtnEl);
  expect(counterEl).toHaveTextContent('30');
});

test('Counter countain correct class', () => {
  const counterEl = screen.getByRole('heading', { level: 2 });
  const addBtnEl = screen.getByText('+');
  const subtractBtnEl = screen.getByText('-');
  const inputEl = screen.getByRole('spinbutton');
  expect(counterEl.className).toBe('');

  fireEvent.change(inputEl, { target: { value: '50' } });
  fireEvent.click(addBtnEl);
  expect(counterEl.className).toBe('');

  fireEvent.click(addBtnEl);
  expect(counterEl.className).toBe('green');

  fireEvent.click(addBtnEl);
  expect(counterEl.className).toBe('green');

  fireEvent.click(subtractBtnEl);
  fireEvent.click(subtractBtnEl);
  expect(counterEl.className).toBe('');

  fireEvent.click(subtractBtnEl);
  fireEvent.click(subtractBtnEl);
  fireEvent.click(subtractBtnEl);
  fireEvent.click(subtractBtnEl);
  expect(counterEl.className).toBe('red');
});
