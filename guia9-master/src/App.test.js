import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react Empleado', () => {
  const { getByText } = render(<App />);
  const EmpleadoElement = getByText(/learn react/i);
  expect(EmpleadoElement).toBeInTheDocument();
});
