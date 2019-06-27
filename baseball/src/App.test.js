import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react'; // render method checks to see if a component renders, returns other methods called queries
import 'jest-dom/extend-expect'// gives us access to matchers
import '@testing-library/react/cleanup-after-each'
import App from './App';


describe('<App/>', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  //Check to see if app componenet is rendering using the render method
  it('renders without crashing', () => {
    render(<App/>)
  });
  
});
