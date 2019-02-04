import React, { Component } from 'react';
import './App.css';

import {HashRouter, Switch, Route} from 'react-router-dom';

import MainContainer from './modules/login/main';

class App extends Component {
  render() {
    return (
      <div className="App">
          <HashRouter> 
            <Switch>
                <Route path ="/" component={MainContainer} />
            </Switch>
          </HashRouter>
      </div>
    );
  }
}

export default App;
