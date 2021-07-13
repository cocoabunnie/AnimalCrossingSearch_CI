import { render, screen } from '@testing-library/react';
import App from './App';

/*
NOTES
~ Error message says "Treating warnings as errors.... maybe that's something?
~ screen = document.body 
*/
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText('Animal', { exact: false })
  expect(linkElement).toBeInTheDocument();
});
