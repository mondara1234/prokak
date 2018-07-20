import React,{Component} from 'react';
import {AppRegistry, StyleSheet,Text,TextInput,View,Button} from 'react-native';
import {connect} from 'react-redux';
import {counterIncrement, counterDecrement, counterClear, counterSet} from './actions';

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
        const {container, countViewStyle, welcome, instructions} = styles;
        return(
            <View style={container}>
                <TextInput style={{width: 40, height:40, borderWidth:1}}
                           onChangeText={this.onChengeText}
                           value={this.state.count.toString()}
                />
                <View style={countViewStyle}>
                    <Button style={instructions} onPress={this.props.counterIncrement} title="+"/>
                    <Text style={welcome}> {this.props.count}</Text>
                    <Button style={instructions} onPress={this.props.counterDecrement} title="-"/>
                </View>
                <Button style={instructions} onPress={this.props.counterClear} title="Clear"/>
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
       margin: 10
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
        count: state
    };
}

export default connect(mapStateToProps,{counterIncrement,counterSet,counterDecrement,counterClear})(Testcount);
