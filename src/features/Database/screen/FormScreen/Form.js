import React, { Component } from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import {StackNavigator} from 'react-navigation';
import AppScreen from "../../../../../App";

export default class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            UserEmail: '',
            UserPassword: ''
        }
    }

    UserLoginFunction = () =>{
        const { UserEmail }  = this.state ;
        const { UserPassword }  = this.state ;

        fetch('http://192.168.1.30/My_SQL/User_Login.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: UserEmail,
                password: UserPassword
            })
        }).then((response) => response.json())
            .then((responseJson) => {
                if(responseJson === 'Data Matched')
                {
                    this.props.navigation.navigate('MyAppActivity')
                }
                else{
                    Alert.alert(responseJson);
                }
            }).catch((error) => {
            console.error(error);
        });
    }


    render(){

        return(
            <View style={styles.container}>
                <TextInput style={styles.inputBox}
                           underlineColorAndroid='rgba(0,0,0,0)'
                           placeholder="Email"
                           placeholderTextColor = "#ffffff"
                           selectionColor="#fff"
                           keyboardType="email-address"
                           onChangeText={UserEmail =>this.setState({UserEmail})}
                />
                <TextInput style={styles.inputBox}
                           underlineColorAndroid='rgba(0,0,0,0)'
                           placeholder="Password"
                           secureTextEntry={true}
                           placeholderTextColor = "#ffffff"
                           onChangeText={UserPassword =>this.setState({UserPassword})}
                />
                <TouchableOpacity style={styles.button} onPress={this.UserLoginFunction}>
                    <Text style={styles.buttonText} > {this.props.titleButton} </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        marginTop: 65,
        justifyContent:'center',
        alignItems: 'center'
    },
    inputBox: {
        width:300,
        backgroundColor:'rgba(255, 255,255,0.2)',
        borderRadius: 25,
        paddingHorizontal:16,
        fontSize:16,
        color:'#ffffff',
        marginVertical: 10
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
export const ModalNavigator =StackNavigator(
    {
        FormLogin: { screen: Form },
        AppScreen: { screen: AppScreen },
        navigationOptions: ({navigation}) => ({
            headerTitle: <HeaderTitle  text={'AppScreen'} />,
            headerStyle: {
                backgroundColor:'#455a64'
            }
        })

    },
);
