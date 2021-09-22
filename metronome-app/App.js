import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import Set from './components/Set';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.addContainer}>

        {/* Set Name */}
        <View style={styles.row}>
          <Text style={styles.text}>Set Name</Text>
          <TextInput style={styles.textbox}/>
        </View>

        {/* Title */}
        <View style={styles.row}>
          <Text style={styles.text}>Title</Text>
          <TextInput style={styles.textbox}/>
        </View>

        {/* 4/4 6/8 */}
        <View style={styles.rowBPM}>
          <Text style={styles.bpmText}>4/4</Text>
          <Text style={styles.bpmText}>6/8</Text>
        </View>

        {/* Bpm */}
        <View style={styles.row}>
          <Text style={styles.text}>Bpm</Text>
          <TextInput style={styles.textbox}/>
        </View>
        <Button title="Add" />
      </View>

      <View style={styles.songListContainer}>

      </View>

    </View>
  );
}

// Darkest to lightest
// 1 - #581845
// 2 - #900c3f
// 3 - #c70039
// 4 - #ff5733
// 5 - #ffc30f

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffc30f'
  },
  songListContainer: {
    flex: 1,
    backgroundColor: 'salmon'
  },
  addContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    margin: 10
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10
  },
  rowBPM: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-evenly'
  },
  textbox: {
    flex:1,
    backgroundColor: 'black'
  },
  text: {
    flex: 1
  },
  bpmText: {
    padding: 10,
    backgroundColor: 'white'
  }
});
