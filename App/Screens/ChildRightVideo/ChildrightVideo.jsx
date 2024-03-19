import React, { useState } from 'react';
import { ImageBackground, Text, View, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import YoutubePlayer from "react-native-youtube-iframe";

export function ChildrightVideo({ navigation }) {
  const [pressedIndex, setPressedIndex] = useState(null);
  const [correctIndex, setCorrectIndex] = useState(1); // Set the correct index here
  const [score, setScore] = useState(0);

  const handlePress = (index) => {
    setPressedIndex(index);
  };

  const options = ["Survival and Development", "Survival,Development,Protection and Participation", "Protection and Participation", "Survival,Development,Protection"];

  const handleSubmit = () => {
    // Calculate the score based on the selected option
    const score = pressedIndex === correctIndex ? 10 : 0;
    // Navigate to result screen with the calculated score
    navigation.navigate('ResultScreen', { score });
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ backgroundColor: "#00BF91", marginTop: 15 }}>
        <YoutubePlayer
          height={230}
          width={"100%"}
          play={true}
          videoId='HCYLdtug8sk'
        />
      </View>
      <ImageBackground source={require("../../../assets/images/image238.png")} style={{ width: "100%", height: 500 }}>
        <View style={styles.Videonotes1}>
          <Text style={{ fontFamily: "outfit-bold" ,fontSize:16}}>Watch the video carefully and then give the below question's answer.</Text>
        </View>

        <View style={styles.Videonotes}>
          <View style={{ justifyContent: 'center', alignItems: "center", flexDirection: "row" }}>
            <Image source={require('../../../assets/images/image23.png')} style={{ width: 45, height: 56, marginLeft: 10, marginVertical: 5 }} />
            <Text style={{ textAlign: "center", fontFamily: "outfit-bold", marginLeft: 10 ,fontSize:16,}}>what are the basic rights of child ?</Text>
          </View>
        </View>

        <ScrollView style={{ flex: 1 }}>
          <View style={styles.optionsView}>
            <View style={{ justifyContent: "center", alignItems: "center", padding: 10, backgroundColor: "#F4F4F9", borderRadius: 99, width: 70, height: 70, marginHorizontal: "40%", marginTop: -35 }}>
              <Text style={{ justifyContent: "center", textAlign: "center", fontSize: 20, fontFamily: "outfit-bold", color: "#00BF91" }}>10</Text>
            </View>

            {options.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={[styles.myView, pressedIndex === index && styles.myViewPressed]}
                onPress={() => handlePress(index)}
              >
                <Text style={{ color: pressedIndex === index ? "white" : "black", fontFamily: "outfit-medium", fontSize: 16 }}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        <View style={{ justifyContent: "flex-end", marginBottom: 30 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 20, marginBottom: -20 }}>
            <TouchableOpacity
              style={{ padding: 20, backgroundColor: "#00BF91", margin: 10, borderRadius: 20, paddingHorizontal: 30, elevation: 8 }}
              onPress={handleSubmit} // Call handleSubmit when Submit button is pressed
            >
              <Text style={{ color: "white", fontFamily: "outfit-medium", fontSize: 16 }}>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ padding: 20, backgroundColor: "#00BF91", margin: 10, borderRadius: 20, paddingHorizontal: 30, elevation: 5 }}>
              <Text style={{ color: "white", fontFamily: "outfit-medium", fontSize: 16 }}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  Videonotes1: {
    padding: 16,
    backgroundColor: "white",
    elevation: 6,
    marginHorizontal: 20,
    marginTop: 7,
    borderRadius: 20,
  },
  Videonotes: {
    backgroundColor: "white",
    elevation: 6,
    marginHorizontal: 20,
    marginTop: 13,
    borderRadius: 20,
    flexDirection: "row"
  },
  optionsView: {
    padding: 16,
    backgroundColor: "#F4F4F9",
    elevation: 6,
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 20,
  },
  option: {
    padding: 16,
    backgroundColor: "#1A769F",
    borderRadius: 20,
    margin: 7
  },
  myView: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 20,
    
    margin: 4,
    borderWidth: 3,
    borderColor: "#E4EAEF"
  },
  myViewPressed: {
    backgroundColor: '#00BF91',
    borderWidth: 3,
    borderColor: "white"
  },
});
