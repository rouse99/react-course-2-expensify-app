import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from "./routers/AppRouter";
import configureStore from './store/configureStore';
import { addExpense, removeExpense, editExpense } from './actions/expenses';
import { setTextFilter, sortByAmount } from './actions/filters';
import getVisibileExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';

const store = configureStore();

// store.dispatch(addExpense({ description: 'Water Bill', amount: 4500 }));
// store.dispatch(addExpense({ description: 'Gas Bill', amount: 1200, createdAt: 1000 }));
// store.dispatch(addExpense({ description: 'Rent', amount: 109500 }));

// const state = store.getState();
// const visibleExpenses = getVisibileExpenses(state.expenses, state.filters);
// console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));


/**
 const store = configureStore();

// store.subscribe(() => {
//     const state = store.getState();
//     const visibleExpenses = getVisibileExpenses(state.expenses, state.filters);
//     console.log(visibleExpenses);
// });

// addExpense --> Water Bill
store.dispatch(addExpense({ description: 'Water Bill', amount: 10000, createdAt: 12000 }));
// addExpense --> Gas Bill
store.dispatch(addExpense({ description: 'Gas Bill', amount: 12500, createdAt: 9000 }));
// setTextFilter --> 'bill' (2 items), 'water' (1 item)
//store.dispatch(setTextFilter('bill'));
//store.dispatch(setTextFilter('water'));
store.dispatch(setTextFilter('gas'));
// getVisibleExpenses --> print visible ones to screen

const state = store.getState();
const visibleExpenses = getVisibileExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

ReactDOM.render(<AppRouter />, document.getElementById('app'));
 */