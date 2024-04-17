import React from 'react';
import { StyleSheet, View, ImageBackground, Text } from 'react-native';
import LottieView from 'lottie-react-native';
import { useUser } from '@clerk/clerk-expo';

export default function Profile({ navigation }) {
  const { user, isLoading } = useUser();

  return (
    <View style={styles.container}>
      {/* Lottie animation as background */}
      <LottieView
        source={require('../../../assets/animations/profileback2.json')}
        autoPlay
        loop
        style={styles.animation}
      />
      {/* Profile image */}
      {user?.imageUrl && (
        <ImageBackground
          source={{ uri: user?.imageUrl }}
          resizeMode="cover"
          style={styles.image}
        />
      )}
          <View style={styles.bottomContainer}>
      <Text style={{ color:"#06718D", fontSize: 16, fontFamily: "outfit-medium" }}>{user.fullName}</Text>
        <Text style={{ color:"#06718D", fontSize: 16, fontFamily: "outfit-medium" }}>{user.primaryEmailAddress.emailAddress}</Text>

      </View>

   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:-200
  },
  animation: {
    position: 'absolute',
    width: '60%',
    height: '60%',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 99,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'white',
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 100, // Adjust as needed for vertical positioning from bottom
    alignItems: 'center',
   
  },
  text: {
    fontSize: 16,
    marginVertical: 5,
  },
});
