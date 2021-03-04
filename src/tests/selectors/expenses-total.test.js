import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return total amount for multiple expenses', () => {
    const result = selectExpensesTotal(expenses);
    expect(result).toBe(114195);
});

test('should correctly add up a single expense', () => {
    const result = selectExpensesTotal([expenses[2]]);
    expect(result).toBe(4500);
});

test('should return 0 if only no expenses', () => {
    const result = selectExpensesTotal([]);
    expect(result).toBe(0);
});