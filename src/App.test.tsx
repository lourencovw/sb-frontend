import { render, screen } from '@testing-library/react';
import App from './App';

test('renders search input label', () => {
  render(<App />);
  const linkElement = screen.getByLabelText('Search');
  expect(linkElement).toBeInTheDocument();
});