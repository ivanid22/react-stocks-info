import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import StockDetails from './components/StockDetails/StockDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <div>Hello!</div>
        <Switch>
          <Route path="/stock/:stockName">
            <StockDetails />
          </Route>
          <Route>
            <span>This would be 404</span>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
