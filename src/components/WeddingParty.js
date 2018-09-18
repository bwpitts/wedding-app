import React, {Component} from 'react';
import { View, StyleSheet, Image, Text, Linking } from 'react-native';
import { Button } from 'native-base';

class WeddingParty extends Component{
    constructor(props){
        super(props)
    }
    render() {
        return (
            <View style={styles.container}>
                <View><Image source={this.props.image} style={styles.image}/></View>
                <Text style={styles.header}>{this.props.name}</Text>
                <Text style={styles.title}>{this.props.title}</Text>
                <Text style={styles.description}>{this.props.description}</Text>
            </View>
        );
    }
}

export default WeddingParty;

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
        justifyContent: "center",
        marginTop: 15
    },
    description:{
        fontFamily: "TimesNewRomanPSMT",
    },
    title:{
        fontSize: 18,
        fontWeight: "bold",
        fontFamily: "TimesNewRomanPSMT",
    },
    image:{
        borderRadius: 50,
        width: 100,
        height: 100
    }
});