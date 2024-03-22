import { render } from '@testing-library/react';
import Box from './Box';

it('should render', () => {
  render(<Box />);
});

it('should match snapshot', () => {
  const {asFragment} = render(<Box />);
  expect(asFragment()).toMatchSnapshot();
});