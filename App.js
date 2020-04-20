/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoitem';
import AddTodo from './components/addTodo';

const App: () => React$Node = () => {
  const [todos, setTodos] = useState([
    {text: 'buy coffee', key: '1'},
    {text: 'play on the switch', key: '2'},
    {text: 'create an app', key: '3'},
  ]);

  const pressHandler = key => {
    console.log(key);
    setTodos(prevTodos => {
      console.log(prevTodos);
      //finally return ex: click 1, when return without 1, like using filter it filtering wiht condition
      return prevTodos.filter(todo => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    setTodos(prevTodos => {
      return [{text: text, key: Math.random.toString()}, ...prevTodos];
    });
  };
  return (
    <>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({item}) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightyellow',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});

export default App;
