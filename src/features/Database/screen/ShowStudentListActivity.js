import React,{Component} from 'react';
import {View, Text, ScrollView, StyleSheet, FlatList,ActivityIndicator} from 'react-native';
import { Item, Input, Icon, List,H3,ListItem, Left, Thumbnail, Body  } from 'native-base';

export default class ShowStudentListActivity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
            isLoading: true
        }
    }

    componentDidMount() {
        return fetch('http://192.168.1.30/My_SQL/ShowAllDataList.php').then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson
                }, function() {
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    // _renderItem = ({item,index}) => {
    //     return (
    //         <View style={{flex: 1 ,width: '100%', backgroundColor: index % 2 == 0 ? "#8ef7ff" : "#ff78f4"}}>
    //             <ListItem thumbnail onPress={this.GetStudentIDFunction.bind(this, item.ID)}>
    //                 <Left>
    //                     <Thumbnail source={{uri: item.name}}  style={{ width: 60, height: 60, margin: 5}} />
    //                 </Left>
    //                 <Body>
    //                 <H3 style={{fontSize: 20, color: '#020202', marginBottom: 5}}>{item.email} </H3>
    //                 <Text style={{ fontSize: 16, color: '#292929',}}> {item.password} </Text>
    //                 </Body>
    //             </ListItem>
    //         </View>
    //     )
    // };

    _renderItem = ({item, index}) => {
        let range = `${item._distance}`;
        let rangeLength = range.length;
        let rangeNumber = rangeLength < 4 ? range : range/1000;
        let rangeUnit = rangeLength < 4 ? 'm' : 'km';
        let checkType = this.props.navigation.state.params === 'check-in' ? CHECK_IN : CHECK_OUT;
        let checkLength = rangeNumber <= 4 ? 'true' : 'false';
        console.log(index);
        return (
            <Renderitem
                navigate={this.props.navigation.navigate}
                latitude={this.state.latitude}
                longitude={this.state.longitude}
                index={index}
                checkType={checkType}
                item={item}
                itemImage={item._links.image.href}
                itemName={item.name}
                rangeNumber={rangeNumber}
                rangeUnit={rangeUnit}
                checkLength={checkLength}
            />
        )
    };

    GetStudentIDFunction=(ID)=> {
        this.props.navigation.navigate('EditDataActivity', {
            ID: ID
        });
    }

        render() {
        if (this.state.isLoading) {
            return (
                <View style={[styles.container, {paddingTop: 20}]}>
                    <ActivityIndicator />
                </View>
            );
        }
        return (
            <View style={styles.container}>
                <View style={[styles.Searchstyle,{marginTop:30,marginBottom:10,}]}>
            <Item >
                <Icon  name="search"   underlineColorAndroid='rgba(0,0,0,0)'/>
                <Input style={[styles.Searchstyle,{paddingLeft:30}]} placeholder="Select data" placeholderTextColor = "#ffffff"/>
            </Item>
                </View>

                <FlatList
                    data={this.state.dataSource}
                    renderItem={this._renderItem}
                    keyExtractor={(item, index) => index}
                />
        </View>
        );
    }

}
const styles = StyleSheet.create({
    container : {
        backgroundColor:'#455a64',
        flex: 1
    },
    Searchstyle :{
       backgroundColor: 'rgba(255, 255,255,0.2)'
    },
    rowViewContainer: {
        fontSize: 20,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
    }

});
