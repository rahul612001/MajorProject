import React, { Component } from 'react'
import { ImageBackground, Text, View, StyleSheet, Touchable, TouchableOpacity } from 'react-native'
import Colors from '../../Utils/Colors'
import Header from './Header'
import Slider from './Slider'
import LottieView from "lottie-react-native";
import GameCategory from '../Science/ScienceCategory'
import Title from '../../../components/Title'
import ScienceCategory from '../Science/ScienceCategory'
import MathsCategory from '../Maths/MathsCategory'
import GirlsRights from '../HumanRights/GirlsRights'
import BoyRights from '../HumanRights/BoyRights'
import { ScrollView } from 'react-native-gesture-handler'


export default function HomeScreen({ navigation }) {

  return (
    <View style={{marginTop:12}} >
      <ImageBackground source={require("../../../assets/images/rakk.jpg")} style={{ width: "100%", height: "100%", }}>
        <Header />
        <View  style={{marginTop:-25}}>
          <Slider />
          </View>

           
          <ScrollView>
           <Text style={{marginHorizontal:10,fontSize: 24, fontWeight: "600", fontFamily: "outfit-bold",marginBottom:4,color:"#0B5FA5"}}>Child's Right Quiz</Text>
          <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center",gap:16}}>
             
             <TouchableOpacity onPress={()=>navigation.navigate("QuizCategory")}>
                 <GirlsRights/>
             </TouchableOpacity>

             <TouchableOpacity onPress={()=>navigation.navigate("BoyRightHome")}>
                  <BoyRights/>
             </TouchableOpacity>
           </View>
          


        <View style={{ marginHorizontal: 10 }}>
          <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
            <Text style={{ fontSize: 24, fontWeight: "600", fontFamily: "outfit-bold", marginTop: 10, }}>Top Quiz Categories</Text>
            <View style={styles.viewall}>
              <Text style={{
                fontSize: 14, 
                fontWeight: "600",
                color: "#5ADEF6"
              }}>View All</Text>
            </View>
           </View>


         <View style={{marginTop:-20}}>
          <View style={{flexDirection:"row",gap:14,alignItems:"center",justifyContent:"center"}}>
           <TouchableOpacity onPress={()=>navigation.navigate("Homeee")}>
             <ScienceCategory/>
           </TouchableOpacity>

           <TouchableOpacity >
              <MathsCategory/>
           </TouchableOpacity>

           </View>
           </View>
        </View>
        </ScrollView>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    padding: 15,
    backgroundColor: "red",
    borderRadius: 99,
    marginTop: 100,
  },
  viewall: {
    backgroundColor: "#D5F0F6",
    padding: 8,
    paddingHorizontal: 10,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 30,
    marginTop:10,
    
  }
})