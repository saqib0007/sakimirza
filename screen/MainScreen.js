
import React, {Component} from 'react';
import {Platform, StyleSheet,Button,Text,TextInput,View,Slider,Image, TouchableOpacity} from 'react-native';


export default class MainScreen extends Component {
  render() {
    return (
      
      <View style={styles.container}>
      
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Button onPress={()=> this.props.navigation.navigate('cs')} title='click now'/>
       
      </View>
       
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
