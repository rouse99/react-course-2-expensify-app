import React from 'react';
import { Link } from "react-router-dom";
import moment from 'moment';
import numeral from 'numeral';
//import { connect } from 'react-redux';
//import { removeExpense } from '../actions/expenses';

// const ExpenseListItem = ({ dispatch, id, description, amount, createdAt}) => (
const ExpenseListItem = ({ id, description, amount, createdAt}) => (    

    <Link to={`/edit/${id}`} className="list-item">
        <div>
            <h3>{description}</h3>
            <span>{moment(createdAt).format('MMMM Do, YYYY')}</span>
        </div>
        <h3>{numeral(amount/100).format('$0,0.00')}</h3>        
    </Link>
);

export default ExpenseListItem;
//export default connect()(ExpenseListItem);