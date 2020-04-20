import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default function header() {
  return (
    <View style={styles.header}>
      <Text style={styles.textstyle}> My Todos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    paddingTop: 20,
    backgroundColor: 'coral',
    alignItems: 'center',
  },
  textstyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    alignItems: 'center',
  },
});
