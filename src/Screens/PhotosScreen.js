import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Icon, Button, Container, Header, Content, Right, Title, Body } from 'native-base';
import PropTypes from 'prop-types';
import ImageViewer from '@dwqs/react-native-image-viewer';
import GalleryImage from "../components/GalleryImage";

export default class PhotosScreen extends Component {
    constructor(props) {
        super(props);
        this.openLightbox = (index) => {
            this.setState({
                index,
                shown: true,
            });
        };
        this.hideLightbox = () => {
            this.setState({
                index: 0,
                shown: false,
            });
        };
    }
    state = {
        index: 0,
        shown: false,
    };
    render(){
        // const { images } = this.props;
        const images = ['https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F459225%2Fpexels-photo-459225.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26h%3D350&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fscenery%2F&docid=9CUnCQ55dyyreM&tbnid=W-yWqCRmcKaYhM%3A&vet=10ahUKEwi6ifWf68TdAhUxuVkKHRMMD30QMwjqASgAMAA..i&w=737&h=350&bih=799&biw=1738&q=scenery&ved=0ahUKEwi6ifWf68TdAhUxuVkKHRMMD30QMwjqASgAMAA&iact=mrc&uact=8', 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F206673%2Fpexels-photo-206673.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26h%3D350&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fscenery%2F&docid=9CUnCQ55dyyreM&tbnid=hX_AmVVoRJlVFM%3A&vet=10ahUKEwi6ifWf68TdAhUxuVkKHRMMD30QMwjsASgCMAI..i&w=529&h=350&bih=799&biw=1738&q=scenery&ved=0ahUKEwi6ifWf68TdAhUxuVkKHRMMD30QMwjsASgCMAI&iact=mrc&uact=8'];
        const { index, shown } = this.state;
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
                    flex: 1,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                }}>
                    {(() =>
                        images.map((image, idx) =>
                            <GalleryImage
                                index={idx}
                                key={idx}
                                onPress={this.showLightbox}
                                uri={image.uri}
                            />
                        ))}
                    <ImageViewer
                        shown={shown}
                        imageUrls={images}
                        onClose={this.hideLightbox}
                        index={index}
                    />
                </Content>
            </Container>
        )
    }
}
PhotosScreen.propTypes = {
    images: PropTypes.array,
};