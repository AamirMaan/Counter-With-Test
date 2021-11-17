import React from 'react';
import TextField from '../../TextField';
import { render, screen } from '@testing-library/react';

test('TextField with Type Number', () => {
  render(<TextField type='number' name='counter' value={5} />);
  const inputEl = screen.getByRole('spinbutton');
  expect(inputEl).toHaveValue(5);
});

test('TextField with Type textbox', () => {
  render(<TextField type='text' name='counter' value={'testing'} />);
  const inputEl = screen.getByRole('textbox');
  expect(inputEl).toHaveValue('testing');
});
