
import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'
import { renderWithProviders } from '../utils/test-utils'
import ConnectWalletButton from '@/components/ConnectWalletButton'
describe('Home', () => {
  it("renders text", () => {
    render(<Home />);
    const text = screen.getByText(/Kryptonaut/i);

    expect(text).toBeInTheDocument();
  });
})

describe('Connect Wallet Button', () => {
  it("renders button", () => {
    renderWithProviders(<ConnectWalletButton />);
    const button = screen.getByRole('button', { name: /Connect Wallet/i });

    expect(button).toBeInTheDocument();
  });
})