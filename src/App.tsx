import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import Travel from './pages/Travel';
import {Provider} from "react-redux";
import store from "./store";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";

const AppRouter: React.FC = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/travel/test">Test travel</NavLink>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/travel/:id" exact component={Travel} />
                    <Route path="*" component={NoMatch} />
                </Switch>
            </div>
        </Router>
    );
};

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <AppRouter />
        </Provider>
    );
};

export default App;
