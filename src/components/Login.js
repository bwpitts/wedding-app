import React from 'react';
import {TextInput, StyleSheet, View, Text, TouchableOpacity, Platform, AsyncStorage} from 'react-native';
import * as firebase from 'firebase';
import { Form, Button, Container, Content, Input, Item, Label } from 'native-base';

const firebaseConfig = {
    apiKey: "AIzaSyAvKCscxuuddN-TfsB0RrJL2G2xqXuTmt0",
    authDomain: "mywedding-ef14f.firebaseapp.com",
    databaseURL: "https://mywedding-ef14f.firebaseio.com",
    projectId: "mywedding-ef14f",
    storageBucket: "mywedding-ef14f.appspot.com",
    messagingSenderId: "693415138864"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default class LogInScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            errorMessage: null,
            currentUser: null
        }
    }

    authentication(){
        firebase
            .auth()
            .signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((data) => {
                this.setState({errorMessage: null});
                this.setState({currentUser: data.user.email});
                this._storeUser(data.user);
            })
            .then((data) => {
                this.props.navigation.navigate("Home");
            })
            .catch(error => {
                if(error.message == "There is no user record corresponding to this identifier. The user may have been deleted."
                    && this.state.password === "Benzie"){
                    this.signupNewUser(this.state.email, this.state.password);
                } else {
                    this.setState({errorMessage: error.message});
                }
            })
    }

    signupNewUser(email, password){
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((data)=>{
                this.setState({errorMessage: null});
                this.setState({currentUser: data.user.email});
                this._storeUser(data.user);
                this.props.navigation.navigate("Home");
            })
            .catch(error=> {
                this.setState({errorMessage: error.message});
            })
    }

    forgotPassword(){
        firebase
            .auth()
            .sendPasswordResetEmail(this.state.email)
            .then(() => alert("Email has been sent"))
            .catch((error) => {
                this.setState({errorMessage: error.message})
            });
    }

    _storeUser = async (user) => {
        try {
            await AsyncStorage.setItem('userToken', user.uid);
        } catch (error) {
            // Error saving data
        }
    };

    render() {
        return (
            <Container>
                <Content>
                {this.state.errorMessage &&
                <Text style={{ color: 'red', fontWeight: "bold", fontSize: 16 }}>
                    {this.state.errorMessage}
                </Text>}
                <Form>
                    <Item floatingLabel>
                        <Label>Email Address</Label>
                        <Input onChangeText={(email) => this.setState({email})}
                               value={this.state.email}/>
                    </Item>
                    <Item floatingLabel>
                        <Label>Password</Label>
                        <Input secureTextEntry={true}
                               onChangeText={(password) => this.setState({password})}
                               value={this.state.password}/>
                    </Item>
                    <Button onPress={() => this.authentication()}>
                        <Text>Log in</Text>
                    </Button>
                    <Button transparent onPress={()=> this.forgotPassword()}>
                        <Text>Forgot Password?</Text>
                    </Button>
                </Form>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({

});
