import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View, TouchableOpacity,Button
} from 'react-native';

import { StackNavigator } from  'react-navigation';
import MainScreen from "./MainScreen";
import App from  "./App";
import  Details from  "./DetailScreen";
import gmapsDirections from "./gmapsDirections.js";
const stackNav = StackNavigator({
    Main : {
        screen: MainScreen,
        navigationOptions: ({navigation}) => ({
            header: null,
        })
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
        screen:  Details,
        navigationOptions: ({navigation}) => ({
            title: "Details",
        })
    },

});

export default stackNav;
