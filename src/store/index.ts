import createRootReducer from './reducer'
import {configureStore} from "@reduxjs/toolkit";

// @ts-ignore
const logger = store => next => action => {
    console.groupCollapsed(action.type);
    console.log('prev state', store.getState());
    console.log('action', action);
    let result = next(action);
    console.log('next state', store.getState());
    console.groupEnd();
    return result;
};

// const getMiddleware = () => {
//   return applyMiddleware()
// }
const store = configureStore({
    reducer: createRootReducer(),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat([logger])
})
export type AppDispatch = typeof store.dispatch;
export { store }