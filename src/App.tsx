import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Travel from './Travel';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

const NoMatch: React.FC = () => {
    return (<div>404 - path not found</div>)
};

const AppRouter: React.FC = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/travel/test">Test travel</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/" exact component={App} />
                    <Route path="/travel/:id" exact component={Travel} />
                    <Route path="*" component={NoMatch} />
                </Switch>
            </div>
        </Router>
    );
};

export default AppRouter;
