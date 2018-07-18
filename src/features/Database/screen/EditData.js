import React, { Component } from 'react';
import {View, Alert, TextInput, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Logo from '../components/Logo';
import FormEdit from './FormScreen/FormEdit';
import FormUpdate from './FormScreen/FormUpdate';

export default class DeleteData extends Component {
    constructor(props) {
        super(props)
        this.state = {
            TextInput_ID: '',
            TextInput_Name: '',
            TextInput_Password: '',
            TextInput_Email: '',
        }
    }

    componentDidMount(){
        this.setState({
            TextInput_ID : this.props.navigation.state.params.ID,
            TextInput_Name: this.props.navigation.state.params.NAME,
            TextInput_Password: this.props.navigation.state.params.PASSWORD,
            TextInput_Email: this.props.navigation.state.params.EMAIL,
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Logo  Title='Edit Data'/>
                <FormUpdate
                    GetInput_ID = {this.props.navigation.state.params.ID}
                    GetInput_Name = {this.props.navigation.state.params.NAME}
                    GetInput_Password = {this.props.navigation.state.params.PASSWORD}
                    GetInput_Email = {this.props.navigation.state.params.EMAIL}/>
                <FormEdit GetInput_ID = {this.props.navigation.state.params.ID} />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container : {
        paddingBottom: 60,
        paddingTop:20,
        backgroundColor:'#455a64',
        flex: 1,
        alignItems:'center',
        justifyContent :'center'
    },
    StyleText : {
        marginVertical: 15,
        fontSize:18,
        color:'rgba(255, 255, 255, 0.7)'
    }
});
