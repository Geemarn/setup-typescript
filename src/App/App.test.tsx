import React from 'react';
import { shallow, mount, render } from 'enzyme';
// import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

it('expect to render app component', () => {
  expect(shallow(<App />)).toMatchSnapshot();
});
