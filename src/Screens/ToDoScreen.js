import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon, Button, Container, Header, Content, Right, Title, Body } from 'native-base';

class ToDoScreen extends Component {
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
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text>Things To Do Screen</Text>
                    <Text style={{fontFamily: "Zapfino", fontSize: 25, marginBottom: 15, padding: 5}}>M+B</Text>
                </Content>
            </Container>
        )
    }
}

export default ToDoScreen;