import React, { Component } from 'react'
import { Text, View ,StyleSheet} from 'react-native'
import Firstani from '../../../components/ScienAnimation'
import { FontAwesome } from '@expo/vector-icons';
import LottieView from 'lottie-react-native'
import ScienAnimation from '../../../components/ScienAnimation';
export default function ScienceCategory (){
    return (
      <View>
        <View style={styles.container}>
         <View style={{alignItems:"center",justifyContent:"center",}}>
            <View>
            <LottieView
             source={require('../../../assets/animations/Knowledge.json')}
             autoPlay
            loop
            style={{ width: 100, height:100,}}/>
            </View>
          </View>
          <Text style={{marginLeft:10,fontSize:18,fontWeight:"700",fontFamily:"outfit-bold",color:"#38ABAE"}}>GeneralKnowledge</Text>
          <Text style={{marginLeft:10,fontSize:16,fontWeight:"500",fontFamily:"outfit-medium",color:"#38ABAE"}}> 10 Questions </Text>
          <View style={{alignItems:"flex-end",justifyContent:"flex-end"}}>
             <View style={styles.button} >
                  <FontAwesome name="long-arrow-right" size={22} color="white" />
             </View>
          </View>
        </View>    
      </View>
    )
  }

const styles=StyleSheet.create({
  container:{
     backgroundColor:"#DCF1F2",
     borderRadius:30,
     width:170,
    elevation: 20,
    shadowColor: 'black',
    borderColor:"white",
    borderWidth:1.5
  },
  button:{
     backgroundColor:"#38B7BD",
     padding:10,
     paddingHorizontal:20,
     borderTopLeftRadius:30,
     borderBottomRightRadius:30
  }
})