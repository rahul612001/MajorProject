import React, { Component } from 'react'
import { Text, View ,StyleSheet} from 'react-native'
import Firstani from '../../../components/ScienAnimation'
import { FontAwesome } from '@expo/vector-icons';
import LottieView from 'lottie-react-native'
import ScienAnimation from '../../../components/ScienAnimation';
import { useTranslation } from 'react-i18next';
export default function ScienceCategory (){
  const { t } = useTranslation(); 
    return (
      <View>
        <View style={styles.container}>
         <View style={{alignItems:"center",justifyContent:"center",margin:10}}>
         <LottieView
             source={require('../../../assets/animations/Hestroy.json')}
             autoPlay
            loop
            style={{ width: 80, height:80,}}/>
          </View>
          <Text style={{marginLeft:10,fontSize:18,fontWeight:"700",fontFamily:"outfit-bold",color:"#EF3D57"}}>{t('History')}</Text>
          <Text style={{marginLeft:10,fontSize:16,fontWeight:"500",fontFamily:"outfit-medium",color:"#EF3D57"}}> 10 Questions </Text>
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
     backgroundColor:"#F9E3E2",
     borderRadius:30,
     width:170,
    elevation: 20,
    shadowColor: 'black',
    borderColor:"white",
    borderWidth:1.5
  },
  button:{
     backgroundColor:"#EF3D57",
     padding:10,
     paddingHorizontal:20,
     borderTopLeftRadius:30,
     borderBottomRightRadius:30
  }
})