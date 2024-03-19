import React, { Component } from 'react'
import { Text, View ,StyleSheet} from 'react-native'
import Firstani from '../../../components/ScienAnimation'
import { FontAwesome } from '@expo/vector-icons';
import LottieView from 'lottie-react-native'
import MathsAnimation from '../../../components/MathsAnimation';

export default function MathsCategory (){
    return (
      <View>
        <View style={styles.container}>
         <View style={{alignItems:"center",justifyContent:"center",margin:10}}>
           <MathsAnimation/>
          </View>
          <Text style={{marginLeft:10,fontSize:20,fontWeight:"700",fontFamily:"outfit-bold",color:"#C5851C"}}>Mathantics </Text>
          <Text style={{marginLeft:10,fontSize:16,fontWeight:"500",fontFamily:"outfit-medium",color:"#C5851C"}}> 10 Questions </Text>
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
     backgroundColor:"#FAEFDC",
     borderRadius:30,
     width:170,
    elevation: 20,
    shadowColor: 'black',
    borderColor:"white",
    borderWidth:1.5
  },
  button:{
     backgroundColor:"#F8BB57",
     padding:10,
     paddingHorizontal:20,
     borderTopLeftRadius:30,
     borderBottomRightRadius:30
  }
})