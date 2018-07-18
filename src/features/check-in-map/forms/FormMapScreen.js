import React from 'react';
import { StyleSheet } from "react-native";
import MapView, { Marker } from 'react-native-maps';

class FormMapScreen extends React.PureComponent {
      constructor(props) {
       super(props);
       this.state = {
           inittialPosition:{
               latitude:0,
               longitude: 0,
               latitudeDelta: 0,
               longitudeDelta: 0,
           },
           markerPosition:{
               latitude: 0,
               longitude: 0,
           }
       };
   }

componentDidMount(){
       navigator.geolocation.getCurrentPosition((position) => {
           var latitude = parseFloat(position.coords.latitude)
           var longitude = parseFloat(position.coords.longitude)
           var initialRegion = {
               latitude: latitude,
               longitude: longitude,
               latitudeDelta: 0.0922,
               longitudeDelta: 0.0421,
           }
           this.setState({inittialPosition : initialRegion })
           this.setState({markerPosition : initialRegion })
       })
   }watchID: ?number = null

   componentWillUnmount(){
       navigator.geolocation.clearWatch(this.watchID)
   }

    render() {
        return (
                    <MapView
                        style={styles.containermap}
                        region={ this.state.inittialPosition}>
                        <Marker
                                 coordinate={this.state.markerPosition}
                                 title={"intbizth"}
                                 description={"จะเอ๋"}
                        />
                        <Marker
                            coordinate={{
                                latitude: 13.7859,
                                longitude: 100.6976
                            }}
                            title={"intbizthxd"}
                            description={"จะเอ๋zxc"}
                        />
                    </MapView>
            );
         }
    }

const styles = StyleSheet.create({
    containermap: {
        width: '100%',
        height: 250
    }
});

export default FormMapScreen;
