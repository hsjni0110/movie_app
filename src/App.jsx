import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Detail from './route/Detail';
import Home from './route/Home';
import Page from './route/Page';

function App() {
  return(
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/abot-us">
          <h1>Hello</h1>
        </Route>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Page />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;