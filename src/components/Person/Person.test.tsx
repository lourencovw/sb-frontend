import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Person from './Person';

describe('<Person />', () => {
  test('it should mount', () => {
    render(<Person />);
    
    const person = screen.getByTestId('Person');

    expect(person).toBeInTheDocument();
  });
});