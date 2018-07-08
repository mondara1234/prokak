
import React, { Component } from 'react';
import {StyleSheet,View,Button,Alert,Text} from 'react-native';
import getDirections from 'react-native-google-maps-directions';
import MapView, { PROVIDER_GOOGLE,Marker  } from 'react-native-maps'
import {GooglePlacesAutocomplete,} from 'react-native-google-places-autocomplete';

const homePlace = {
    description: 'Home',
    geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
};
const workPlace = {
    description: 'Work',
    geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
};

export default class gmapsDirections extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: '' ,
            inittialPosition:{
                latitude:0,
                longitude: 0,
                latitudeDelta: 0,
                longitudeDelta: 0,
            },
            markePosition:{
                latitude: 0,
                longitude: 0,
            }
        };
    }


    componentDidMount(){
        navigator.geolocation.getCurrentPosition((position) => {
            var lat = parseFloat(position.coords.latitude)
            var long = parseFloat(position.coords.longitude)
            var initialRegion = {
                latitude: lat,
                longitude: long,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }
            this.setState({inittialPosition : initialRegion })
            this.setState({markePosition : initialRegion })
        })
    }watchID: ?number = null
    componentWillUnmount(){
        navigator.geolocation.clearWatch(this.watchID)
    }


    handleGetDirections = () => {
            const data = {
                source: {
                    latitude: 37.78825,
                    longitude: -122.4324
                },
                destination: {
                    latitude:  this.state.lat,
                    longitude: this.state.long ,
                },
            params: [
                {
                    key: "travelmode",
                    value: "driving"        // may be "walking", "bicycling" or "transit" as well
                },
                {
                    key: "dir_action",
                    value: "navigate"       // this instantly initializes navigation using the given travel mode
                }
            ]
        }

        getDirections(data)
    }



    componentDidMount() {

        this.Clock = setInterval( () => this.GetTime(), 1000 );

    }
    componentWillUnmount(){

        clearInterval(this.Clock);

    }

    GetTime() {
        // Creating variables to hold time.
        var date, hour, minutes, seconds, fullTime,day,month,year,fulldate;

        // Creating Date() function object.
        date = new Date();

        // Getting current hour from Date object.
        hour = date.getHours();

        // Getting the current minutes from date object.
        minutes = date.getMinutes();
        // Checking if the minutes value is less then 10 then add 0 before minutes.
        if(minutes < 10)
        {           minutes = '0' + minutes.toString();}

        //Getting current seconds from date object.
        seconds = date.getSeconds();
        // If seconds value is less than 10 then add 0 before seconds.
        if(seconds < 10)
        {            seconds = '0' + seconds.toString();}

        // Adding all the variables in fullTime variable.
        fullTime = hour.toString() + ':' + minutes.toString() + ':' + seconds.toString();

        day = date.getDay() + 1 ;
        if(day < 10)
        {            day = '0'  + day.toString();}
        month =date.getMonth() + 1;
        if(month < 10)
        {            month = '0' + month.toString();}
        year = date.getFullYear();

        fulldate = day.toString() + '/'+ month.toString()+ '/'+year.toString();
            // Setting up fullTime variable in State.
        this.setState({

            time: fullTime,
            dates: fulldate,

        });
    }

    render() {

        return (
            <View style={styles.container}>
                <View style={{width: 400,height:300}}>
                    <MapView
                        style={styles.map}
                        region={
                            this.state.inittialPosition}>
                        <Marker  onPress={this.handleGetDirections}
                                 coordinate={
                                     this.state.markePosition
                                 }
                                 title={"intbizth"}
                                 description={"จะเอ๋"}
                        />
                        <Marker
                            coordinate={{
                                latitude: 13.7859,
                                longitude: 100.6976,
                            }}
                            title={"intbizthxd"}
                            description={"จะเอ๋zxc"}
                        />
                        </MapView>
                </View>
                <Text style={{fontSize:30}}>{this.state.dates}
                </Text>
                <Text style={{fontSize:30}}>  {this.state.time}
                </Text>
                <View style={{ width:200,height:200, flex: 1 }}>
                    <GooglePlacesAutocomplete
                        placeholder="Search"
                        minLength={1} // minimum length of text to search
                        autoFocus={true}
                        returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
                        listViewDisplayed="auto" // true/false/undefined
                        fetchDetails={true}
                        renderDescription={row => row.description} // custom description render
                        onPress={(data, details = null) => {
                            Alert.alert(data.valueOf().toString(),details.valueOf().toString());
                            console.log(details);
                        }}
                        getDefaultValue={() => {
                            return ''; // text input default value
                        }}
                        query={{
                            // available options: https://developers.google.com/places/web-service/autocomplete
                            key: 'AIzaSyAGF8cAOPFPIKCZYqxuibF9xx5XD4JBb84',
                            language: 'th', // language of the results
                            types: '(cities)', // default: 'geocode'
                        }}
                        styles={{
                            description: {
                                fontWeight: 'bold',

                            },
                            predefinedPlacesDescription: {
                                color: '#1faadb',
                            },
                        }}
                        currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
                        nearbyPlacesAPI="GooglePlacesSearch" // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
                        GoogleReverseGeocodingQuery={{
                            // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
                        }}
                        GooglePlacesSearchQuery={{
                            // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
                            rankby: 'distance',
                            types: 'All',
                        }}
                        filterReverseGeocodingByTypes={[
                            'locality',
                            'administrative_area_level_3',
                        ]} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
                        currentLocationLabel="Current location"
                        predefinedPlaces={[homePlace, workPlace]}
                        debounce={0}
                    />
                </View>
                <Button onPress={this.handleGetDirections} title="Get Directions" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
       position: 'absolute',
        top: 0,
        left:0,
        bottom:0,
        right:0,
        alignItems:'center',
    },map: {
        position: 'absolute',
        top: 0,
        left:0,
        bottom:0,
        right:0,
    },

});
