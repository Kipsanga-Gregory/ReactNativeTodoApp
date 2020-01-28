import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, Alert, TouchableNativeFeedback,Keyboard} from 'react-native';
import Header from './Components/Header';
import TodoItem from './Components/TodoItem';
import AddTodo from './Components/AddTodo';

export default function App() {
const [todos, setTodo] = useState([
  {text: 'Gregory', key: 1},
  {text: 'Shaun', key : 2},
  {text: 'Kipsanga', key: 3},
  {text: 'Charlotte', key: 4}
])
const pressHandler = (key)=>{
  Alert.alert('DELETE TODO', 'Are you sure you want to delete this todo?', [{text: 'Yes', onPress:()=>{
    setTodo((prevTodo) => {
      return prevTodo.filter( todo => todo.key != key)
    })
  }},{text:'No', onPress:()=>{console.log('no')}}])

}
const addNewTodo = (todo) => {
  if(todo.length >= 3){
    setTodo((prevTodo) => {
      return [
        {text : todo, key: Math.random().toString()},
        ...prevTodo
      ]
    })
    
  }else{
    Alert.alert('BE SERIOUS MAN!', "A real todo name can't be less than three letters", [{text: 'UNDERSTOOD', onPress:()=>console.log('exit')}]) 
  }

}
  return (
    <TouchableNativeFeedback onPress={()=>{
      Keyboard.dismiss()
      }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          {/* Form */}
          <AddTodo addNewTodo = {addNewTodo}/>
          <ScrollView>
            <View style={styles.list}>
              <FlatList
              data = {todos}
              renderItem = {({item}) => (
                <TodoItem item={item} pressHandler={pressHandler}/>
              )}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor : '#fff'
  },
  list : {
    flex: 1,
    marginTop : 20,
  },
  content : {
    flex: 1,
    padding : 40
  },
  text2 : {
    fontWeight : '200',
    fontSize : 18
  }
});