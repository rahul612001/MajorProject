import React, { Component, useEffect, useState } from 'react'
import { Text, View,StyleSheet, FlatList,Image, Touchable, TouchableOpacity } from 'react-native'
import GlobalApi from '../../Utils/GlobalApi'

export default function Slider({navigation}) {
  
  const [slider,setslider]=useState([])
  useEffect(()=>{
      getSlider()
  },[])

  const getSlider=()=>{
    GlobalApi.getSlider().then(resp=>{
      setslider(resp?.sliders)
    })
  }
    return (
      <View style={styles.container}>
        
        <FlatList
          style={{marginTop:20}}
          data={slider}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item,index})=>(
           
             <View style={{marginRight:15,marginStart:10}}>
              <TouchableOpacity>
                 <Image source={{uri:item?.image?.url}}
                 style={styles.sliderImage}
                 />
                </TouchableOpacity>
             </View>
            
          )}
        />
      </View>
    )
  }

const styles=StyleSheet.create({
  heading:{
    fontSize:20,
    fontFamily:"outfit-medium",
    marginBottom:0,
   
  },
  sliderImage:{
     width:330,
     height:200,
     borderRadius:20,
     objectFit:"cover"
  },
  container:{
    marginTop:-100
  }
})