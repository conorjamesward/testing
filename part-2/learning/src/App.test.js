import { render, screen } from '@testing-library/react';
import App from './App';

test('Good Boy Button mounts', () => {
  render(<App />);
  const goodBoyButton =  screen.getByText(/Get Good Boy/i)
  expect(goodBoyButton).toBeInTheDocument()
});