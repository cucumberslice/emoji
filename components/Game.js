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
            score: 0,
            guess: '',
            gameMessage: 'Feel the emoji, Translate the emoji!',
            isActive: true
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
            score:0,
            guess: '',
            gameMessage: 'Feel the emoji, Translate the emoji!',
            isActive: true
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
        let { guess, score, gameMessage, emojis, randomQuestion } = Object.assign({}, this.state);
        let transformedGuess = guess.replace(/\W/g,'').toLowerCase();
        let transformedAnswer = emojis[randomQuestion].answer.replace(/\W/g,'').toLowerCase();

        if(transformedGuess === transformedAnswer) {
            score+=10;
            gameMessage="Nice job!";
            emojis = emojis.filter((emoji, index) => index !==randomQuestion);
            randomQuestion = this.pickRandomQuestion(emojis);
        } else {
            gameMessage="Try Again!"
        }

        if(!emojis.length) {
            gameMessage="You win!";
            isActive= false;
        }
        // console.log(this.state.guess);
        this.setState({
            guess: '',
            score,
            gameMessage,
            randomQuestion,
            emojis,
            isActive
        })
    }
    
    render (){
        return (
            <View style={styles.container}>
            <Text>{this.state.gameMessage}</Text>
            <Text style={{color: "#000000"}}>SCORE:
                <Text style={{color: "#33FF55", fontWeight: "bold"}}> 
                    {`${this.state.score}`}
                </Text>
           
            </Text>

                {
                    this.state.isActive && (
                        <view>
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
                        </view>
                        )
                    }
                        
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

