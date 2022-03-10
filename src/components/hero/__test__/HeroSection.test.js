/* eslint-disable comma-dangle */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import store from '../../../redux/configureStore';
import HeroSection from '../HeroSection';

afterEach(cleanup);
describe('Hero Component', () => {
  test('Render Hero', () => {
    render(
      <Router>
        <Provider store={store}>
          <HeroSection />
        </Provider>
      </Router>
    );

    const buttonElement = screen.getByTestId('button');
    const heroElement = screen.getByTestId('header_name');

    expect(heroElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  test('Render Snapshot', () => {
    const tree = renderer
      .create(
        <Router>
          <Provider store={store}>
            <HeroSection />
          </Provider>
        </Router>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
