import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import PageNotFound from './components/PageNotFound/PageNotFound';
import StockDetails from './containers/StockDetails/StockDetails';
import StocksIndex from './containers/StocksIndex/StocksIndex';

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
            <PageNotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
