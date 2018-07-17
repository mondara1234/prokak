import React, { Component } from 'react';

import {  Text,StyleSheet,View, ListView, ActivityIndicator ,Platform} from 'react-native';

export default class ShowStudentListActivity extends Component {

    constructor(props) {

        super(props);

        this.state = {

            isLoading: true

        }
    }

    componentDidMount() {

        return fetch('http://192.168.1.30/My_SQL/ShowAllStudentsList.php')
            .then((response) => response.json())
            .then((responseJson) => {
                let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
                this.setState({
                    isLoading: false,
                    dataSource: ds.cloneWithRows(responseJson),
                }, function() {
                    // In this block you can do something with new state.
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    ListViewItemSeparator = () => {
        return (
            <View
                style={{
                    height: .5,
                    width: "100%",
                    backgroundColor: "#000",
                }}
            />
        );
    }

    GetStudentIDFunction=(ID,name, password,email)=> {

        this.props.navigation.navigate('DeleteDataActivity', {

            ID: ID,
            NAME: name,
            PASSWORD: password,
            EMAIL: email

        });
    }

        render() {
        if (this.state.isLoading) {
            return (
                <View style={{flex: 1, paddingTop: 20}}>
                    <ActivityIndicator />
                </View>
            );
        }

        return (

            <View style={styles.MainContainer_For_Show_StudentList_Activity}>

                <ListView

                    dataSource={this.state.dataSource}

                    renderSeparator= {this.ListViewItemSeparator}

                    renderRow={ (rowData) => <Text style={styles.rowViewContainer}
                        onPress={this.GetStudentIDFunction.bind(
                                this, rowData.ID,
                                rowData.name,
                                rowData.password,
                                rowData.email
                    )} >

                    {rowData.name} ,   ,{rowData.password}

                    </Text> }

                />

            </View>
        );
    }

}
const styles = StyleSheet.create({

    MainContainer :{

        alignItems: 'center',
        flex:1,
        paddingTop: 30,
        backgroundColor: '#fff'

    },

    MainContainer_For_Show_StudentList_Activity :{
        flex:1,
        marginLeft: 5,
        marginRight: 5

    },

    TextInputStyleClass: {

        textAlign: 'center',
        width: '90%',
        marginBottom: 7,
        height: 40,
        borderWidth: 1,
        borderColor: '#FF5722',
        borderRadius: 5 ,

    },

    TouchableOpacityStyle: {

        paddingTop:10,
        paddingBottom:10,
        borderRadius:5,
        marginBottom:7,
        width: '90%',
        backgroundColor: '#00BCD4'

    },

    TextStyle:{
        color:'#fff',
        textAlign:'center',
    },

    rowViewContainer: {
        fontSize: 20,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
    }

});
