/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function TodoItem({item, pressHandler}) {
  return (

    <View style={styles.item}>
      <TouchableOpacity onPress={() => pressHandler(item.key)}>
        <Icon name="trash-o" size={25} color="black" />
      </TouchableOpacity>
      <Text style={styles.textItem}>{item.text}</Text>
    </View>

  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 13,
    borderColor: '#000',
    borderStyle: 'dotted',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  textItem:{
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
