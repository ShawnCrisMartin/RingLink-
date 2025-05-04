import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import Swiper from 'react-native-deck-swiper';

const profiles = [
  {
    id: 1,
    name: 'Jake "The Snake"',
    age: 24,
    gym: 'Downtown Boxing Club',
    image: 'https://i.imgur.com/uUqkdZm.jpg',
  },
  {
    id: 2,
    name: 'Ali Lightning',
    age: 29,
    gym: 'Elite Boxing Academy',
    image: 'https://i.imgur.com/O2vSAD1.jpg',
  },
];

const ProfileSwiper = () => {
  return (
    <View style={styles.container}>
      <Swiper
        cards={profiles}
        renderCard={(card) => {
          return (
            <View style={styles.card}>
              <Image source={{ uri: card.image }} style={styles.image} />
              <Text style={styles.name}>{card.name}</Text>
              <Text style={styles.details}>{card.age} • {card.gym}</Text>
            </View>
          );
        }}
        onSwipedRight={() => console.log('Challenge sent!')}
        onSwipedLeft={() => console.log('Skipped')}
        cardIndex={0}
        backgroundColor={'#f0f0f0'}
        stackSize={3}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  card: {
    flex: 0.75,
    borderRadius: 20,
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: Dimensions.get('window').width - 80,
    height: 400,
    borderRadius: 20,
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10,
  },
  details: {
    fontSize: 18,
    color: '#888',
  },
});

export default ProfileSwiper;
