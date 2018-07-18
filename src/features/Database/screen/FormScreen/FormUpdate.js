import React, { Component } from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';

export default class FormUpdate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            TextInput_ID: this.props.GetInput_ID,
            TextInput_Name: this.props.GetInput_Name,
            TextInput_Password: this.props.GetInput_Password,
            TextInput_Email: this.props.GetInput_Email,
        }
    }

    UpdateStudentRecord = () =>{
        fetch('http://192.168.10.129/My_SQL/UpdateData.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id : this.state.TextInput_ID,
                name : this.state.TextInput_Name,
                password : this.state.TextInput_Password,
                email: this.state.TextInput_Email
            })
        }).then((response) => response.json())
            .then((responseJson) => {
                Alert.alert(responseJson);
            }).catch((error) => {
            console.error(error);
        });
    }


    render(){
        return(
            <View style={styles.container}>
                <TextInput
                    placeholder="Name Shows Here"
                    value={this.state.TextInput_Name}
                    onChangeText={ TextInputValue => this.setState({ TextInput_Name : TextInputValue }) }
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholderTextColor = "#ffffff"
                    selectionColor="#fff"
                    style={styles.inputBox}
                />
                <TextInput
                    value={this.state.TextInput_Email}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholderTextColor = "#ffffff"
                    selectionColor="#fff"
                    placeholder="Email Shows Here"
                    onChangeText={ TextInputValue => this.setState({ TextInput_Email : TextInputValue }) }
                    style={styles.inputBox}
                />
                <TextInput
                    value={this.state.TextInput_Password}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholderTextColor = "#ffffff"
                    selectionColor="#fff"
                    onChangeText={ TextInputValue => this.setState({ TextInput_Password : TextInputValue }) }
                    style={styles.inputBox}
                />
                <TouchableOpacity style={styles.button} onPress={this.UpdateStudentRecord} >
                    <Text style={styles.buttonText}> UPDATE STUDENT RECORD </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flexGrow: 1,
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
