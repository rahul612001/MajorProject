import LottieView from 'lottie-react-native'
import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default function MathsAnimation(){
  
    return (
      <View style={{justifyContent:"center",alignItems:"center",}}>
        <LottieView
        source={require('../assets/animations/LoadingAnimation.json')}
        autoPlay
        loop
        style={{ width: 170, height:170,}}
        
        />
        
      </View>
    )
  }

