import React, { Component } from 'react';
import { StackNavigator } from  'react-navigation';
import HeaderTitle from './HeaderTitle';
import AppScreen from  "../../App";
import DetailScreen from  "../features/DetailScreen";
import gmapsDirections from "../features/gmapsDirections.js";
import RegistrationScreen from '../features/Database/screen/Registration';
import LoingScreen from '../features/Database/screen/LoingScreen';
import ShowListScreen from "../features/Database/screen/ShowStudentListActivity";
import EditDataScreen from "../features/Database/screen/EditData";

  const stackNav = StackNavigator({
      LoingActivity : {
        screen:  LoingScreen,
        navigationOptions: ({navigation}) => ({
            header: null,
            headerStyle: {
                backgroundColor:'#455a64'
            }
        }),
    },
    RegistrationActivity: {
        screen:  RegistrationScreen,
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor:'#455a64'
            }
        }),
    },
    ShowListActivity: {
        screen: ShowListScreen,
        navigationOptions: ({navigation}) => ({
            // header: null,
            headerTitle: <HeaderTitle  text={'ShowListActivity'} />,
            headerStyle: {
                backgroundColor:'#455a64'
            }
        }),
    },
    EditDataActivity: {
        screen:  EditDataScreen,
        navigationOptions: ({navigation}) => ({
            // header: null,
            headerTitle: <HeaderTitle  text={'DeleteDataActivity'} />,
            headerStyle: {
                backgroundColor:'#455a64'
            }
        }),
    },
    MyAppActivity: {
        screen: AppScreen,
        navigationOptions: ({navigation}) => ({
            headerTitle: <HeaderTitle  text={'AppScreen'} />,
            headerStyle: {
                backgroundColor:'#455a64'
            }
        })
    },
    MyAPIActivity: {
        screen: gmapsDirections,
        navigationOptions: ({navigation}) => ({
            headerTitle: <HeaderTitle  text={'gmapsDirections'} />,
            headerStyle: {
                backgroundColor:'#455a64'
            }
        })
    },
    DetailsActivity: {
        screen: DetailScreen,
        navigationOptions: ({navigation}) => ({
            headerTitle: <HeaderTitle  text={'Details'} />,
            headerStyle: {
                backgroundColor:'#455a64'
            }
        })
    }

});
export default stackNav;
