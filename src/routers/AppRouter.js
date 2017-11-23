import React from 'react';
import {Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Add from '../components/Add';
import EditExpense from '../components/EditExpense';
import ExpenseDashbord from '../components/ExpenseDashbord';
import Help from '../components/Help';
import NotFound from '../components/NotFound';
import Header from '../components/Header';
import Login from '../components/Login';
import PrivateRoute from './PrivateRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route path="/" component={Login} exact={true}  />
                <PrivateRoute path="/home" component={ExpenseDashbord} />
                <PrivateRoute path="/create" component={Add} />
                <PrivateRoute path="/edit/:id" component={EditExpense} />
                <Route path="/help" component={Help} />
                <Route component={NotFound} />
                
            </Switch>
        </div>
    </Router>
);

export default AppRouter;