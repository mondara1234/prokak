import React from 'react';
import PropTypes from 'prop-types';
import { addNavigationHelpers, DrawerNavigator, StackNavigator } from 'react-navigation';
import Sidebar from '../features/common/containers/Sideber';
import { CommonRouter } from '../features/common/router';
import { CheckinmapRouter } from '../features/check-in-map/router';
import { UserRouter, LOGIN } from '../features/Database/router';
import { HEADER_STYLE } from './constants';
import Testcount from '../../components/Testcount';

export const RootStack = StackNavigator({
    ...CommonRouter,
    ...CheckinmapRouter,
    ...UserRouter
},{
    initialRouteName: Testcount,
    navigationOptions: ({navigation}) => ({
        ...HEADER_STYLE
    }),
    cardStyle: {
        backgroundColor: '#f6f6f6',
    }
});

const RootDrawer = DrawerNavigator(
    {
        'root': {
            screen: RootStack
        },
    },
    {
        // eslint-disable-next-line react/display-name
        contentComponent: (props) => <Sidebar {...props} />,
    }
);

export const RootNavigation = StackNavigator({
    Drawer: { screen: RootDrawer },
}, {
    headerMode: 'none',
});

export default RootNavigation;
