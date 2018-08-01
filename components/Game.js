import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { emojis } from '../utils';
export default class Game extends Component{
    constructor (props) {
        super(props);
        this.state = {
            emojis: [],
            randomQuestion: 0,
            score: 0
        }
        this.restartGame = this.restartGame.bind(this);
        this.pickRandomQuestion = this.pickRandomQuestion.bind(this);
    }
    componentDidMount() {
        this.restartGame();
    }
    restartGame(){
        
        let emojisArr = emojis.slice();
        let randomQuestion = this.pickRandomQuestion(emojisArr);
        this.setState({
            emojis: emojisArr,
            randomQuestion,
            score:0
        })
    }
    
     pickRandomQuestion(arr) {
         return Math.floor(Math.random() * arr.length);
     }
    
    
    render (){
        return (
            <View style={styles.container}>
           {this.state.emojis.map((emoji, index) => (<Text key={index}>{emoji.question}</Text>))}
           <Text>SCORE:{`${this.state.score}`}</Text>
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

