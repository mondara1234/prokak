import React from 'react';
import PropTypes from 'prop-types';
import Numeral from "numeral";
import { StyleSheet, Image } from "react-native";
import { Card, CardItem, Body } from 'native-base';
import CommonText from '../../common/components/CommonText';

const RenderItemListLocation = (props) => {
    let dii ='false';
    return (
        <Card>
            if(props.rangeNumber === '4' ) ?
            <CardItem
                button
                disabled={dii}
                style={styles.styleCardButton}
                onPress={() => {props.navigate({
                    routeName: props.checkType,
                    params: {
                        place: props.item,
                        deviceLatitude: props.latitude,
                        deviceLongitude: props.longitude
                    }
                })}}
            > : <CardItem
                button
                style={{backgroundColor:'#ababab'}}
                onPress={() => {props.navigate({
                    routeName: props.checkType,
                    params: {
                        place: props.item,
                        deviceLatitude: props.latitude,
                        deviceLongitude: props.longitude
                    }
                })}}
            >
                <CardItem style={styles.styleCardItem}>
                    <Body>
                        <Image
                            source={{uri: props.itemImage}}
                            style={styles.stylePicture}
                        />
                        <CommonText
                            text={props.itemName}
                            size={28}
                            style={styles.styleCommonText}
                        />
                        <CommonText
                            text={'ระยะห่าง ' + Numeral(props.rangeNumber).format('0,0') + ' ' + props.rangeUnit}
                            style={styles.styleCommonText}
                        />
                    </Body>
                </CardItem>
            </CardItem>
        </Card>
    )
};

RenderItemListLocation.propTypes = {
    item: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    itemName: PropTypes.string,
    navigate: PropTypes.function,
    latitude: PropTypes.string,
    itemImage: PropTypes.string,
    rangeUnit: PropTypes.string,
    longitude: PropTypes.string,
    checkType: PropTypes.string,
    rangeNumber: PropTypes.number,
    checkLength: PropTypes.string
};

RenderItemListLocation.defaultProps = {
    itemName: '',
    navigate: '',
    latitude: '',
    longitude: '',
    checkType: '',
    rangeUnit: '',
    itemImage: '',
    rangeNumber: '',
    checkLength: ''
};


const styles = StyleSheet.create({
    stylePicture: {
        width: '100%',
        height: 200,
        marginBottom: 5
    },
    styleCommonText: {
        paddingLeft: 25
    },
    styleCardItem: {
        backgroundColor: 'rgba(255,255,255, 0)',
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        paddingRight: 0
    },
    styleCardButton: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10
    }
});

export default RenderItemListLocation;
