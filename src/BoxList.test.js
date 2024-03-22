import { render } from '@testing-library/react';
import BoxList from './BoxList';

it('should render', () => {
  render(<BoxList />);
});

it('should match snapshot', () => {
  const {asFragment} = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});