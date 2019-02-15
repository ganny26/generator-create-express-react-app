import React, { Component } from 'react';
import MainAppBar from '../components/MainAppBar';
import Router from '../routes';
class MainContainer extends Component {
  render() {
    return (
      <div>
        <MainAppBar/>
        <Router/>
      </div>
    );
  }
}

export default MainContainer;