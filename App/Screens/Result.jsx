import React, { Component, } from 'react'
import { Text, View, Image, StyleSheet, Touchable, } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Title from '../../components/Title'
import LottieView from 'lottie-react-native'
import { FontAwesome } from '@expo/vector-icons';

const Result = ({ navigation, route }) => {
  const params = route.params
  const { score } = route.params

  const resultBanner = score > 0 ? require('../../assets/animations/win.json') : require('../../assets/animations/win.json');
  return (
    <View style={{ backgroundColor: "#1D2544",height:"100%" }}>
      <View>
      <View style={{ marginBottom: -150, }}>
        <LottieView
          source={resultBanner}
          style={{ width: "100%", height: 200, justifyContent: "center", alignItems: "center", }}
          resizeMode="contain"
          loop
          autoPlay={true}
        />
      </View>
      <Text style={{ fontSize: 30, fontFamily: "outfit-bold", justifyContent: "center", alignItems: "center", alignSelf: "center", color: "white" }}>Quiz Result</Text>

      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <LottieView
          source={require("../../assets/animations/trophy.json")}
          style={{ width: 250, height: 250, justifyContent: "center", alignItems: "center", }}
          resizeMode="contain"
          loop
          autoPlay={true}
        />

      </View>

      <View style={styles.container}>
        <Text style={{ textAlign: "center", fontSize: 30, fontFamily: "outfit-bold", color: "white", }}>Congratulations!</Text>
        <Text style={{ textAlign: "center", fontSize: 15, fontFamily: "outfit-medium", color: "#DDDDDD", marginTop: 20 }}>YOUR SCORE</Text>

        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: 8 }}>
          <Text style={styles.scoreValue}>{score}</Text>
          <Text style={{ fontSize: 30, fontWeight: "700", color: "white" }}>/100</Text>
        </View>

        <View style={{ justifyContent: "center", alignItems: "center", marginTop: 18, }}>
          <Text style={{ color: "white", fontSize: 14, }}>EARNED CONINS</Text>

          <View style={{ flexDirection: "row", marginTop: 4 }}>
            <LottieView
              source={require("../../assets/animations/goldpoint.json")}
              style={{ width: 80, height: 80, justifyContent: "center", alignItems: "center", }}
              resizeMode="contain"
              loop
              autoPlay={true}
            />
            <Text style={{ color: "white", fontFamily: "outfit-bold", fontSize: 30, marginTop: 16 }}>{score * 10}</Text>
          </View>
        </View>
     


     
        <View>
          <LottieView
            source={resultBanner}
            style={{ width: "100%", height: 200, justifyContent: "center", alignItems: "center", marginTop: -100 }}
            resizeMode="contain"
            loop
            autoPlay={true}
          />
        </View>

      </View>
      </View>
      <View style={{flexDirection:"row",justifyContent:"center"}}>
        <View style={{marginRight:30}}>
          <TouchableOpacity style={{backgroundColor:"white",padding:15,marginTop:-80,borderRadius:16,flexDirection:"row",justifyContent:"center",alignItems:"center",}}>
               <FontAwesome name="share-alt" size={22} color="#1C2342" />
                <Text style={{fontSize:18,textAlign:"center",color:"#1C2342",fontWeight:"600",marginLeft:10}}>Share Result</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={{backgroundColor:"#06D3F6",padding:15,marginTop:-80,borderRadius:16,marginLeft:10}} onPress={()=>navigation.navigate("Homeee")}>
                <Text style={{fontSize:18,textAlign:"center",color:"white",fontWeight:"600"}}>Take New Quiz</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}



export default Result



const styles = StyleSheet.create({
  banner: {
    height: 300,
    width: 400
  },
  bannerContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  container: {
    paddingHorizontal: 20,
    

  },
  button: {
    width: '100%',
    backgroundColor: '#1A759F',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
  },
  scoreValue: {
    color: "#0FCF9F",
    fontSize: 30,
    alignSelf: 'center',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.5)', // Shadow color
    textShadowOffset: { width: 2, height: 2 }, // Shadow offset
    textShadowRadius: 4, // Shadow blur radius
  }
})