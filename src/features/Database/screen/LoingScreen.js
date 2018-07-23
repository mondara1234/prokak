import React, { Component } from 'react';
import {StyleSheet, Alert, Text, View, TouchableOpacity, TextInput} from 'react-native';
import Logo from '../components/Logo';
import Form from './FormScreen/Form';

export default class LoingScreen extends Component {

      RegistrationFunction = () =>{
        this.props.navigation.navigate('RegistrationActivity');
    }

    render() {
        return (
            <View style={styles.container}>
                <Logo Title="สวัสดีหมูบ้า ."/>
                <Form titleButton="Login" />
                <View style={styles.signupTextCont}>
                    <Text style={styles.signupText}>Don't have an account yet?</Text>
                    <TouchableOpacity onPress={this.RegistrationFunction}>
                        <Text style={styles.signupButton}> Signup</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container : {
        paddingTop:60,
        backgroundColor:'#455a64',
        flex: 1,
        alignItems:'center',
        justifyContent :'center'
    },
    signupTextCont : {
        flexGrow: 1,
        alignItems:'flex-end',
        justifyContent :'center',
        paddingVertical:16,
        flexDirection:'row'
    },
    signupText: {
        color:'rgba(255,255,255,0.6)',
        fontSize:16
    },
    signupButton: {
        color:'#ffffff',
        fontSize:16,
        fontWeight:'500'
    },
    inputBox: {
        width:300,
        backgroundColor:'rgba(255, 255,255,0.2)',
        borderRadius: 25,
        paddingHorizontal:16,
        fontSize:16,
        color:'#ffffff',
        marginVertical: 10
    }
});
