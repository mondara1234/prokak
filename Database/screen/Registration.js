import React, { Component } from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import Logo from '../components/Logo';
import Form from './FormScreen/FormRegistration';

export default class Registration extends Component {

    GoTo_Show_StudentList_Activity_Function = () =>
    {
        this.props.navigation.navigate('ShowListActivity');
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Logo Title="Registration User"/>
                <Form nameRegistration="Registration" />
                <TouchableOpacity style={styles.button} onPress={this.GoTo_Show_StudentList_Activity_Function}>
                    <Text style={styles.buttonText} >ShowAllData</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        backgroundColor:'#455a64',
        flex: 1,
        alignItems:'center',
        justifyContent :'center'
    },
    button: {
        width:300,
        backgroundColor:'#1c313a',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 13
    },
    buttonText: {
        fontSize:16,
        fontWeight:'500',
        color:'#ffffff',
        textAlign:'center'
    }
});
