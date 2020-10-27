import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import StockDetails from './components/StockDetails/StockDetails';
import StocksIndex from './components/StocksIndex/StocksIndex';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <StocksIndex />
          </Route>
          <Route path="/stock/:exchange/:symbol">
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
