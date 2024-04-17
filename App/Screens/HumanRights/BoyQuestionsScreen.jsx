import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { questions } from '../../../components/questions2'; // questions components

export default function BoyQuestionsScreen({ route, navigation }) {
  const { questionIndex } = route.params;
  const [selectedOption, setSelectedOption] = useState(null);

  const question = questions[questionIndex];

  const handleOptionPress = (option) => {
    setSelectedOption(option);
  };

  const handleNextPress = () => {
    const correctAnswer = question.correctAnswer;
    const isCorrect = selectedOption === correctAnswer;

    navigation.navigate('BoyResultScreen', { isCorrect, nextQuestionIndex: questionIndex + 1, question: question });
  };

  return (
    <View>
      <View style={{ marginTop: 24, flexDirection: "row", alignItems: "center", justifyContent: "flex-start", marginHorizontal: 20 }}>
        <TouchableOpacity style={styles.Backbutton} onPress={() => navigation.navigate("BoyRightHome")}>
          <AntDesign name="left" size={20} color="#343A40" />
        </TouchableOpacity>
        <Text style={{ fontFamily: "outfit-bold", fontSize: 24, textAlign: "center", marginLeft: 65, color: "#343A40" }}>Boy Right Education</Text>
      </View>

      <View style={styles.container}>
        <Text style={{ marginBottom: 10, fontSize: 20, fontFamily: "outfit-bold", color: "#0B5FA5" }}>Question</Text>
        <Text style={styles.question}>{question.question}</Text>
        <View>
          {question.options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.myView, selectedOption === option && styles.myViewPressed]}
              onPress={() => handleOptionPress(option)}
            >
              <Text style={{ color: selectedOption === option ? "white" : "black", fontFamily: "outfit-medium", fontSize: 16 }}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity
          style={styles.nextButton}
          onPress={handleNextPress}
          disabled={!selectedOption}
        >
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>

        <Image source={require("../../../assets/images/rocket223.png")} style={{ width: 130, height: 130 }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 20,
  },
  question: {
    fontSize: 20,
    marginBottom: 20,
    fontFamily: "outfit-medium",
  },
  option: {
    backgroundColor: '#eee',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  selectedOption: {
    backgroundColor: 'lightblue',
  },
  nextButton: {
    marginTop: 20,
    backgroundColor: '#0B5FA5',
    padding: 17,
    borderRadius: 99,

  },
  nextButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: "center",
    fontWeight: "600",
  },
  Backbutton: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 99
  },
  myView: {
    backgroundColor: 'white',
    padding: 20,
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
