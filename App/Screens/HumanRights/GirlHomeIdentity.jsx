import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import LottieView from 'lottie-react-native'
export default function GirlRightScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'space-between', marginTop: 30,}}>
      <ImageBackground source={require("../../../assets/images/human2234.png")} style={{ width: "100%", height: 260, marginTop: 5 }}>
        <TouchableOpacity style={styles.Backbutton} onPress={()=>navigation.navigate("QuizCategory")}>
          <AntDesign name="left" size={20} color="#343A40" />
        </TouchableOpacity>
      </ImageBackground>

      <View style={styles.container}>
        <Text style={styles.title}>Girl Rights to identity </Text>
        <TouchableOpacity
          style={styles.startButton}
          onPress={() => navigation.navigate('GirlQuestionsIdentity', { questionIndex: 0 })}
        >
          <Text style={styles.startButtonText}>Start Quiz</Text>
        </TouchableOpacity>
      </View>

      <LottieView
            source={require("../../../assets/animations/LoudSpekers.json")}
            style={{ width: 100, height: 100, justifyContent: "center", alignItems: "center",marginLeft:25 }}
            resizeMode="contain"
            loop
            autoPlay={true}
          />  

      <View style={{ alignItems: 'center', }}>
        <Image
          source={require("../../../assets/images/hand.png")}
          style={{ width: "100%", height: 200 }}
        />
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginBottom:-70
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    
  },
  startButton: {
    backgroundColor: '#06718D',
    padding: 16,
    justifyContent:"center",
    alignItems:"center",
    width:170,
    borderRadius:20,
    borderWidth:2,
    borderRightWidth:6,
    borderLeftColor:"red",
    borderRightColor:"#FFA615",
    borderTopColor:"#FFA615",
    borderBottomColor:"#FFA615",
    borderLeftWidth:6,
    borderLeftColor:"#FFA615",
  },
  startButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight:"600"
  },
  Backbutton: {
    backgroundColor: "white",
    width: 50,
    height: 50,
    padding: 10,
    borderRadius: 99,
    marginLeft: 10,
    alignItems: "center",
    justifyContent: "center",

  },
});
