import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Game extends Component{
    constructor (props) {
        super(props);

    }
    render (){
        return (
            <View style={styles.container}>
            <Text>This is my game component!</Text>
        </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#AAA',
        justifyContent: 'center'

    }
});

