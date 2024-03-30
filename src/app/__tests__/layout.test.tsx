import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import RootLayout from '../layout';

vi.mock('next/font/google', () => ({
  Inter: () => ({
    style: {
      fontFamily: 'mocked',
    },
  }),
}));

describe('RootLayout component', () => {
  it('renders test dev', () => {
    render(
      <RootLayout>
        <span>test</span>
      </RootLayout>
    );

    expect(screen.getByText('test')).toBeInTheDocument();
  });
});
