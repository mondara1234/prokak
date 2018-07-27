import React, { Component } from "react";
import { H3, Container, Header, Title, Content, Button, Icon, Card, CardItem, Text, Body, Left, Right, IconNB, View, Thumbnail } from "native-base";
export default class testCard extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Body>
                    <Title>Header</Title>
                    </Body>
                    <Right />
                </Header>
                <Content padder>
                    <View>
                        <Card bordered>
                            <CardItem style={{ paddingTop: 0, paddingBottom: 0, paddingLeft: 0, paddingRight: 0 }}>
                                <Body>
                                <Thumbnail square source={{uri: 'https://d13uib79k8il37.cloudfront.net/uploads/1483696710-16017-0724-8311/541215_10150876932920348_110139889_n_extra.jpg'}}  style={{ width:'100%', height: 200}} />
                                </Body>
                            </CardItem>
                            <CardItem bordered>
                                <Body>
                                <Button iconLeft bordered onPress={() => {console.log('clicked add assets')}}>
                                    <Icon name="md-add" />
                                    <Text>Add Things</Text>
                                </Button>
                                </Body>
                                <Right>
                                    <Text note>OPTIONAL</Text>
                                </Right>
                            </CardItem>
                        </Card>
                        <Card bordered>
                            <CardItem style={{ paddingTop: 0, paddingBottom: 0, paddingLeft: 0, paddingRight: 0 }}>
                                <Body>
                                <Thumbnail square source={{uri: 'https://d13uib79k8il37.cloudfront.net/uploads/1483696710-16017-0724-8311/541215_10150876932920348_110139889_n_extra.jpg'}}  style={{ width:'100%', height: 200}} />
                                </Body>
                            </CardItem>
                            <CardItem>
                                <Body>
                                <Button iconLeft bordered onPress={() => {console.log('clicked add assets')}}>
                                    <Icon name="md-add" />
                                    <Text>Add Things</Text>
                                </Button>
                                </Body>
                                <Right>
                                    <Text note>OPTIONAL</Text>
                                </Right>
                            </CardItem>
                        </Card>
                    </View>
                </Content>
            </Container>
        );
    }
}