import React, { Component } from 'react'
import { Text, Touchable, View, Image, StyleSheet, ImageBackground } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Title from '../../components/Title'
import LottieView from 'lottie-react-native'

const Home = ({ navigation }) => {

  return (

    <View style={styles.container}>
      
      <View >
        <View style={{ width: "100%" }}>
          <Image source={require("../../assets/images/image.png")}
            style={styles.banner}
          />
        </View>
        <View>
          <Text style={{ fontSize: 26, fontFamily: "outfit-bold", color: "#045688", textAlign: "center", backgroundColor: "white" }}>Sports Quiz</Text>
        </View>
      </View>

      <View style={{ alignItems: "center", }}>
        <Image source={require("../../assets/images/sports.png")}
          style={{ width: 390, height: 357, alignItems: "center", justifyContent: "center"}}
        />
      </View>

 
       
       <ImageBackground source={require("../../assets/images/image.png")}
         style={{width:"100%",height:190,transform: [{ rotate: '180deg' }]}}>
          <View>
          <TouchableOpacity onPress={() => navigation.navigate("SportQuiz")} style={styles.button}>
        <View style={{flexDirection:"row"}}>
          <LottieView
            source={require("../../assets/animations/Sports.json")}
            style={{ width: 65, height: 65, justifyContent: "center", alignItems: "center", }}
            resizeMode="contain"
            loop
            autoPlay={true}
          />
          <Text style={styles.buttonText}>Start Sports Quiz</Text>
        </View>
      </TouchableOpacity>
          </View>
       </ImageBackground>
        
    </View>
  )
}
export default Home

const styles = StyleSheet.create({
  banner: {
    height: 213,
    width: "100%"
  },
  bannerContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 0
  },
  container: {
    backgroundColor: "white",
  },
  button: {
    width: "80%",
    backgroundColor: "#1A759F",
    padding: 1,
    borderRadius: 16,
    alignItems: "center",
    marginTop:147,
    justifyContent:"center",
    marginLeft:35,
    transform: [{ rotate: '180deg' }],
    borderWidth:1,
    borderColor:"white"

  },
  buttonText: {
    fontSize: 20,
    fontWeight: "600",
    color: "white",
    marginLeft:10,
    alignItems:"center",
    marginTop:18
  }
})