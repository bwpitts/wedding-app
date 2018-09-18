import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Linking } from 'react-native';
import { Icon, Button, Container, Header, Content, Right, Title, Body } from 'native-base';

class TravelScreen extends Component {
    render(){
        return(
            <Container>
                <Header noLeft>
                    <Body style={{width: 400}}>
                    <Title width={{flex:1}}>
                        <Button transparent onPress={()=> this.props.navigation.navigate("Home")}><Text style={{fontSize: 30, fontFamily: "TimesNewRomanPSMT", width: 400}}>MCKENZIE & BENJAMIN</Text></Button>
                    </Title>
                    </Body>
                    <Right style={{width: "20%"}}>
                        <Icon name="ios-menu" onPress={
                            () => this.props.navigation.openDrawer()
                        }/>
                    </Right>
                </Header>
                <Content contentContainerStyle={{
                    alignItems: 'center',
                }}>
                    <Text style={styles.header}>Travel Screen</Text>
                    <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: 1,
                            width: 75,
                            margin: 20
                        }}
                    />
                    <View style={styles.container}>
                        <Text style={styles.header}>The Inn at Chesapeake Bay Beach Club & Spa</Text>
                        <View><Image source={require("../../assets/images/theInnImage.png")} style={styles.image}/></View>
                        <Text style={styles.locationName}>Hotel</Text>
                        <Text style={styles.locationText}>180 Pier 1 Road</Text>
                        <Text style={styles.locationText}>Stevensville, MD 21666</Text>
                        <Text style={styles.locationNum}>(410) 604-5900</Text>
                        <Text style={styles.locationDesc}>On Site</Text>
                        <Text style={styles.locationDesc}>Rooms Available to Reserve after February 16, 2019</Text>
                        <Button block light onPress={()=> Linking.openURL("http://www.baybeachclub.com/the-inn")} style={styles.button}><Text>View</Text></Button>
                    </View>
                    <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: 1,
                            width: 75,
                            margin: 20
                        }}
                    />
                    <View style={styles.container}>
                        <Text style={styles.header}>Hilton Garden Inn Kent Island</Text>
                        <View><Image source={require("../../assets/images/HiltonGardenInnImage.jpg")} style={styles.image}/></View>
                        <Text style={styles.locationName}>Hotel</Text>
                        <Text style={styles.locationText}>3206 Main Street</Text>
                        <Text style={styles.locationText}>Grasonville, MD 21638</Text>
                        <Text style={styles.locationNum}>(410) 827-3877</Text>
                        {/*<Text style={styles.locationDesc}>Location Description</Text>*/}
                        <Button block light onPress={()=> Linking.openURL("http://hiltongardeninn3.hilton.com/en/hotels/maryland/hilton-garden-inn-kent-island-BWIKIGI/index.html")} style={styles.button}><Text>View</Text></Button>
                    </View>
                    <Text style={{fontFamily: "Zapfino", fontSize: 25, marginBottom: 15, padding: 5}}>M+B</Text>
                </Content>
            </Container>
        )
    }
}

export default TravelScreen;

const styles = StyleSheet.create({
    header: {
        fontFamily: "Zapfino",
        fontSize: 20,
        padding: 5
    },
    locationName: {
        fontFamily: "TimesNewRomanPSMT",
        fontSize: 20,
        fontWeight: "bold"
    },
    locationText:{
        fontFamily: "TimesNewRomanPSMT",
        fontSize: 18,
        fontWeight: "bold"
    },
    locationNum:{
        fontFamily: "TimesNewRomanPSMT",
        fontSize: 14
    },
    locationDesc:{
        fontFamily: "TimesNewRomanPSMT",
        fontSize: 14
    },
    container:{
        alignItems: "center",
    },
    button:{
        borderWidth: 1,
        borderColor: "#000",
        backgroundColor: "#fff",
        margin: 5,
        borderRadius:0
    },
    image:{
        width: 300,
        height: 150
    }
});