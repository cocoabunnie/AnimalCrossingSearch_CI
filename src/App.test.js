import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const title = "Animal";
  const linkElement = screen.getByText(title);
  expect(linkElement).toBeInTheDocument();
});
