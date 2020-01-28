import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';

export default function Header() {
    return (
        <View style={styles.Header}>
            <Text style={styles.title}>Todo List</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Header : {
        paddingTop : 38,
        backgroundColor: 'coral',
        height : 80
    },
    title : {
        fontWeight: 'bold',
        fontSize : 30,
        textAlign : 'center',
        color : '#fff'
    }
})