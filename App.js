
import React, {Component} from 'react';
import {Platform, StyleSheet,Button,Text,TextInput,View,Slider,Image, TouchableOpacity} from 'react-native';
import AppNavigator from './src/config/navigation'

export default class App extends Component {
  render() {
    return (
      
      
      <AppNavigator/>
  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,},

});
