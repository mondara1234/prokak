import React, { Component } from 'react';
import { Container, Content, Header, Left, Body, Right, Button, Icon, Title, Thumbnail, Item, Input, Text} from 'native-base';
import {View,TouchableHighlight} from 'react-native';


export default class App extends Component {
constructor(props) {
    super(props);
    this.state = {text: ''};
    }
render() {
        return (
            <Container style={{backgroundColor:'#fe2526' }}>
                <Content>
                    <Header style={{backgroundColor:'#196F3D'}}>
                        <Left>
                            <Button transparent
                                onPress={()=>this.props.navigation.openDrawer()}
                            >
                                <Icon name='menu' />
                            </Button>
                        </Left>
                        <Body>
                        <Title> หน้าหลัก </Title>
                        </Body>
                        <Right>
                        </Right>
                    </Header>
                    <View style={{flex:1}}>
                    <View style={{justifyContent:'center',flexDirection:'row',marginTop:30}}>
                        <Thumbnail
                            style={{height:300,width:300,borderRadius:100}}
                            source={{ uri: 'https://media.giphy.com/media/8Lc5xmvzRhlLy/giphy.gif' }} />
                    </View>
                    <View style={{justifyContent:'center',flexDirection:'row',marginTop:30,marginBottom:10}}>
                        <Text style={{fontSize:25,fontWeight:'400'}}> Wecome </Text>
                    </View>
                    <Item rounded
                          style={{backgroundColor:'white',margin:20,marginLeft:20}}>
                        <Input
                            placeholder="Search In Here"
                            placeholderTextColor='#D5D8DC'
                            returnKeyType = {"done"}
                            onChangeText={(value) => {this.setState({text: value})}}
                            value={this.state.text}
                        />

                        <TouchableHighlight
                            style={{height:50,width:80,backgroundColor:'#F4D03F',
                                justifyContent:'center',flexDirection:'row',
                                alignItems:'center',borderRadius:25}} onPress={() => this.props.navigation.navigate("DetailsActivity")}>
                            <Text style={{fontSize:25,fontWeight:'500'}}>กดดิ</Text>
                        </TouchableHighlight>
                    </Item>
                </View>
            </Content>
        </Container>
        );
    }
}
