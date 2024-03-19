import React from 'react';
import { ImageBackground, Text, View ,Image, Touchable, TouchableOpacity} from 'react-native';
import { useRoute } from '@react-navigation/native'; // Import useRoute hook

export default function ResultScreen({navigation}) {
  const route = useRoute(); // Use useRoute hook to access route object
  const { score } = route.params;

  return (
    <View >
      <ImageBackground source={require("../../../assets/images/image240.png")} style={{width:"100%",height:"100%",justifyContent:"center",alignItems:"center"}}>
        
        <View style={{backgroundColor:"#DFF3F2",padding:100,borderRadius:70,elevation:5,height:"50%"}}>
        <Image source={require("../../../assets/images/image241.png")} style={{width:150,height:150,justifyContent:"center",alignItems:"center",marginTop:-160,}}/>
          <View style={{justifyContent:"center",alignItems:"center"}}>
            <Text>Your score</Text>
          </View>
         <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
          <Text style={{marginTop:70,textAlign:"center", color: "#0FCF9F",fontSize: 30,}}>{score}</Text>
          <Text style={{marginTop:70,textAlign:"center",fontSize: 30, fontWeight: "700", color: "red" }}>/10</Text>
         </View>
        </View>

        

      <View style={{marginTop:50}}>
      <View style={{ justifyContent: "flex-end", }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 20, marginBottom: -20 ,gap:70}}>
            <TouchableOpacity style={{ padding: 20, backgroundColor: "#00BF91", margin: 10, borderRadius: 20, 
                paddingHorizontal: 30, elevation: 8 }} onPress={()=>navigation.navigate("ChildrightVideo1")}>
              <Text style={{ color: "white", fontFamily: "outfit-medium", fontSize: 16 }}>Attempt Next</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ padding: 20, backgroundColor: "#00BF91", margin: 10, borderRadius: 20, paddingHorizontal: 30, elevation: 5 }}>
              <Text style={{ color: "white", fontFamily: "outfit-medium", fontSize: 16 }}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View> 
      
      </ImageBackground>
     
    </View>
  );
}
