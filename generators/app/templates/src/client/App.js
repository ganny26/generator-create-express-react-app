import React from 'react';
import { hot } from 'react-hot-loader';
import Router from './routes';
import './style.scss'
import {browserHistory} from 'react-router-dom'
import MainContainer from './containers/MainContainer';
class App extends React.Component {
  render() {
    return (
      <div>
        <MainContainer />
      </div>
    );
  }
}

export default hot(module)(App);
