import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';

const Home = ({navigation}) => (
    <View style={styles.container}>
        <Text>Home Screen!</Text>
        <Button
  onPress={() => navigation.navigate('Game')}
  title="Start Game"
/>

    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignments: 'center',
        justifyContent: 'center'
    }
});

export default Home;