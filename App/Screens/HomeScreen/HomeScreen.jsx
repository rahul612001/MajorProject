import React, { Component, useState } from 'react'
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
import TicTac from '../Games/TicTac'
import Hang from "../Hangman/Hang";
import GeneralKnowledge from "../Science/GeneralKnowledge";
import Nature from "../Science/Nature";
import Computer from "../Science/Computer";
import Sports from "../Science/Sports";
import Geography from "../Science/Geography";
import History from "../Science/History";
import Animals from "../Science/Animals";
import VideoGame from "../Science/VideoGame";
import { useTranslation } from 'react-i18next';

export default function HomeScreen({ navigation }) {

  const { t } = useTranslation(); 
  const [showAll, setShowAll] = useState(false);

  const handleViewAll = () => {
    setShowAll(true);
  };

  const handleViewLess = () => {
    setShowAll(false);
  };


  return (
    <View style={{marginTop:3}} >
      <ImageBackground source={require("../../../assets/images/rakk.jpg")} style={{ width: "100%", height: "100%", }}>
        <Header />
        <View  style={{marginTop:-25}}>
          <Slider />
          </View>

           
          <ScrollView showsVerticalScrollIndicator={false} >
           <Text style={{marginHorizontal:10,fontSize: 24, fontWeight: "600", fontFamily: "outfit-bold",marginBottom:4,color:"#0B5FA5"}}>{t('Childs Rights Quiz')}</Text>
          <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center",gap:16}}>
             
             <TouchableOpacity onPress={()=>navigation.navigate("QuizCategory")}>
                 <GirlsRights/>
             </TouchableOpacity>

             <TouchableOpacity onPress={()=>navigation.navigate("QuizCategoryBoy")}>
                  <BoyRights/>
             </TouchableOpacity>
           </View>
          
      
        <View>
        <Text style={{ fontSize: 24, fontWeight: "600", fontFamily: "outfit-bold", marginTop: 10,marginLeft:10,color:"#0B5FA5" }}>{t('Games')}</Text>
        <TouchableOpacity onPress={()=>navigation.navigate("TicTacToeScreen")} >
         <TicTac/>
         </TouchableOpacity>

         <TouchableOpacity onPress={()=>navigation.navigate("HangmanGame")} style={{marginTop:10}} >
           <Hang/>
         </TouchableOpacity>
         </View>


        <View style={{ marginHorizontal: 10 }}>
          <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
            <Text style={{ fontSize: 24, fontWeight: "600", fontFamily: "outfit-bold", marginTop: 10, }}>{t('Top Quiz Categories')}</Text>
            {showAll ? (
            <TouchableOpacity onPress={handleViewLess}>
            <View style={styles.viewButton}>
              <Text style={{ fontSize: 14, fontWeight: "600", color: "#5ADEF6" }}>
                View Less
              </Text>
            </View>
          </TouchableOpacity>
           ) : (
            <TouchableOpacity onPress={handleViewAll}>
            <View style={styles.viewall}>
              <Text style={{
                fontSize: 14, 
                fontWeight: "600",
                color: "#5ADEF6"
              }}>View All</Text>
            </View>
            </TouchableOpacity>
             )}
           </View>


         <View style={{marginTop:-20}}>
          <View style={{flexDirection:"row",gap:14,alignItems:"center",justifyContent:"center"}}>
           <TouchableOpacity onPress={()=>navigation.navigate("Homeee")}>
             <ScienceCategory/>
           </TouchableOpacity>

           <TouchableOpacity onPress={()=>navigation.navigate("MathsHome")}>
              <MathsCategory/>
           </TouchableOpacity>
           </View>
           </View>

           {showAll && (
          <>
           <View style={{flexDirection:"row",gap:14,alignItems:"center",justifyContent:"center",marginTop:10}}>
           <TouchableOpacity onPress={()=>navigation.navigate("GkHome")}>
             <GeneralKnowledge/>
           </TouchableOpacity>

           <TouchableOpacity onPress={()=>navigation.navigate("GeoHome")}>
             <Geography/>
           </TouchableOpacity>
           </View>

          <View style={{flexDirection:"row",gap:14,alignItems:"center",justifyContent:"center",marginTop:10}}> 
             <TouchableOpacity onPress={()=>navigation.navigate("ComputerHome")}>
                <Computer/>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=>navigation.navigate("SportsHome")}>
                <Sports/>
              </TouchableOpacity>
          </View>


          
          <View style={{flexDirection:"row",gap:14,alignItems:"center",justifyContent:"center",marginTop:10}}> 
             <TouchableOpacity onPress={()=>navigation.navigate("NatureHome")}>
                <Nature/>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=>navigation.navigate("HistoryHome")}>
                <History/>
              </TouchableOpacity>
          </View>


          <View style={{flexDirection:"row",gap:14,alignItems:"center",justifyContent:"center",marginTop:10,marginBottom:10}}> 
             <TouchableOpacity  onPress={()=>navigation.navigate("AnimalHome")}>
                <Animals/>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=>navigation.navigate("VideogameHome")}>
              <VideoGame/>
              </TouchableOpacity>
          </View>

          </>
          )}
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
    
  },
  viewButton: {
    backgroundColor: "#D5F0F6",
    padding: 8,
    paddingHorizontal: 10,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 30,
    marginTop:10,
  },
  
})