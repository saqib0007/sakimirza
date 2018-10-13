import React, {Component} from 'react';
import {Platform, StyleSheet, Text,TextInput,View,Slider,Image, TouchableOpacity,FlatList } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

import Icon from "react-native-vector-icons/FontAwesome";
const myicon=(<Icon
  name="home"
  color="white"
  size={25}
/>)


export default class cs extends Component {
  static navigationOptions={
    tabBarLabel:'superior',
    tabBarIcon:() =>(
     myicon
    )

  }



 render() {
  const tableHead= ['fname', 'lname', 'address'];
  const tableData= [
    ['saqib', 'hussain', 'lalmusa'],
    ['habeeb', 'chudary', 'rajadi'],
    ['hamza', 'frooq', 'lalamusa'],
    [<Image style={styles.img} source={require('app/src/map.jpg')}/>,'hello','je ayaan nu' ],
  ];

   return (
     <View style={styles.container}>
       <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
         <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
         <Rows data={tableData} textStyle={styles.text}/>
       </Table>
     </View>
   )
 }
}

const styles = StyleSheet.create({
 container: { 
    flex: 1, padding: 16,
    paddingTop: 30,
    backgroundColor: '#fff'
   },
 head: { 
   height: 40,
   backgroundColor: '#f1f8ff' 
  },
 text: {
    margin: 6 
  },
  img:{
  width: 50,
  height: 50,
  borderRadius:20,
  },
  
});