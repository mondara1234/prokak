import React from 'react';
import {Provider} from 'react-redux';
import { createStore } from "redux";
import  AllReducer from './reducers';
import Testcount from  './Testcount';

const store = createStore(AllReducer);

class StoreData extends React.Component{

    render() {
        return (
            <Provider store={store}>
                <Testcount/>
            </Provider>
        )
    }
}

export default  StoreData;

store.dispatch({
    type: 'MONDARA',
    dataarray: 'kakzadsr'
})