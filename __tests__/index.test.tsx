import { render, screen } from '@testing-library/react';
import Home from '@/pages/index';

jest.mock('utils/converter.utils',
  () => ({
    converter: () => 'IV'
  }),
  { virtual: true }
);

describe('Home', () => {
  it('renders a title', () => {
    render(<Home />)

    const title = screen.getByTestId('calculator-title');

    expect(title).toBeInTheDocument();
  })
})
