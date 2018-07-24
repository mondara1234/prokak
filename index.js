import React from 'react';
import { AppRegistry, Dimensions } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import SideMenu from './src/common/SideMenu'
import stacknavv from  './src/common/stacknav';
import testword from './src/features/Projace3P/DetailTime';
import StoreData from  './src/components/StoreData';

const drawernav = DrawerNavigator({
    Item1: {
        screen: testword,

    }

}, {
    contentComponent: SideMenu,
    drawerWidth: Dimensions.get('window').width - 120,
});

AppRegistry.registerComponent('testAPI5', () => drawernav);
