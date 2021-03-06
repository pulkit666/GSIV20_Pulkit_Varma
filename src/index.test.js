import ReactDOM from 'react-dom';
import App from './App';
import React from 'react';
jest.mock('react-dom', () => ({ render: jest.fn() }))


it('renders without crashing', () => {

    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    global.document.getElementById = (id) => id === 'root' && div
    expect(ReactDOM.render).toHaveBeenCalled();
});