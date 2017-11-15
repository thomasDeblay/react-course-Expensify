import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();


store.dispatch(addExpense({ description: 'Water Bill', amount: 100, createdAt: -21000 }));
store.dispatch(addExpense({ description: 'Gas Bill', amount: 300, createdAt: -1000 }));
store.dispatch(addExpense({ description: 'Rent',  amount: 5}));




// Change text après 3 seconde de water(qu'on a initialisé plus haut) à rent
// setTimeout(() => {
//     store.dispatch(setTextFilter('bill'));
// }, 3000)

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);


console.log(addExpense({description : 'Water Bill '}));
const jsx = (
    <Provider store={store}  > 
        <AppRouter />
    </Provider>
);


ReactDOM.render(jsx , document.getElementById('app'));

