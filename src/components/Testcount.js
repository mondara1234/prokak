import React,{Component} from 'react';
import {AppRegistry, StyleSheet,Text,TextInput,View,Button} from 'react-native';
import {connect} from 'react-redux';
import {counterIncrement, counterDecrement, counterClear, counterSet} from './actions';
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
 counterdata = () => {
        store.dispatch({
            type: 'ADD',
            dataarray: 'kakzadsr'
                //store.getState([2])
        })
    }

    render(){
        console.log(this.props);
        const {container, countViewStyle, welcome, instructions} = styles;
        return(
            <View style={container}>
                <Button  onPress={this.counterdata} title="ShowData"/>
                <Text style={welcome}> {this.props.server.serverdataSource}</Text>
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


store.dispatch({
    type: 'ADD',
    dataarray: 'kakzadsr'
    //store.getState([2])
})

export default connect(mapStateToProps,{counterIncrement,counterSet,counterDecrement,counterClear})(Testcount);
