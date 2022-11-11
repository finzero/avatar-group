import { render } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  it('should have AvatarGroup as child', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('avatar-container')).toBeInTheDocument();
  });
});
