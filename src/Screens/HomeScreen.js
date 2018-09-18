import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Icon, Button, Container, Header, Content, Thumbnail, Right, Body, Title } from 'native-base';
var headerImage = require('../../assets/images/header-image.jpg');
var footerImage = require('../../assets/images/footer-image.jpg');
class HomeScreen extends Component {
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
                    alignItems:"center"
                }}>
                    <Image source={headerImage} style={{width: "100%", height: 250, marginBottom: 15}}/>
                    <Text style={{fontFamily: "Zapfino", fontSize: 25, padding: 5}}>McKenzie Christopher</Text>
                    <Text style={{fontFamily: "Times New Roman", fontSize: 20}}>AND</Text>
                    <Text style={{fontFamily: "Zapfino", fontSize: 25, marginBottom: 15}}>Benjamin Pitts</Text>
                    <Text style={{fontFamily: "TimesNewRomanPSMT", fontSize: 15}}>#PITTSALWAYSBEENYOU</Text>
                    <Text style={{fontFamily: "Zapfino", fontSize: 25, padding: 5}}>August 16, 2019</Text>
                    <Text style={{fontFamily: "TimesNewRomanPSMT", fontSize: 15, marginBottom: 15}}>STEVENSVILLE, MARYLAND</Text>
                    <Text style={{fontFamily: "Zapfino", fontSize: 25, marginBottom: 15, padding: 5}}>M+B</Text>
                    <Image source={footerImage} style={{width: "100%", height: 250}}/>
                </Content>
            </Container>
        )
    }
}

export default HomeScreen;