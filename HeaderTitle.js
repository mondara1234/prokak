import React from 'react';
import CommonText from './CommonText';

const HeaderTitle = (props) => {
    return <CommonText text={props.text} color={props.color} size={props.size}  />
};

HeaderTitle.defaultProps = {
    text: '',
    color: '#ff2d12',
    size : 40
};

export default HeaderTitle;
