
export default (expenses) => {
    if (expenses.length === 0) {
        return 0;
    } else {
        // const amounts = expenses.map((expense) => expense.amount);
        // const reducer = (accumulator, currentValue) => accumulator + currentValue;
        // return amounts.reduce(reducer);
        return expenses
            .map((expense) => expense.amount)
            .reduce((sum, value) => sum + value);        
    }
};