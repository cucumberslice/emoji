import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
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
        this.handleChange = this.handleChange.bind(this);
        this.checkGuess =  this.checkGuess.bind(this);
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

    handleChange(guess) {
        this.setState({
            guess
        })
    }
    
    checkGuess() {
        console.log(this.state.guess);
        this.setState({
            guess: ''
        })
    }
    
    render (){
        return (
            <View style={styles.container}>
           {/* {this.state.emojis.map((emoji, index) => (<Text key={index}>{emoji.question}</Text>))} */}
           <Text>SCORE:{`${this.state.score}`}</Text>
           <Text>{
               this.state.emojis.length && this.state.emojis[this.state.randomQuestion].question
           }
           </Text>
           <TextInput 
            onChangeText={(guess) => this.handleChange(guess)}
            value={this.state.guess}
            placeholder="Guess the Phrase!"
            />
            <Button onPress={this.checkGuess}
            title="Make a Guess!" 
            />
            <Button onPress={this.restartGame}
            title="Restart Game"
            />

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

