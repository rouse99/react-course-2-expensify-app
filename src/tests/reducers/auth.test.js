import authReducer from '../../reducers/auth';

test('should set login state', () => {
    const action = {
        type: 'LOGIN',
        uid: 'df24FEwdfasefasdgry6ydfr'
    };
    const state = authReducer({}, action);
    expect(state.uid).toBe(action.uid);
});

test('should set logout state', () => {
    const action = {
        type: 'LOGOUT'
    };
    const state = authReducer({}, action);
    expect(state).toEqual({});    
});