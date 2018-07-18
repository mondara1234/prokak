import React, {Component} from 'react';
import { Container, Content } from 'native-base';
import CommonText from './CommonText';


class DetailScreen extends Component {
    render () {
        return (
            <Container>
                <Content>
                    <CommonText
                       // { this.props.navigation.state.params.Email }
                        text={'This is a Dashboard page'}
                    />
                </Content>
            </Container>
        );
    }
}

export default DetailScreen;
