import React, { Component } from 'react';
import {View, Text, StyleSheet, TextInput} from "react-native";

const Row = (props) => {

    return (
        <View style={styles.row}>
            <Text style={styles.text}>{props.title}</Text>
            <TextInput style={styles.textbox}/>
        </View>
    );
}
const styles = StyleSheet.create({
    row: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: 10,
      marginBottom: 10
    },
    textbox: {
      flex:1,
      backgroundColor: 'black'
    },
    text: {
      flex: 1
    }
  });

export default Row;