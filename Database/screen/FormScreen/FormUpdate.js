import React, { Component } from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from '../../SideMenu.style';
export default class FormUpdate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            TextInput_Student_ID: '',
            TextInput_Student_Name: '',
            TextInput_Student_Password: '',
            TextInput_Student_Email: '',
        }
    }

    componentDidMount(){
        this.setState({
            TextInput_Student_ID : this.props.navigation.state.params.ID,
            TextInput_Student_Name: this.props.navigation.state.params.NAME,
            TextInput_Student_Password: this.props.navigation.state.params.PASSWORD,
            TextInput_Student_Email: this.props.navigation.state.params.EMAIL,
        })
    }

    UpdateStudentRecord = () =>{
        fetch('http://192.168.1.30/My_SQL/UpdateStudentRecord.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id : this.state.TextInput_Student_ID,
                name : this.state.TextInput_Student_Name,
                password : this.state.TextInput_Student_Password,
                email: this.state.TextInput_Student_Email
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
                    value={this.state.TextInput_Student_Name}
                    onChangeText={ TextInputValue => this.setState({ TextInput_Student_Name : TextInputValue }) }
                    underlineColorAndroid='transparent'
                    style={styles.TextInputStyleClass}
                />
                <TextInput
                    placeholder="Password Shows Here"
                    value={this.state.TextInput_Student_Password}
                    onChangeText={ TextInputValue => this.setState({ TextInput_Student_Password : TextInputValue }) }
                    underlineColorAndroid='transparent'
                    style={styles.TextInputStyleClass}
                />
                <TextInput
                    placeholder="Email Shows Here"
                    value={this.state.TextInput_Student_Email}
                    onChangeText={ TextInputValue => this.setState({ TextInput_Student_Email : TextInputValue }) }
                    underlineColorAndroid='transparent'
                    style={styles.TextInputStyleClass}
                />
                <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={this.UpdateStudentRecord} >
                    <Text style={styles.TextStyle}> UPDATE STUDENT RECORD </Text>
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
