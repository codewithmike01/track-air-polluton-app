/* eslint-disable comma-dangle */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, screen, cleanup } from '@testing-library/react';

import renderer from 'react-test-renderer';
import store from '../../../redux/configureStore';
import SearchField from '../SearchField';

afterEach(cleanup);
describe('Hero Component', () => {
  test('Render Pollution', () => {
    render(
      <Router>
        <Provider store={store}>
          <SearchField />
        </Provider>
      </Router>
    );

    const pollutionElement = screen.getByTestId('search');

    expect(pollutionElement).toHaveTextContent('STATES BY COUNTRY');
  });

  test('Snapshot Pollution', () => {
    const tree = renderer
      .create(
        <Router>
          <Provider store={store}>
            <SearchField />
          </Provider>
        </Router>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
