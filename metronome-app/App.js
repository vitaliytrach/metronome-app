import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Set from './components/Set';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Song Sets</Text>

        <View style={styles.items}>
          {/* This is where the sets go */}
          <Set text={'09/10/21'} />
          <Set text={'09/15/21'} />
          <Set text={'10/08/21'} />
        </View>
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
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {},
});
