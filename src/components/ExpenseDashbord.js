import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashbord = () => (
    <div>
     <ExpenseList />
     <ExpenseListFilters />
    </div>
);

export default ExpenseDashbord;
