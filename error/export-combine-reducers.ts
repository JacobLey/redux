import { combineReducers, createStore, Reducer } from 'redux';

const reducer: Reducer<
    Record<string, number>,
    { type: string, val: number }
> = (state, action) => ({
    ...state,
    [action.type]: action.val,
});

// Fails
export const withEmpty = combineReducers({});

// Succeeds somehow...
export const withMap = combineReducers({ reducer });

// Fails
export const store = createStore(withMap)
