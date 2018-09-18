import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Icon, Button, Container, Header, Content, Right, Title, Body } from 'native-base';
import ItineraryItem from "../components/ItineraryItem";

class ItineraryScreen extends Component {
    render(){
        return(
            <Container>
                <Header noLeft>
                    <Body style={{width: 400}}>
                    <Title width={{flex:1}}>
                        <Button transparent onPress={()=> this.props.navigation.navigate("Home")}><Text style={{fontSize: 20, fontFamily: "TimesNewRomanPSMT", width: 400}}>MCKENZIE & BENJAMIN</Text></Button>
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
                    marginBottom: 15
                }}>
                    <Text style={{fontFamily: "Zapfino", fontSize: 25, padding: 5}}>Itinerary</Text>
                    <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: 1,
                            width: 75,
                            margin: 15
                        }}
                    />
                    <ItineraryItem
                        header="Ceremony"
                        date="FRIDAY, AUGUST 16, 2019"
                        time="6:00 PM - 6:30 PM"
                        image={require("../../assets/images/Ring-Icon.png")}
                        locationName="CHESAPEAKE BAY BEACH CLUB"
                        locationAddress="500 MARINA CLUB ROAD"
                        locationState="STEVENSVILLE, MD 21666"
                        mapUrl="https://www.google.com/maps?cid=5945006643697317118"
                    />
                    <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: 1,
                            width: 75,
                            margin: 20
                        }}
                    />
                    <ItineraryItem
                        header="Cocktail Hour"
                        date="WEDNESDAY, AUGUST 14, 2019"
                        time="6:00 PM - 7:30 PM"
                        image={require("../../assets/images/Cocktail-Hour-Icon.png")}
                        locationName="CHESAPEAKE BAY BEACH CLUB"
                        locationAddress="500 MARINA CLUB ROAD"
                        locationState="STEVENSVILLE, MD 21666"
                        mapUrl="https://www.google.com/maps?cid=5945006643697317118"
                    />
                    <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: 1,
                            width: 75,
                            margin: 20
                        }}
                    />
                    <ItineraryItem
                        header="Reception"
                        date="FRIDAY, AUGUST 16, 2019"
                        time="7:30 PM - 11:00 PM"
                        image={require("../../assets/images/Reception-Icon.png")}
                        locationName="CHESAPEAKE BAY BEACH CLUB"
                        locationAddress="500 MARINA CLUB ROAD"
                        locationState="STEVENSVILLE, MD 21666"
                        mapUrl="https://www.google.com/maps?cid=5945006643697317118"
                    />
                    <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: 1,
                            width: 75,
                            margin: 20
                        }}
                    />
                    <ItineraryItem
                        header="Farewell Brunch"
                        date="SATURDAY, AUGUST 17, 2019"
                        time="10:30 AM - 12:00 AM"
                        image={require("../../assets/images/Brunch-Icon.png")}
                        locationName="KNOXIE'S TABLE"
                        locationAddress="180 PIER 1 ROAD"
                        locationState="STEVENSVILLE, MD 21666"
                        mapUrl="https://maps.google.com/?cid=9239695006770815484"
                    />
                    <Text style={{fontFamily: "Zapfino", fontSize: 25, marginBottom: 15, padding: 5}}>M+B</Text>
                </Content>
            </Container>
        )
    }
}

export default ItineraryScreen;

const styles = StyleSheet.create({

});