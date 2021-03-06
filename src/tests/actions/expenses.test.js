import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { 
    startAddExpense, 
    addExpense, 
    startEditExpense,
    editExpense, 
    removeExpense,
    startRemoveExpense,
    setExpenses, 
    startSetExpenses 
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const uid = 'testuserid';
const defaultAuthState = { auth: { uid } };
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    const expensesData = {};
    expenses.forEach(( {id, description, note, amount, createdAt }) => {
        expensesData[id] = { id, description, note, amount, createdAt };
    });
    database.ref(`users/${uid}/expenses`).set(expensesData).then(() => done());
});

test('should set up remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should remove expenses from firebase', (done) => {
    const store = createMockStore(defaultAuthState);
    const id = expenses[1].id;
    store
        .dispatch(startRemoveExpense({ id }))
        .then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type:'REMOVE_EXPENSE',
                id
            });

            return database.ref(`users/${uid}/expenses/${id}`).once('value');
        })
        .then((snapshot) => {
            expect(snapshot.val()).toBeFalsy();
            done();
        });
});


test('should set up edit expense action object', () => {
    const updates = {
        description: 'expense description',
        amount: 4500,
        createdAt: 1000
    }
    const action = editExpense('123abc', updates);
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            description: 'expense description',
            amount: 4500,
            createdAt: 1000
        }
    });
});

test('should edit expense in firebase', (done) => {
    const store = createMockStore(defaultAuthState);
    const id = expenses[2].id;
    const updates = {
        description: 'Ugly Mug'
    };
    store.dispatch(startEditExpense(id, updates)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type:'EDIT_EXPENSE',
            id,
            updates
        });

        return database.ref(`users/${uid}/expenses/${id}`).once('value');
    })
    .then((snapshot) => {
        expect(snapshot.val().description).toBe(updates.description);
        done();
    });
});

test('should generate add expense object with provided values', () => {
    const expenseData = {
        description: 'Rent',
        amount: 108500,
        createdAt: 1000,
        note: 'This was last months rent'
    };
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })
});

test('should add expense to database and store', (done) => {
    const store = createMockStore(defaultAuthState);
    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        note: 'This one is better',
        createdAt: 1000
    };
    store
        .dispatch(startAddExpense(expenseData))
        .then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: 'ADD_EXPENSE',
                expense: {
                    id: expect.any(String),
                    ...expenseData
                }
            });

            return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
        }).then((snapshot) => {
            expect(snapshot.val()).toEqual(expenseData);
            done();
        });
});

test('should add expense with defaults to database and store', (done) => {
    const store = createMockStore(defaultAuthState);
    const defaultExpenseData = {
        description: '',
        amount: 0,
        note: '',
        createdAt: 0
    };
    store
        .dispatch(startAddExpense({}))
        .then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: 'ADD_EXPENSE',
                expense: {
                    id: expect.any(String),
                    ...defaultExpenseData
                }
            });

            return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
        }).then((snapshot) => {
            expect(snapshot.val()).toEqual(defaultExpenseData);
            done();
        });
});

test('should setup set expense action object with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    })
});

test('should fetch the expenses from firebase', (done) => {
    const store = createMockStore(defaultAuthState);
    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        });
        done();
    });
});

/**
test('should add expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        note: 'This one is better',
        createdAt: 1000
    };
    store
        .dispatch(startAddExpense(expenseData))
        .then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: 'ADD_EXPENSE',
                expense: {
                    id: expect.any(String),
                    ...expenseData
                }
            });

            return database.ref(`expenses/${actions[0].expense.id}`).once('value');
        }).then((snapshot) => {
            expect(snapshot.val()).toEqual(expenseData);
            done();
        });
});
 */