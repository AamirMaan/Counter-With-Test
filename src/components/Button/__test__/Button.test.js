import React from 'react';
import Button from '../../Button';
import { render, screen } from '@testing-library/react';

test('Button render with given title', () => {
  render(<Button title={'test'} onClick={()=>{}}/>)
  expect(screen.getByRole('button')).toHaveTextContent('test');
});


