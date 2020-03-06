import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import PageLoad from './PageLoad';

class App extends React.Component {
  render () {
    return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={PageLoad} />
                </Switch>
            </BrowserRouter>
    ) 
  } 
}  
export default App