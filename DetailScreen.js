import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

class DetailScreen extends Component {
    render () {
        return (
            <View style={styles.container}>
                <Text>{ this.props.navigation.state.params.Email }</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default DetailScreen;
