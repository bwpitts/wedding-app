import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation';
import { Container, Header, Body, Content } from 'native-base';

import HomeScreen from './src/Screens/HomeScreen';
import ItineraryScreen from "./src/Screens/ItineraryScreen";
import TravelScreen from "./src/Screens/TravelScreen";
import RegistryScreen from "./src/Screens/RegistryScreen";
import PhotosScreen from "./src/Screens/PhotosScreen";
import ToDoScreen from "./src/Screens/ToDoScreen";
import FAQScreen from "./src/Screens/FAQScreen";
import WeddingPartyScreen from "./src/Screens/WeddingPartyScreen";

export default () =>{
    return(
        <MyDrawerNavigator/>
    )
}
var menuImage = require('./assets/images/icon.png');

const CustomDrawerContentComponent = (props) => (
    <Container>
        <Header style={{height: 200}}>
            <Body>
            <Image
                style={styles.drawerImage}
                source={menuImage}
            />
            </Body>
        </Header>
        <Content>
            <DrawerItems {...props}/>
        </Content>
    </Container>
);

const MyDrawerNavigator = createDrawerNavigator({
    Home: { screen: HomeScreen },
    Itinerary: { screen: ItineraryScreen },
    Travel: { screen: TravelScreen },
    Registry: { screen: RegistryScreen },
    "Wedding Party": { screen: WeddingPartyScreen },
    Photos: { screen: PhotosScreen },
    "Things To Do":{ screen: ToDoScreen },
    FAQ: { screen: FAQScreen }
},{
    contentComponent:CustomDrawerContentComponent,
    drawerPosition: 'right',
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    drawerImage:{
      height: 150,
      width: 150,
      borderRadius: 75
    }
});
