import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import PageLoad from './PageLoad';
import Game from './game/Game';

class App extends React.Component {
  render () {
    return (
      <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={PageLoad} />
                    <Route exact path='/newgame' component={Game} />
                </Switch>
            </BrowserRouter>
       </div>
    ) 
  } 
}  
export default App