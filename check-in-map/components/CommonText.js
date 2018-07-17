import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';

const CommonText = (props) => {
    return (
        <Text style={[{  fontSize: props.size, color: props.color , textAlign:props.textAlign }]}>
            {`${props.text}`}
        </Text>
    )
};

CommonText.propTypes = {
    textAlign: PropTypes.string,
    size: PropTypes.number,
    color: PropTypes.string,
    text: PropTypes.string
};

CommonText.defaultProps = {
    text: '',
    textAlign: 'center',
    size: 18,
    color:'#080808'
};

export default CommonText;
