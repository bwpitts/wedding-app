import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Icon, Button, Container, Header, Content, Right, Title, Body } from 'native-base';
import WeddingParty from "../components/WeddingParty";

class WeddingPartyScreen extends Component {
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
                    <Text style={{fontFamily: "Zapfino", fontSize: 25, padding: 5}}>Wedding Party</Text>
                    <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: 1,
                            width: 75,
                            marginTop: 15
                        }}
                    />
                    <WeddingParty
                        image={require("../../assets/images/Alyson.jpg")}
                        name="Alyson Holland"
                        title="Matron of Honor"
                        description="This is Alyson"
                    />
                    <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: 1,
                            width: 75,
                            marginTop: 15
                        }}
                    />
                    <WeddingParty
                        image={require("../../assets/images/Cesar.jpg")}
                        name="Cesar Ramos"
                        title="Best Man"
                        description="This is Cesar"
                    />
                    <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: 1,
                            width: 75,
                            marginTop: 15
                        }}
                    />
                    <WeddingParty
                        image={require("../../assets/images/Paige.jpg")}
                        name="Paige Christopher"
                        title="Maid of Honor"
                        description="This is Paige"
                    />
                    <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: 1,
                            width: 75,
                            marginTop: 15
                        }}
                    />
                    <WeddingParty
                        image={require("../../assets/images/Drew.jpg")}
                        name="Drew Yoder"
                        title="Groomsman"
                        description="This is Drew"
                    />
                    <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: 1,
                            width: 75,
                            marginTop: 15
                        }}
                    />
                    <WeddingParty
                        image={require("../../assets/images/Danielle.jpg")}
                        name="Danielle Caimona"
                        title="Bridesmaid"
                        description="This is Danielle"
                    />
                    <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: 1,
                            width: 75,
                            marginTop: 15
                        }}
                    />
                    <WeddingParty
                        image={require("../../assets/images/Melvin.jpg")}
                        name="Melvin Isabel"
                        title="Groomsman"
                        description="This is Melvin"
                    />
                    <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: 1,
                            width: 75,
                            marginTop: 15
                        }}
                    />
                    <WeddingParty
                        image={require("../../assets/images/Allisyn.jpg")}
                        name="Allisyn Freburger"
                        title="Bridesmaid"
                        description="This is Allisyn"
                    />
                    <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: 1,
                            width: 75,
                            marginTop: 15
                        }}
                    />
                    <WeddingParty
                        image={require("../../assets/images/Trevor.jpg")}
                        name="Trevor Warner"
                        title="Groomsman"
                        description="This is Trevor"
                    />
                    <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: 1,
                            width: 75,
                            marginTop: 15
                        }}
                    />
                    <WeddingParty
                        image={require("../../assets/images/Sophie.jpg")}
                        name="Sophie Davis"
                        title="Bridesmaid"
                        description="This is Sophie"
                    />
                    <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: 1,
                            width: 75,
                            marginTop: 15
                        }}
                    />
                    <WeddingParty
                        image={require("../../assets/images/Zach.jpg")}
                        name="Zach Martin"
                        title="Groomsman"
                        description="This is Zach"
                    />
                    <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: 1,
                            width: 75,
                            marginTop: 15
                        }}
                    />
                    <WeddingParty
                        image={require("../../assets/images/Jess.jpg")}
                        name="Jessica Pitts"
                        title="Bridesmaid"
                        description="This is Jess"
                    />
                    <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: 1,
                            width: 75,
                            marginTop: 15
                        }}
                    />
                    <WeddingParty
                        image={require("../../assets/images/Josh.jpg")}
                        name="Josh Moultrie"
                        title="Groomsman"
                        description="This is Josh"
                    />
                    <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: 1,
                            width: 75,
                            marginTop: 15
                        }}
                    />
                    <WeddingParty
                        image={require("../../assets/images/Meaghan.jpg")}
                        name="Meghan Smith"
                        title="Bridesmaid"
                        description="This is Meaghan"
                    />
                    <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: 1,
                            width: 75,
                            marginTop: 15
                        }}
                    />
                    <WeddingParty
                        image={require("../../assets/images/Ryan.jpg")}
                        name="Ryan Holland"
                        title="Groomsman"
                        description="This is Ryan"
                    />
                    <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: 1,
                            width: 75,
                            marginTop: 15
                        }}
                    />
                    <WeddingParty
                        image={require("../../assets/images/Avery.jpg")}
                        name="Avery Matthews"
                        title="Flower Girl"
                        description="This is Avery"
                    />
                    <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: 1,
                            width: 75,
                            marginTop: 15
                        }}
                    />
                    <WeddingParty
                        image={require("../../assets/images/Bryce.jpg")}
                        name="Bryce Matthews"
                        title="Ring Bear"
                        description="This is Bryce"
                    />
                </Content>
            </Container>
        )
    }
}

export default WeddingPartyScreen;

const styles = StyleSheet.create({

});