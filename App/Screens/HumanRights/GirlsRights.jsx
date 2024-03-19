import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
export default function GirlsRights() {

    return (
        <View>
            <View style={styles.container}>
                <View style={{ alignItems: "center", justifyContent: "center", margin: 10 }}>
                    <Image source={require("../../../assets/images/girl.jpg")} style={{ width: 100, height: 100, marginTop: -50 }} />
                    <Text style={{ marginTop: 10,color:"#206CE4",fontFamily:"outfit-bold",fontSize:16}}>Challenage</Text>
                    <Text style={{marginTop:5,color:"#5396E4",fontFamily:"outfit-medium"}}>3 Quiz</Text>
                    <View style={styles.button} >
                        <FontAwesome name="long-arrow-right" size={22} color="#5396E4" />
                    </View>
                </View>
            </View>
        </View>
    )
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
        padding: 10,
        paddingHorizontal: 20,
        borderRadius:40,
        paddingHorizontal:20,
        marginTop:10
    }
})