import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Add from '../components/Add';
import EditExpense from '../components/EditExpense';
import ExpenseDashbord from '../components/ExpenseDashbord';
import Help from '../components/Help';
import NotFound from '../components/NotFound';
import Header from '../components/Header';


const AppRouter = () => (
    <BrowserRouter>
    <div>
    <Header />
    <Switch>
        <Route path="/" component={ExpenseDashbord} exact={true} />
        <Route path="/create" component={Add} />
        <Route path="/edit/:id" component={EditExpense} />
        <Route path="/help" component={Help} />
        <Route component={NotFound} />
    </Switch>
    </div>
    </BrowserRouter>
);

export default AppRouter;