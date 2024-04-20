import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

// Import your Lottie animation files statically
import AppleAnimation from '../../../assets/animations/apple.json';
import BananaAnimation from '../../../assets/animations/Banana.json';
import BlueberryAnimation from '../../../assets/animations/Blueberry.json';
import AvocadoAnimation from '../../../assets/animations/Avocado.json';
import MangoAnimation from '../../../assets/animations/Mango.json';
import OrangeAnimation from '../../../assets/animations/Orange.json';
import persAnimation from '../../../assets/animations/pers.json';
import PineappleAnimation from '../../../assets/animations/Pineapple.json';
import StrawberryAnimation from '../../../assets/animations/Strawberry.json';
import WatermelonAnimation from '../../../assets/animations/Watermelon.json';
import applesAnimation from '../../../assets/animations/apples.json';
// Import more animation files as needed...

// Map each value to its corresponding animation file
const animationMap = {
  apple: AppleAnimation,
  Banana :BananaAnimation,
  Blueberry:BlueberryAnimation,
  Avocado: AvocadoAnimation,
  Mango :MangoAnimation,
  Orange:OrangeAnimation,
  pers: persAnimation,
  Pineapple :PineappleAnimation,
  Strawberry:StrawberryAnimation,
  Watermelon:WatermelonAnimation,
  apples:applesAnimation,
  // Add more mappings for other values...
};

const Card = ({ value, isFlipped, onPress }) => {
  // Get the animation file based on the value
  const animationFile = animationMap[value];

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.cardContainer}>
        {isFlipped ? (
          <LottieView
            source={animationFile}
            autoPlay
            loop={true}
            style={styles.animation}
          />
        ) : (
          <View style={styles.cardBack} />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 80,
    height: 120,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:-10,
    
  },
  animation: {
    width: 80,
    height: 80,
   
  },
  cardBack: {
    width: 80,
    height: 80,
    backgroundColor: 'lightgray',
    borderRadius:10,
    borderWidth:1.2,
    borderColor:"white"
    
  },
});

export default Card;
