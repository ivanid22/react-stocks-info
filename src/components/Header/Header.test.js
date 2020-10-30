import React from 'react';
import { render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Header from './Header';

const mockStore = configureStore([thunk]);
let store;

describe('Header', () => {
  beforeEach(() => {
    const initialState = {
      applicationState: 'IDLE',
    };
    store = mockStore(initialState);
  });

  it('should render the component', () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>,
    );
    expect(screen.getByText('StocksInfo')).toBeInTheDocument();
  });
});
