import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { questions } from '../../../components/questions2'; // questions are defined in a separate file

export default function BoyResultScreen({ route, navigation }) {
  const { isCorrect, nextQuestionIndex } = route.params; // Corrected syntax

  const handleNextPress = () => {
    if (nextQuestionIndex < questions.length) {
      navigation.navigate('BoyQuestionsScreen', { questionIndex: nextQuestionIndex });
    } else {
      navigation.navigate('BoyRightHome');
    }
  };

  const resultBanner = isCorrect ? require("../../../assets/images/trophy11.png") : require("../../../assets/images/loss112.png");

  return (
    <ImageBackground source={require("../../../assets/images/girlresult112.jpg")} style={{ flex: 1 }}>
      <View style={styles.container}>
        <Image source={resultBanner} style={styles.resultBanner} />
        <Text style={styles.result}>{isCorrect ? 'Correct!' : 'Incorrect!'}</Text>
        <TouchableOpacity style={styles.nextButton} onPress={handleNextPress}>
          <Text style={styles.nextButtonText}>{nextQuestionIndex < questions.length ? 'Next' : 'Finish'}</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
  },
  resultBanner: {
    width: "100%",
    height: 400,
    marginTop: -20,
  },
  result: {
    fontSize: 27,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: "outfit-bold",
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
