import React,{useState} from 'react'
import { StyleSheet, View, TextInput, Button} from 'react-native';

export default function AddTodo({addNewTodo}) {
    const [text, setText] = useState('')

    const onchangeHandler = (val) => {
        setText(val)
    }
    const clickHandler =  () => {
        addNewTodo(text)
    }
    return (
        <View>
            <TextInput 
            placeHolder= 'new todo...'
            onChangeText={onchangeHandler}
            style={styles.textBar}
            />
            <Button
             onPress={clickHandler}
             title='Add Todo'
             color = 'coral'
             />
        </View>
    )
}

const styles = StyleSheet.create({
    textBar : {
        marginBottom : 10,
        paddingVertical : 8,
        paddingHorizontal : 6,
        borderBottomWidth : 1,
        borderBottomColor : '#ddd'
    }
})