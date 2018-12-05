/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,KeyboardAvoidingView,TextInput,ImageBackground} from 'react-native';
import SearchInput from './Components/Search';
import GetImage from './utils/getImage';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      location: 'San Francisco',
    };
  }

  handleUpdateLocation = city => {
    this.setState({
      location: city,
    });
  };
  render() {
    const {location}=this.state
    return (

      <KeyboardAvoidingView style={styles.container} behavior="padding">

      <ImageBackground source={GetImage('Clear')} style={styles.imageContainer} imageStyle={styles.image}>

      <View style={styles.detailsContainer}>
        <Text style={[styles.largeText, styles.textStyle]}>{location}</Text>
        <Text style={[styles.smallText,styles.textStyle]}>Light Cloud</Text>
        <Text style={[styles.largeText,styles.textStyle]} >24 celcius</Text>
           < SearchInput placeholder = "search for city"
           onSubmit = {this.handleUpdateLocation}
           />
           </View>
           </ImageBackground>


      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
   container: {
       flex: 1,
       backgroundColor: '#34495E',
     },
     imageContainer: {
       flex: 1,
     },
     image: {
       flex: 1,
       width: null,
       height: null,
       resizeMode: 'cover',
     },
     detailsContainer: {
       flex: 1,
       justifyContent: 'center',
       backgroundColor: 'rgba(0,0,0,0.2)',
       paddingHorizontal: 20,
     },
     textStyle: {
       textAlign: 'center',
       fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
       color: 'white',
     },
     largeText: {
       fontSize: 44,
     },
     smallText: {
       fontSize: 18,
     },

  
});
