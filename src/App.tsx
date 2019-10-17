import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Travel from './Travel';
import {Provider} from "react-redux";
import store from "./redux/store";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";

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
