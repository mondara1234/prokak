import React from 'react';
import { Text } from 'react-native';

const CommonText = (props) => {
    return (
        <Text style={[{  fontSize: props.size, color: props.color , textAlign:props.textAlign }]}>
            {`${props.text}`}
        </Text>
    )
};

CommonText.defaultProps = {
    text: '',
    textAlign: 'center',
    size: 24,
    color:'#080808'
};

export default CommonText;
