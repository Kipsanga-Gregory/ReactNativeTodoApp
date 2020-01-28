import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'


export default function TodoItem({item, pressHandler}) {

    return (
            <View  style={styles.item}>
                <MaterialIcons name='delete' color='coral' size={25} onPress = {()=>pressHandler(item.key)} />
                <Text style={styles.ItemText}>{item.text}</Text>
            </View>
    )
}

const styles = StyleSheet.create({
    item : {
        padding : 16,
        marginTop : 16,
        borderColor : '#bbb',
        borderWidth: 1,
        borderStyle : 'dashed',
        borderRadius : 15,
        textAlign : 'center',
        flexDirection : 'row'
    },
    ItemText : {
        marginLeft : 10
    }
})