import React, { Component } from 'react';
import { StackNavigator } from  'react-navigation';
import HeaderTitle from './HeaderTitle';
import MainScreen from "./MainScreen";
import App from  "./App";
import  Details from  "./DetailScreen";
import gmapsDirections from "./gmapsDirections.js";
const stackNav = StackNavigator({
    Main : {
        screen:  gmapsDirections,
        navigationOptions: ({navigation}) => ({
           // header: null,
            headerTitle: <HeaderTitle  text={'Detil page'} />,
            headerStyle: {
                backgroundColor:'#76f7ff'

            }

        }),
    },
    MyApp: {
        screen: App,
        navigationOptions: ({navigation}) => ({
            title: "Detail",
        })

    },
    MyAPI: {
        screen: gmapsDirections,
        navigationOptions: ({navigation}) => ({
            title: "gmapsDirections",
        })
    },
    Details: {
        screen: MainScreen,
        navigationOptions: ({navigation}) => ({
            title: "Details",
        })
    },

});
export default stackNav;
