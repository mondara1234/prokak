import React from 'react';
import { AppRegistry, Dimensions } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import SideMenu from './src/common/SideMenu'
import stacknavv from  './src/common/stacknav';
import StoreData from  './src/components/StoreData';

const drawernav = DrawerNavigator({
    Item1: {
        screen: StoreData,

    }

}, {
    contentComponent: SideMenu,
    drawerWidth: Dimensions.get('window').width - 120,
});

AppRegistry.registerComponent('testAPI5', () => drawernav);
