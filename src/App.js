import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import StockDetails from './components/StockDetails/StockDetails';
import StocksIndex from './components/StocksIndex/StocksIndex';

function App() {
  return (
    <div className="App">
      <Router>
        <SearchBar />
        <Switch>
          <Route exact path="/">
            <StocksIndex />
          </Route>
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
