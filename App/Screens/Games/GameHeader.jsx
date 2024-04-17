import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const GameHeader = () => {

    const navigation = useNavigation(); // Access the navigation prop using useNavigation hook

  const handleGoBack = () => {
    navigation.goBack(); // Call goBack function to navigate back
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
        <AntDesign name="left" size={24} color="white" />
      </TouchableOpacity>
      <Text style={styles.title}>Tic Tac Toe</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    
  },
  backButton: {
    marginLeft: 10,
    padding: 10,
    borderRadius: 99,
    backgroundColor: '#3F4E6B', // Optional background color
  },
  title: {
    flex: 1,
    marginRight:50,
    fontFamily: 'outfit-bold',
    fontSize: 28,
    textAlign: 'center',
    justifyContent:"center",
    color: '#343A40',
  },
});

export default GameHeader;
