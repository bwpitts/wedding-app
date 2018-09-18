import React, {Component} from 'react';
import { View, StyleSheet, Image, Text, Linking } from 'react-native';
import { Button } from 'native-base';

class ItineraryItem extends Component{
    constructor(props){
        super(props)
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>{this.props.header}</Text>
                <Text style={styles.pText}>{this.props.date}</Text>
                <Text style={styles.pText}>{this.props.time}</Text>
                <View><Image source={this.props.image}/></View>
                <Text style={styles.pText}>{this.props.locationName}</Text>
                <Text style={styles.pText}>{this.props.locationAddress}</Text>
                <Text style={styles.pText}>{this.props.locationState}</Text>
                <Button block light onPress={()=> Linking.openURL(this.props.mapUrl)} style={styles.button}><Text>Map</Text></Button>
                {/*<Button block light onPress={this.props.calendarUrl} style={styles.button}>Add To Calendar</Button>*/}
            </View>
        );
    }
}

export default ItineraryItem;

const styles = StyleSheet.create({
    header: {
        fontFamily: "Zapfino",
        fontSize: 25,
        padding: 5
    },
    pText: {
        fontFamily: "TimesNewRomanPSMT",
        fontSize: 20
    },
    container:{
        alignItems: "center",
        justifyContent: "center"
    },
    button:{
        borderWidth: 1,
        borderColor: "#000",
        backgroundColor: "#fff",
        margin: 5,
        borderRadius:0
    },
    separator:{
        borderBottomWidth: 1,
        borderBottomColor: "black",
        width: 75
    }
});