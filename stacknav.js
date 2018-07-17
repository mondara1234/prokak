import React, { Component } from 'react';
import { StackNavigator } from  'react-navigation';
import HeaderTitle from './HeaderTitle';
import MainScreen from "./MainScreen";
import App from  "./App";
import Details from  "./DetailScreen";
import gmapsDirections from "./gmapsDirections.js";
import MainSrceen from  "./MainScreen"
import Registration from './Database/screen/Registration';
import LoingScreen from './Database/screen/LoingScreen';
import ShowListActivity from "./Database/screen/ShowStudentListActivity";
import DeleteDataActivity from "./Database/screen/DeleteData";
import FormLoing from "./Database/screen/FormScreen/Form";

const stackNav = StackNavigator({
    Loing : {
        screen:  LoingScreen,
        navigationOptions: ({navigation}) => ({
            // header: null,
            headerTitle: <HeaderTitle  text={'Loing'} />,
            headerStyle: {
                backgroundColor:'#a8cccd'
            }
        }),
    },
    Registration: {
        screen:  Registration,
        navigationOptions: ({navigation}) => ({
            // header: null,
            headerTitle: <HeaderTitle  text={'Registration'} />,
            headerStyle: {
                backgroundColor:'#76f7ff'
            }
        }),
    },
    ShowListActivity: {
        screen:  ShowListActivity,
        navigationOptions: ({navigation}) => ({
            // header: null,
            headerTitle: <HeaderTitle  text={'ShowListActivity'} />,
            headerStyle: {
                backgroundColor:'#76f7ff'
            }
        }),
    },
    DeleteDataActivity: {
        screen:  DeleteDataActivity,
        navigationOptions: ({navigation}) => ({
            // header: null,
            headerTitle: <HeaderTitle  text={'DeleteDataActivity'} />,
            headerStyle: {
                backgroundColor:'#76f7ff'
            }
        }),
    },
    Main: {
        screen:  MainSrceen,
        navigationOptions: ({navigation}) => ({
           // header: null,
            headerTitle: <HeaderTitle  text={'Home page'} />,
            headerStyle: {
                backgroundColor:'#76f7ff'
            }
        }),
    },
    MyApp: {
        screen: App,
        navigationOptions: ({navigation}) => ({
            title: "Detail"
        })
    },
    MyAPI: {
        screen: gmapsDirections,
        navigationOptions: ({navigation}) => ({
            title: "gmapsDirections"
        })
    },
    Details: {
        screen: MainScreen,
        navigationOptions: ({navigation}) => ({
            title: "Details"
        })
    },
    FormLoing: {
        screen: FormLoing,
        navigationOptions: ({navigation}) => ({
            title: "FormLoing"
        })
    },

});
export default stackNav;
