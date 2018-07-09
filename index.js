import React, { Component } from 'react';
import { AppRegistry, Dimensions } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import SideMenu from './SideMenu'
import lns from './LoingScreen';
import showsql from './ShowStudentListActivity';
const drawernav = DrawerNavigator({
    Item1: {
        screen: showsql,

    }

}, {
    contentComponent: SideMenu,
    drawerWidth: Dimensions.get('window').width - 120,
});


AppRegistry.registerComponent('testAPI5', () => drawernav );
