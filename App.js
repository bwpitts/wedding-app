import React from 'react';
import { StyleSheet, Text, View, Image, AsyncStorage } from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation';
import { Container, Header, Body, Content } from 'native-base';

import HomeScreen from './src/Screens/HomeScreen';
import ItineraryScreen from "./src/Screens/ItineraryScreen";
import TravelScreen from "./src/Screens/TravelScreen";
import RegistryScreen from "./src/Screens/RegistryScreen";
import PhotosScreen from "./src/Screens/PhotosScreen";
import ToDoScreen from "./src/Screens/ToDoScreen";
import WeddingPartyScreen from "./src/Screens/WeddingPartyScreen";
import Login from "./src/components/Login";

const isSignedIn = () => {
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem("userToken")
            .then(res => {
                if (res !== null){
                    resolve(true);
                } else {
                    resolve(false);
                }
            })
            .catch(err => reject(err));
    })
};

export default class App extends React.Component{
    constructor(props){
        super(props);

        this.state={
            signedIn: false,
            checkedSignIn: false
        };
    }
    componentDidMount(){
        isSignedIn()
            .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
            .catch(err => alert("An error occurred"));
    }

    render(){
        const { checkedSignIn, signedIn } = this.state;

        if (!checkedSignIn){
            return null;
        }
        if(signedIn){
            return <MyDrawerNavigator/>
        } else {
            return <Login/>
        }
    }

}

var menuImage = './assets/images/icon.png';

const CustomDrawerContentComponent = (props) => (
    <Container>
        <Header style={{height: 200}}>
            <Body>
            <Image
                style={styles.drawerImage}
                source={require(menuImage)}
            />
            </Body>
        </Header>
        <Content>
            <DrawerItems {...props}/>
        </Content>
    </Container>
);

const MyDrawerNavigator = createDrawerNavigator({
    // Login: { screen: Login},
    Home: { screen: HomeScreen },
    Itinerary: { screen: ItineraryScreen },
    Travel: { screen: TravelScreen },
    Registry: { screen: RegistryScreen },
    "Wedding Party": { screen: WeddingPartyScreen },
    Photos: { screen: PhotosScreen },
    "Things To Do":{ screen: ToDoScreen }
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
