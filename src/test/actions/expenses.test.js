import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test ('should setup remove expense action object', () => {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
});

test ('should setup edit expense action object', () => {
    const action = editExpense('123abc', { note: "new value" });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note : "new value"
        }
    });
});

test ('should setup add expense action with passes values', () => {
    const expenseData = {
        description: 'rent',
        amount: 109500,
        createdAt: 1000,
        note : 'this was last month rent'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test ('should setup add expense action with default values', () => {
    const expenseData = {
        description : '',
        note : '',
        amount : 0,
        createdAt : 0
    };
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense:  {
            ...expenseData,
            id: expect.any(String)
        }
        

    });
    });