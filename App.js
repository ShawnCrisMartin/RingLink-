import React from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Swiper from 'react-native-deck-swiper';

// Create a Stack Navigator
const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>TinderBoxing</Text>
      <Button 
        title="Start Sparring" 
        onPress={() => navigation.navigate('Sparring')} 
      />
    </SafeAreaView>
  );
};

const SparringScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Swiper
        cards={['Fighter 1', 'Fighter 2', 'Fighter 3']} // Example list of boxers
        renderCard={(card) => (
          <View style={styles.card}>
            <Text style={styles.cardText}>{card}</Text>
          </View>
        )}
        onSwiped={(index) => console.log('Swiped', index)}
        onSwipedAll={() => console.log('All cards swiped')}
        cardIndex={0}
        backgroundColor={'#f7f7f7'}
        stackSize={3}
      />
    </SafeAreaView>
  );
};

// App's main screen navigation
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Sparring" component={SparringScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    flex: 0.75,
    borderRadius: 10,
    padding: 20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 10 },
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
