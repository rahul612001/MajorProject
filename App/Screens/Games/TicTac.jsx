import React, { Component } from 'react';
import { Text, View ,Image, ImageBackground,StyleSheet} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import LottieView from 'lottie-react-native'
export default function TicTac () {

    return (
      <View>
       <View style={{backgroundColor:"#FAE2E2",marginHorizontal:20,padding:10,borderColor:"white",borderWidth:2, elevation: 20,
         shadowColor: 'black',
         borderColor: "white",borderRadius: 16,}}>
         <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
           
            <LottieView
              source={require('../../../assets/animations/animationTic.json')}
              autoPlay
              loop
             style={{ width: 40, height:40,}}/>


            <ImageBackground source={require("../../../assets/images/Ticback2.png")} style={{width:260,height:40,flexDirection:"row"}}>
               <Text style={{fontSize:20,fontFamily:"outfit-bold",color:"#D63F57",marginLeft:10,marginTop:7}}>Tic Tac Toe Game</Text>
               <View style={styles.button} >
                        <FontAwesome name="long-arrow-right" size={20} color="#D63F57" />
                    </View>
            </ImageBackground>
         
         </View>
         
       </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
        backgroundColor: "#D9E8F7",
        borderRadius: 30,
        width: 170,
        elevation: 20,
        shadowColor: 'black',
        borderColor: "white",
        borderWidth: 1.5,
        marginTop: 30,
       
    },
    button: {
        backgroundColor: "white",
        padding: 5,
        paddingHorizontal: 20,
        borderRadius:40,
        paddingHorizontal:20,
        marginTop:10,
        justifyContent:"center",
        alignItems:"center",
        marginLeft:35,
        borderWidth:1.4,
        borderColor:"#D63F57"
    }
})

