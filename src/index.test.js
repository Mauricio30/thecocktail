import React from 'react';
import ReactDOM from 'react-dom';
import AppProvider from './containers/AppProvider/AppProvider';

jest.mock('react-dom', () => ({ render: jest.fn() }));

describe('Application root', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    div.setAttribute('id', 'root');
    document.body.appendChild(div);
    // eslint-disable-next-line global-require
    require('./index');
    expect(ReactDOM.render).toHaveBeenCalledWith(<AppProvider />, div);
  });
});
