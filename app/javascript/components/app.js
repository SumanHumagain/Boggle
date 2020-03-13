import React from 'react';
import {Switch, Route } from 'react-router-dom';
import PageLoad from './PageLoad';
import Game from './game/Game';
import { toast } from 'react-toastify';
import { allRoutes as Routes } from "../routes";
import {BrowserRouter } from 'react-router-dom';

class App extends React.Component {
    constructor(props) {
      super(props);
    }

  render () {
    const routes = Routes.map((route, index) => {
      return route.component ? (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          name={route.name}
          render={props => <route.component {...props} />}
        />
      ) : null;
     });
  
    return (
      <div className="App">
         <BrowserRouter>
                <Switch>
                    {routes}
                </Switch>
         </BrowserRouter>
       </div>
    ) 
  } 
}  
export default App