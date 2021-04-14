import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './route';
import signin from '../pages/signin';
import signUp from '../pages/signUp';
import Dashboard from '../pages/dashboard';


const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={signin} />
    <Route path="/signup" exact component={signUp} />
    <Route path="/dashboard" component={Dashboard} isPrivate />
  </Switch>
)

export default Routes;