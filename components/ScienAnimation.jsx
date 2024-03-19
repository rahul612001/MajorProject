import LottieView from 'lottie-react-native'
import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default function ScienAnimation(){
  
    return (
      <View>
        
        <LottieView
        source={require('../assets/animations/Science.json')}
        autoPlay
        loop
        style={{ width: 80, height:80,}}/>
      </View>
    )
  }

