import React from 'react';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';

const defaultRoute = '/';
const defaultHistory = createMemoryHistory({ initialEntries: [defaultRoute] });

export const renderWithRouter = (ui, {
  history = defaultHistory,
} = {}) => {
  return {
    ...render(<Router history={history}>{ui}</Router>),
    history,
  }
}

export { defaultHistory as history };