import React,{Component} from 'react';
import { StyleSheet,Text,TextInput,View,Button} from 'react-native';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {counterIncrement, counterDecrement, counterClear, counterSet,countermodara} from './actions';
//import {store} from "./StoreData";

class Testcount extends Component{
    constructor(props){
        super(props);
        this.state={
          count: ''
        };
        this.onChengeText = this.onChengeText.bind(this);
    }

    onChengeText(number){
        const count = parseInt(number);
        this.props.counterSet(count);
        this.setState({count});
    }

        render(){
        console.log(this.props);
        const {container, countViewStyle, welcome, instructions} = styles;
        const data = this.props.server.serverdataSource[0];
        const data1 = this.props.server.serverdataSource[1];
        return(
            <View style={container}>
                <Button  onPress={this.props.countermodara} title="ShowData"/>
                <Text style={welcome}>array[0]: {data}</Text>
                <Text style={welcome}>array[1]: {data1}</Text>
                <TextInput style={{width: 80, height:40, borderWidth:1}}
                           onChangeText={this.onChengeText}
                           value={this.state.count.toString()}
                />
                <View style={countViewStyle}>
                    <Button  onPress={this.props.counterIncrement} title="+"/>
                    <Text style={[welcome,{width: 80}]}> {this.props.count}</Text>
                    <Button  onPress={this.props.counterDecrement} title="-"/>
                </View>
                <Button  onPress={this.props.counterClear} title="Clear"/>
            </View>


        )
    }
}

const styles = StyleSheet.create({
    container:{
       flex:1,
       justifyContent:"center",
       alignItems:"center",
       backgroundColor:"#F5FCFF"
   },
    welcome:{
       fontSize: 20,
       textAlign:"center",
       marginVertical: 10
    },
    instructions:{
       textAlign:"center",
        backgroundColor:"#a8cccd",
        marginBottom:5
    },
    countViewStyle:{
       flexDirection:"row"
    }
});

function mapStateToProps(state) {
    return{
        count: state.counterreducer,
        server: state.serverreducer
    };
}
export default connect(mapStateToProps, {counterIncrement,counterSet,counterDecrement,counterClear,countermodara})
(Testcount);
