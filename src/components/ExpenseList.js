import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Expenses</div>
            <div className="show-for-desktop">Expense</div>
            <div className="show-for-desktop">Amount</div>
        </div>
        {
            props.expenses.length === 0 ? (
                <p>No expenses</p>
            ) : (
                props.expenses.map((expense) => (
                    <ExpenseListItem key={expense.id} {...expense} />
                ))
            )
        }
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
        //filters: state.filters
    };
};

//connect() returns a function, so (ExpenseList) is the parameter/component passed to that returned function.
//in step-through example, connect was assigned to a new const (ConnectedExpenseList) and ConnectExpenseList was 
//exported.  This was to show/demonstrate/spell out what's going on in this line of code.  mapStateToProps parameter
//in connect call was filed with value of mapStateToProps const above.
export default connect(mapStateToProps)(ExpenseList);

                // <ExpenseListItem key={expense.id} {...expense} /> /** spread operator here replaces props below */
                // <ExpenseListItem 
                //     key={expense.id}
                //     description={expense.description}
                //     note={expense.note}
                //     amount={expense.amount}
                //     createdAt={expense.createdAt}
                // />