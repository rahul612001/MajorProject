import { useUser } from '@clerk/clerk-expo'
import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, Touchable } from 'react-native'
import Colors from '../../Utils/Colors';
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


import { useTranslation } from 'react-i18next';

export default function Header() {
  const { t } = useTranslation(); 
  const navigation = useNavigation();
  const { user, isLoading } = useUser();
  return user && (
    <View style={styles.container}>

      <View style={styles.profileMainContainer}>
        
        <View style={styles.profileContainer}>
          <View style={styles.imageCirle}>
            <TouchableOpacity onPress={() => navigation && navigation.navigate("ProfileScreen")}>
            <Image source={{ uri: user?.imageUrl }}
              style={styles.userImage} />
             </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => navigation && navigation.navigate("ProfileScreen")}>
            <Text style={{ color: Colors.WHITE, fontFamily: "outfit" }}>{t('welcome')}</Text>
            <Text style={{ color: Colors.WHITE, fontSize: 20, fontFamily: "outfit-medium" }}>{user.fullName}</Text>
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity style={{marginBottom:100,marginHorizontal:10}}>
            <FontAwesome name="bell" size={24} color="white" />
         </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    padding: 20,
    paddingTop: 20,
    backgroundColor: "#1A769F",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  userImage: {
    width: 45,
    height: 45,
    borderRadius: 99,
  },
  profileContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 100,
  },
  imageCirle: {
    backgroundColor: "white",
    borderRadius: 99,
    borderWidth: 2,
    borderColor: "white",

  },
  profileMainContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

  }
})