import React, { Component } from 'react';
import { View, Alert, TextInput,Text, TouchableOpacity } from 'react-native';
import styles from '../../SideMenu.style';
import FormDelete from './FormScreen/FormDelete';
import FormUpdate from './FormScreen/FromUpdate';

export default class DeleteData extends Component {
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

    render() {
        return (
            <View style={styles.MainContainer}>
                <Text style={{fontSize: 20, textAlign: 'center', marginBottom: 7}}> Edit Student Record Form </Text>
                <FormUpdate/>
                <FormDelete TextInput_ID = {this.props.navigation.state.params.ID} />

            </View>
        );
    }

}
