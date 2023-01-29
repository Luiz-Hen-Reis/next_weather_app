import { screen } from '@testing-library/react';
import { theme } from '../../styles/theme';
import Heading from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<Heading />', () => {
  it('should render the heading', () => {
    renderTheme(<Heading city="São Paulo" />);
    const heading = screen.getByRole('heading', { name: 'São Paulo' });

    expect(heading).toBeInTheDocument();
  });
});
