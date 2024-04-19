import React, { Component } from 'react'
import { Text, Touchable, View, StyleSheet, Image, ImageBackground ,Modal} from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { useUser } from '@clerk/clerk-expo'


import i18next from "i18next";
import {  useTranslation} from "react-i18next";


export default function QuizCategory({navigation}) {
  const { user } = useUser();
  return (
    <View >
      <ScrollView>
      <View style={{ marginTop: 24, flexDirection: "row", alignItems: "center", justifyContent: "flex-start", marginHorizontal: 20 }}>
        <TouchableOpacity style={styles.Backbutton} onPress={()=>navigation.navigate("Home")}>
          <AntDesign name="left" size={20} color="#343A40" />
        </TouchableOpacity>
        <Text style={{ fontFamily: "outfit-bold", fontSize: 20, textAlign: "center", marginLeft: 40, color: "#343A40" }}>Choose Quiz Category</Text>
      </View>

      <View style={{ marginHorizontal: 30, marginTop: 5, alignItems: "center", justifyContent: "center" }}>
        <ImageBackground source={require("../../../assets/images/childcat.png")} style={{ width: 150, height: 150, alignItems: "center", justifyContent: "center" }}>
          <Text style={{ marginLeft: 20, fontFamily: "outfit-medium", color: "white", fontSize: 14, marginTop: 10 }}>Child Rights</Text>
        </ImageBackground>
      </View>

     
      <View style={{ backgroundColor: "#EFEEFC",marginLeft:12,marginRight:12,borderRadius: 20,marginTop:16}}>
       

       <View style={{justifyContent:"center",alignItems:"center",marginTop:-30,}}>
       <Image source={{ uri: user.imageUrl }}
            style={{ width: 90, height: 90, borderRadius: 99,backgroundColor:"#EFEEFC",borderWidth:5,borderColor:"white"}}
          />
       </View>  



      <TouchableOpacity style={{ backgroundColor: "#EFEEFC", padding: 10, marginHorizontal: 1, borderRadius: 20 ,marginTop:10}} onPress={()=>navigation.navigate("BoyRightHome")}>
        <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "white", padding: 16, marginHorizontal: 14, borderRadius: 20 }}>
          <View style={{ borderColor: "#EFEEFC", borderWidth: 2, width: 25, height: 25, borderRadius: 100, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
            <Text style={{ fontSize: 14, fontWeight: 'bold' ,color:"#282828"}}>1</Text>
          </View>

          <View style={{ flexDirection: "row", gap: 20,justifyContent:"center",alignItems:"center" }}>
            <Image source={require("../../../assets/images/education.png")} style={{ justifyContent: "center", width: 50, height: 50, borderRadius: 100, marginLeft: 20 }} />
            <View>
              <Text style={{fontFamily:"outfit-medium",fontSize:14}}>Right to education</Text>
              <Text style={{fontSize:14,fontFamily:"outfit-medium",color:"#908F9D"}}>100 points</Text>
            </View>
          </View>

          <View style={{ marginLeft: 'auto', marginRight: 14 }}>
            <AntDesign name="doubleright" size={24} color="#8984C0" />
          </View>
        </View>
      </TouchableOpacity>
  
     
      <TouchableOpacity style={{ backgroundColor: "#EFEEFC", padding: 10, marginHorizontal: 1, borderRadius: 20 }} onPress={()=>navigation.navigate("BoyHomeHealth")} >
        <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "white", padding: 16,marginHorizontal: 14, borderRadius: 20 }}>
          <View style={{ borderColor: "#EFEEFC", borderWidth: 2, width: 25, height: 25, borderRadius: 100, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
            <Text style={{ fontSize: 14, fontWeight: 'bold' ,color:"#282828"}}>2</Text>
          </View>

          <View style={{ flexDirection: "row", gap: 20,justifyContent:"center",alignItems:"center" }}>
            <Image source={require("../../../assets/images/health.png")} style={{ justifyContent: "center",  width: 50, height: 50,  borderRadius: 100, marginLeft: 20 }} />
            <View>
              <Text style={{fontFamily:"outfit-medium",fontSize:14}}>Right to health</Text>
              <Text style={{fontSize:14,fontFamily:"outfit-medium",color:"#908F9D"}}>100 points</Text>
            </View>
          </View>

          <View style={{ marginLeft: 'auto', marginRight: 14 }}>
            <AntDesign name="doubleright" size={24} color="#8984C0" />
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={{ backgroundColor: "#EFEEFC", padding: 10, marginHorizontal: 1, borderRadius: 20 }} onPress={()=>navigation.navigate("BoyHomeLife")}>
        <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "white", padding: 16, marginHorizontal: 14, borderRadius: 20 }}>
          <View style={{ borderColor: "#EFEEFC", borderWidth: 2, width: 25, height: 25, borderRadius: 100, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
            <Text style={{ fontSize: 14, fontWeight: 'bold' ,color:"#282828"}}>3</Text>
          </View>
 
          <View style={{ flexDirection: "row", gap: 20,justifyContent:"center",alignItems:"center" }}>
            <Image source={require("../../../assets/images/life.png")} style={{ justifyContent: "center",  width: 50, height: 50, borderRadius: 100, marginLeft: 20 }} />
            <View>
              <Text style={{fontFamily:"outfit-medium",fontSize:14}}>Right to life</Text>
              <Text style={{fontSize:14,fontFamily:"outfit-medium",color:"#908F9D"}}>100 points</Text>
            </View>
          </View>

          <View style={{ marginLeft: 'auto', marginRight: 14}}>
            <AntDesign name="doubleright" size={24} color="#8984C0" />
          </View>
        </View>
      </TouchableOpacity>


      <TouchableOpacity style={{ backgroundColor: "#EFEEFC", padding: 10, marginHorizontal: 1, borderRadius: 20 }}  >
        <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "white", padding: 16, marginHorizontal: 14, borderRadius: 20 }}>
          <View style={{ borderColor: "#EFEEFC", borderWidth: 2, width: 25, height: 25, borderRadius: 100, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
            <Text style={{ fontSize: 14, fontWeight: 'bold' ,color:"#282828"}}>4</Text>
          </View>
 
          <View style={{ flexDirection: "row", gap: 20,justifyContent:"center",alignItems:"center" }}>
            <Image source={require("../../../assets/images/identity.png")} style={{ justifyContent: "center",  width: 50, height: 50, borderRadius: 100, marginLeft: 20 }} />
            <View>
              <Text style={{fontFamily:"outfit-medium",fontSize:14}}>Identity</Text>
              <Text style={{fontSize:14,fontFamily:"outfit-medium",color:"#908F9D"}}>100 points</Text>
            </View>
          </View>

          <View style={{ marginLeft: 'auto', marginRight: 14}}>
            <AntDesign name="doubleright" size={24} color="#8984C0" />
          </View>
        </View>
      </TouchableOpacity>



      <TouchableOpacity style={{ backgroundColor: "#EFEEFC", padding: 10, mmarginHorizontal: 1, borderRadius: 20,marginBottom:10 }}>
        <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "white", padding: 16, marginHorizontal: 14, borderRadius: 20 }}>
          <View style={{ borderColor: "#EFEEFC", borderWidth: 2, width: 25, height: 25, borderRadius: 100, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
            <Text style={{ fontSize: 14, fontWeight: 'bold',color:"#282828" }}>5</Text>
          </View>

          <View style={{ flexDirection: "row", gap: 20,justifyContent:"center",alignItems:"center" }}>
            <Image source={require("../../../assets/images/protection.png")} style={{ justifyContent: "center",  width: 50, height: 50,  borderRadius: 100, marginLeft: 20 }} />
            <View>
              <Text style={{fontFamily:"outfit-medium",fontSize:14}}>Right to protection</Text>
              <Text style={{fontSize:14,fontFamily:"outfit-medium",color:"#908F9D"}}>100 points</Text>
            </View>
          </View>

          <View style={{ marginLeft: 'auto',marginRight: 14 }}>
            <AntDesign name="doubleright" size={24} color="#8984C0" />
          </View>
        </View>
      </TouchableOpacity>
     
      </View>
   
      </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
  Backbutton: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 99
  },
  category: {

  }
})