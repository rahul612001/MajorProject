import React, { Component } from 'react'
import { Text, View ,Image,StyleSheet, Touchable, TouchableOpacity} from 'react-native'
import Colors from '../../Utils/Colors'
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser  } from "../../hooks/useWarmUpBrowser";
WebBrowser.maybeCompleteAuthSession();



export default function Login() {
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();
 
      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);
    return (
      <View style={{alignItems:"center",}}>
        <Image source={require("./../../../assets/images/image333.jpg")}
        style={styles.loginImage}
        />
          <View style={styles.subContainer}>
              <Text style={{fontSize:23,color:Colors.WHITE,textAlign:"center"}}>Quiz Mastery 
              <Text style={{fontWeight:"bold"}}> Learning Discovery</Text> Elevate Your Mind with Every Tap!</Text>
              <Text style={{fontSize:18,color:Colors.WHITE,textAlign:"center",marginTop:20}}>Unleash the joy of discovery and make learning an adventure.</Text>
           
             <TouchableOpacity style={styles.button} onPress={onPress}>
                 <Text style={{textAlign:"center",fontSize:20,color:"#1A769F",fontWeight:"700"}}>Let's Get started</Text>
             </TouchableOpacity>
          </View>
      </View>
    )
  }

const styles=StyleSheet.create({
     loginImage:{
        width:280,
        height:450,
        marginTop:70,
       
        borderColor:Colors.BLACK,
        borderRadius:15,
     },
     subContainer:{
         width:"100%",
         backgroundColor:"#1A769F",
         height:"70%",
         marginTop:-20,
         borderTopLeftRadius:30,
         borderTopRightRadius:30,
         padding:20
     },
     button:{
        padding:15,
        backgroundColor:Colors.WHITE,
        borderRadius:99,
        marginTop:40,
     }
})