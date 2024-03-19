import LottieView from 'lottie-react-native'
import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default function MathsAnimation(){
  
    return (
      <View>
        
        <LottieView
        source={require('../assets/animations/mathsAnimation.json')}
        autoPlay
        loop
        style={{ width: 80, height:80,}}/>
      </View>
    )
  }

