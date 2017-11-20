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
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';
import './playground/promises';

const store = configureStore();


// Change text après 3 seconde de water(qu'on a initialisé plus haut) à rent
// setTimeout(() => {
//     store.dispatch(setTextFilter('bill'));
// }, 3000)

const jsx = (
    <Provider store={store}  > 
        <AppRouter />
    </Provider>
);


ReactDOM.render(jsx , document.getElementById('app'));

