import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = (props) => (
    <div>
        {
            props.expenses.length === 0 ? (
                <p>0 expenses totaling $0</p>
            ) : (
                <p>
                    {props.expenses.length} expenses totaling 
                    {numeral(props.expensesTotal/100).format('$0,0.00')}
                </p>
            )
        }
    </div>
);

const mapStateToProps = (state) => {
    const expenses = selectExpenses(state.expenses, state.filters);
    const expensesTotal = selectExpensesTotal(expenses);
    return {
        expenses,
        expensesTotal
    };
};

export default connect(mapStateToProps)(ExpensesSummary);
