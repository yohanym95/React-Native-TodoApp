import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Button} from 'react-native';

export default function AddTodo({submitHandler}) {
  const [text, setText] = useState('');

  // eslint-disable-next-line prettier/prettier
  const changeHandler = (val) => {
    // console.log(val);
    setText(val);
  };
  return (
    <View>
      <TextInput
        placeHolder="new todo.."
        onChangeText={changeHandler}
        style={styles.input}
      />
      <Button
        onPress={() => submitHandler(text)}
        title="Add Todo"
        color="coral"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});
