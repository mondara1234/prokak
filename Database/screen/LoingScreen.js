import React, { Component } from 'react';
import {StyleSheet, Alert, Text, View, TouchableOpacity, TextInput} from 'react-native';
import Logo from '../components/Logo';
import Form from './FormScreen/Form';

export default class LoingScreen extends Component {
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
                    this.props.navigation.navigate('Main')
                }
                else{
                    Alert.alert(responseJson);
                }
            }).catch((error) => {
            console.error(error);
        });
    }
      RegistrationFunction = () =>{
        this.props.navigation.navigate('Registration');
    }

    render() {
        return (
            <View style={styles.container}>
                <Logo Title="Welcome to My app."/>
                    <TextInput style={styles.inputBox}
                               underlineColorAndroid='rgba(0,0,0,0)'
                               placeholder="Email"
                               placeholderTextColor = "#ffffff"
                               selectionColor="#fff"
                               keyboardType="email-address"
                               onSubmitEditing={()=> this.password.focus()}
                               onChangeText={UserEmail =>this.setState({UserEmail})}
                    />
                    <TextInput style={styles.inputBox}
                               underlineColorAndroid='rgba(0,0,0,0)'
                               placeholder="Password"
                               secureTextEntry={true}
                               placeholderTextColor = "#ffffff"
                               ref={(input) => this.password = input}
                               onChangeText={UserPassword =>this.setState({UserPassword})}
                    />
                <TouchableOpacity style={styles.button} onPress={this.UserLoginFunction}>
                    <Text style={styles.buttonText} >Loing</Text>
                </TouchableOpacity>
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
    },
    button: {
        width:300,
        backgroundColor:'#1c313a',
        borderRadius: 25,
    },
    buttonText: {
        fontSize:16,
        fontWeight:'500',
        color:'#ffffff',
        textAlign:'center'
    }
});
