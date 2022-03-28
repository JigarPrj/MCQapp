import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux'
import promise from "redux-promise-middleware";
import { createStore, applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import combineReducers from "../reducers/reducer"
import Home from '../component/Home'
//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose;
const middleware = [thunk, promise];

const store = createStore(
  combineReducers(),
  composeEnhancers(applyMiddleware(...middleware))
);

test('rendering home',()=>{
    render(   <Provider store={store}>
        <Home />
        </Provider>)
        const home= screen.getByText('Test Language :')
        expect(home).toBeInTheDocument()
})

test('rendering home again',()=>{
    render(   <Provider store={store}>
        <Home />
        </Provider>)
        const home= screen.getByLabelText('Enter Name')
        expect(home).toBeInTheDocument()
})
test('rendering home more',()=>{
    render(   <Provider store={store}>
        <Home />
        </Provider>)
        const home= screen.getByTestId('html-radio')
        expect(home).toBeInTheDocument()
})