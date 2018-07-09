import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import {View,TouchableHighlight,Text} from 'react-native';
export default class LoingScreen extends Component {
    render() {
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center',}}>
            <Container>
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>Username</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Password</Label>
                            <Input />
                        </Item>
                    </Form>
                    <TouchableHighlight
                        style={{height:50,width:80,backgroundColor:'#F4D03F',
                            justifyContent:'center',flexDirection:'row',
                            alignItems:'center',borderRadius:25}} onPress={() => this.props.navigation.navigate("MyApp")}>
                        <Text style={{fontSize:25,fontWeight:'500'}}>กดดิ</Text>
                    </TouchableHighlight>
                </Content>
            </Container>
    </View>
        );
    }
}
