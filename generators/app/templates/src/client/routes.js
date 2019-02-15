import React from 'react';
import { Route, Switch ,BrowserRouter} from 'react-router-dom';
import LandingContainer from '../client/containers/LandingContainer';
import HomeContainer from '../client/containers/HomeContainer';
export default function() {
  return (
    <BrowserRouter>
      <Switch>
      <Route exact path='/' component={LandingContainer}/>
      <Route exact path='/home' component={HomeContainer}/>
      </Switch>
    </BrowserRouter>
  );
}
