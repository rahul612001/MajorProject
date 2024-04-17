import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native';

import { questions } from '../../../components/Health'; // questions are defined in a separate file

export default function GirlHealthResult({ route, navigation }) {
  const { isCorrect, nextQuestionIndex } = route.params;

  const handleNextPress = () => {
    if (nextQuestionIndex < questions.length) {
      navigation.navigate('BoyQuestionsHealth', { questionIndex: nextQuestionIndex });
    } else {
      navigation.navigate('BoyHomeHealth');
    }
  };
  const resultBanner = isCorrect ? require("../../../assets/images/trophy11.png") : require("../../../assets/images/loss112.png");

  return (
    <View>
      <ImageBackground source={require("../../../assets/images/girlresult112.jpg")} style={{ height: "100%" }}>
        <View style={styles.container}>
          <View style={{ justifyContent: "center", alignItems: "center", marginHorizontal: 20 }}>
            <Image source={resultBanner} style={{ width: 300, height: 400, marginTop: -20 }} />
          </View>
          <View style={styles.container}>
            <Text style={styles.result}>{isCorrect ? 'Correct!' : 'Incorrect!'}</Text>
            <TouchableOpacity style={styles.nextButton} onPress={handleNextPress}>
              <Text style={styles.nextButtonText}>{nextQuestionIndex < questions.length ? 'Next' : 'Finish'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
  },
  result: {
    fontSize: 27,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: "outfit-bold",
    //color: 'white',
  },
  nextButton: {
    backgroundColor: '#06718D',
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    width: 170,
    borderRadius: 20,
    borderWidth: 2,
    borderRightWidth: 6,
    borderLeftColor: "red",
    borderRightColor: "#FFA615",
    borderTopColor: "#FFA615",
    borderBottomColor: "#FFA615",
    borderLeftWidth: 6,
    borderLeftColor: "#FFA615",
    marginTop: 20,
  },
  nextButtonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: "outfit-bold",
    fontWeight: "600",
    fontSize: 16,
  },
});
