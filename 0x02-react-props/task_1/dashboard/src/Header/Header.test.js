import React from "react";
import { shallow } from "enzyme/build";
import Header from "./Header";
import logo from '../assets/holberton-logo.jpg';

describe('<Header />', () => {
  it('renders the Header component without crashing', () => {
    shallow(<Header />);
  });

  it('checks if rendered tree contains the img and h1 tags', () => {
    const Wrapper = shallow(<Header />);
    expect(Wrapper.contains([
      <img src={logo} className="App-logo" alt="logo" />,
      <h1>School dashboard</h1>
    ])).toEqual(true);
  })
});