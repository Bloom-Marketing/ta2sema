import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from '../page';

describe('Home component', () => {
  it('renders test dev', () => {
    render(<Home />);

    expect(screen.getByText('Ta2sema Team Building App')).toBeInTheDocument();
  });
});
