import React, { Component } from 'react';


import { StyleSheet, TextInput, View, Alert, Button, Text} from 'react-native';
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


        fetch('127.0.0.1:80/User_Login.php', {
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

                // If server response message same as Data Matched
                if(responseJson === 'Data Matched')
                {

                    //Then open Profile activity and send user email to profile activity.
                    this.props.navigation.navigate("Details", { Email: UserEmail });

                }
                else{

                    Alert.alert(responseJson);
                }

            }).catch((error) => {
            console.error(error);
        });

    }
    render() {
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center',}}>

                    <Text style= {{fontSize: 20}}>User Login Form</Text>

                    <TextInput

                        // Adding hint in Text Input using Place holder.
                        placeholder="Enter User Email"

                        onChangeText={UserEmail => this.setState({UserEmail})}

                        // Making the Under line Transparent.
                        underlineColorAndroid='transparent'

                        style={{fontSize: 20}}
                    />

                    <TextInput

                        // Adding hint in Text Input using Place holder.
                        placeholder="Enter User Password"

                        onChangeText={UserPassword => this.setState({UserPassword})}

                        // Making the Under line Transparent.
                        underlineColorAndroid='transparent'

                        style={{fontSize: 20}}

                        secureTextEntry={true}
                    />

                    <Button title="Click Here To Login" onPress={this.UserLoginFunction} color="#2196F3" />



                </View>

                );
                }
            }
