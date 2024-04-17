import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground, Text,TouchableOpacity, Modal } from 'react-native';
import LottieView from 'lottie-react-native';
import { useUser } from '@clerk/clerk-expo';
import Profile from './Profile';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import * as Linking from 'expo-linking';

export default function ProfileScreen({ navigation }) {
  const { user, isLoading } = useUser();

  const [showPersonalInfoModal, setShowPersonalInfoModal] = useState(false);
  const [showNotificationsModal, setShowNotificationsModal] = useState(false);
  const [showchildModal, setShowchildModal] = useState(false);
  const [showaboutModal, setShowaboutModal] = useState(false);
  // Function to toggle Personal Information modal
  const togglePersonalInfoModal = () => {
    setShowPersonalInfoModal(!showPersonalInfoModal);
  };

  // Function to toggle Notifications modal
  const toggleNotificationsModal = () => {
    setShowNotificationsModal(!showNotificationsModal);
  };


  const toggleChildModal = () => {
    setShowchildModal(!showchildModal);
  };

  // Function to toggle Notifications modal
  const toggleAboutModal = () => {
    setShowaboutModal(!showaboutModal);
  };


  const sendEmail = async () => {
    const recipient = 'rahul777384@gmail.com';  //give mail here bussiness mail [from rahul to bussiness mail]
    const subject = "Rahul's Services: Your App Developer Here to Help!";
    const body = 'Hello 👋'+user.fullName;

    let url = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    try {
      await Linking.openURL(url);
      console.log('Email opened successfully');
    } catch (error) {
      console.error('Error opening email:', error);
    }
  };



  <Text style={{ color:"#06718D", fontSize: 16, fontFamily: "outfit-medium" }}>{user.fullName}</Text>






  return (
    <View style={styles.container}>
      <View style={{marginTop:28,marginLeft:10,flexDirection:"row",justifyContent:"space-between"}}>
      <TouchableOpacity  onPress={() => navigation.goBack()}>
         <AntDesign name="arrowleft" size={24} color="#424242" />
        </TouchableOpacity>
    
        <View style={{flexDirection:"row",marginHorizontal:10,backgroundColor:"#F4F7FE",padding:4,borderRadius:10}}>
          <TouchableOpacity style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}  >
          <LottieView
              source={require('../../../assets/animations/logout.json')}
              autoPlay
              loop
             style={{ width: 30, height:30,}}/>
           <Text style={{fontFamily:"outfit-bold",color:"#424242",}}>Log out</Text>
          </TouchableOpacity>
        </View>
      </View>
      
        <Profile/>
     
     <View style={{backgroundColor:"#06718D",borderTopRightRadius:40,borderTopLeftRadius:40,padding:20,justifyContent:"space-between",marginTop:-90}}>
        <View style={{backgroundColor:"#EFEEFC",borderRadius:20}}>
     <TouchableOpacity style={{ backgroundColor: "#EFEEFC", padding: 10, mmarginHorizontal: 1, borderRadius: 20,}} onPress={togglePersonalInfoModal}>
        <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "white", padding: 16, marginHorizontal: 14, borderRadius: 20 }} >
          <View style={{ borderColor: "#EFEEFC", borderWidth: 2, width: 25, height: 25, borderRadius: 100, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
            <FontAwesome6 name="user" size={20} color="#525252" />
          </View>

          <View style={{ flexDirection: "row", gap: 20,justifyContent:"center",alignItems:"center" }}>
            <View>
              <Text style={{fontFamily:"outfit-medium",fontSize:14,marginLeft:10}}>Persional information</Text>
             
            </View>
          </View>

          <View style={{ marginLeft: 'auto',marginRight: 14 }}>
            <AntDesign name="doubleright" size={24} color="#8984C0" />
          </View>
        </View>
      </TouchableOpacity>  
        

      

        
      <TouchableOpacity style={{ backgroundColor: "#EFEEFC", padding: 10, mmarginHorizontal: 1, borderRadius: 20,}} onPress={toggleNotificationsModal}>
        <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "white", padding: 16, marginHorizontal: 14, borderRadius: 20 }}>
          <View style={{ borderColor: "#EFEEFC", borderWidth: 2, width: 25, height: 25, borderRadius: 100, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
            <Ionicons name="notifications-outline" size={20} color="#525252" />
          </View>

          <View style={{ flexDirection: "row", gap: 20,justifyContent:"center",alignItems:"center" }}>
            <View>
              <Text style={{fontFamily:"outfit-medium",fontSize:14,marginLeft:10}}>Notifications</Text>
             
            </View>
          </View>

          <View style={{ marginLeft: 'auto',marginRight: 14 }}>
            <AntDesign name="doubleright" size={24} color="#8984C0" />
          </View>
        </View>
      </TouchableOpacity>  




      <TouchableOpacity style={{ backgroundColor: "#EFEEFC", padding: 10, mmarginHorizontal: 1, borderRadius: 20,}}  onPress={() => navigation.navigate('Home')}>
        <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "white", padding: 16, marginHorizontal: 14, borderRadius: 20 }}>
          <View style={{ borderColor: "#EFEEFC", borderWidth: 2, width: 25, height: 25, borderRadius: 100, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
          <Ionicons name="home-outline" size={20} color="#525252" />
          </View>

          <View style={{ flexDirection: "row", gap: 20,justifyContent:"center",alignItems:"center" }}>
            <View>
              <Text style={{fontFamily:"outfit-medium",fontSize:14,marginLeft:10}}>Homescreen</Text>
             
            </View>
          </View>

          <View style={{ marginLeft: 'auto',marginRight: 14 }}>
            <AntDesign name="doubleright" size={24} color="#8984C0" />
          </View>
        </View>
      </TouchableOpacity> 




      <TouchableOpacity style={{ backgroundColor: "#EFEEFC", padding: 10, mmarginHorizontal: 1, borderRadius: 20,}} onPress={toggleChildModal}>
        <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "white", padding: 16, marginHorizontal: 14, borderRadius: 20 }}>
          <View style={{ borderColor: "#EFEEFC", borderWidth: 2, width: 25, height: 25, borderRadius: 100, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
          <Feather name="users" size={20} color="#525252" />
          </View>

          <View style={{ flexDirection: "row", gap: 20,justifyContent:"center",alignItems:"center" }}>
            <View>
              <Text style={{fontFamily:"outfit-medium",fontSize:14,marginLeft:10}}>Accessibility for children</Text>
             
            </View>
          </View>

          <View style={{ marginLeft: 'auto',marginRight: 14 }}>
            <AntDesign name="doubleright" size={24} color="#8984C0" />
          </View>
        </View>
      </TouchableOpacity> 




      <TouchableOpacity style={{ backgroundColor: "#EFEEFC", padding: 10, mmarginHorizontal: 1, borderRadius: 20,}} onPress={toggleAboutModal}>
        <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "white", padding: 16, marginHorizontal: 14, borderRadius: 20 }}>
          <View style={{ borderColor: "#EFEEFC", borderWidth: 2, width: 25, height: 25, borderRadius: 100, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
          <AntDesign name="infocirlceo" size={20} color="#525252" />
          </View>

          <View style={{ flexDirection: "row", gap: 20,justifyContent:"center",alignItems:"center" }}>
            <View>
              <Text style={{fontFamily:"outfit-medium",fontSize:14,marginLeft:10}}>About this app</Text>
             
            </View>
          </View>

          <View style={{ marginLeft: 'auto',marginRight: 14 }}>
            <AntDesign name="doubleright" size={24} color="#8984C0" />
          </View>
        </View>
      </TouchableOpacity> 


      <TouchableOpacity style={{ backgroundColor: "#EFEEFC", padding: 10, mmarginHorizontal: 1, borderRadius: 20,}} onPress={() => sendEmail()}>
        <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "white", padding: 16, marginHorizontal: 14, borderRadius: 20 }}>
          <View style={{ borderColor: "#EFEEFC", borderWidth: 2, width: 25, height: 25, borderRadius: 100, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
          <Feather name="phone-call" size={20} color="#525252" />
          </View>

          <View style={{ flexDirection: "row", gap: 20,justifyContent:"center",alignItems:"center" }}>
            <View>
              <Text style={{fontFamily:"outfit-medium",fontSize:14,marginLeft:10}}>Contact us</Text>
             
            </View>
          </View>

          <View style={{ marginLeft: 'auto',marginRight: 14 }}>
            <AntDesign name="doubleright" size={24} color="#8984C0" />
          </View>
        </View>
      </TouchableOpacity> 


     </View>
     
     
     </View>





    {/**all models */}
     <Modal
        animationType="slide"
        transparent={true}
        visible={showPersonalInfoModal}
        onRequestClose={togglePersonalInfoModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Personal Information</Text>
            {/* Content for Personal Information modal */}
            
            <Text style={{  fontSize: 16, fontFamily: "outfit-medium" }}>Name:{user.fullName}</Text>
            
             <Text style={{  fontSize: 16, fontFamily: "outfit-medium" }}>Email:{user.primaryEmailAddress.emailAddress}</Text>
            <TouchableOpacity style={styles.closeButton} onPress={togglePersonalInfoModal}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>


{/* Notifications Modal */}
<Modal
        animationType="slide"
        transparent={true}
        visible={showNotificationsModal}
        onRequestClose={toggleNotificationsModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Notifications</Text>
            {/* Content for Notifications modal */}
            <Text>There is no. notifications yet......</Text>
            <TouchableOpacity style={styles.closeButton} onPress={toggleNotificationsModal}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>




      <Modal
        animationType="slide"
        transparent={true}
        visible={showchildModal}
        onRequestClose={toggleChildModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Accessibility for children</Text>
            {/* Content for Notifications modal */}
            <Text>"ChildRightsQuest" is committed to ensuring accessibility for all children, regardless of their abilities or learning styles. The app's user interface is designed with clear navigation and age-appropriate visuals to accommodate young users effectively.
               To enhance accessibility, ChildRightsQuest incorporates features like text-to-speech options and adjustable font sizes, catering to children with varying needs. The content is presented in an engaging and straightforward manner, ensuring that every child can comprehend and participate in learning about their rights.</Text>
            <TouchableOpacity style={styles.closeButton} onPress={toggleChildModal}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>


      <Modal
        animationType="slide"
        transparent={true}
        visible={showaboutModal}
    
        onRequestClose={toggleAboutModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>About the app</Text>
            {/* Content for Notifications modal */}
            <Text>"ChildRightsQuest" is an innovative app designed to educate children about their rights through engaging quizzes and games. With a focus on girls' rights, boys' rights, and general child rights, the app covers important topics such as education, health, protection, and equality in an interactive and enjoyable format.
                     Children can challenge themselves with quizzes that deepen their understanding of fundamental rights, while interactive games like tic-tac-toe and hangman make learning fun and memorable. Safety and privacy are paramount, ensuring a secure and enriching experience for young users.
                     Parents have the ability to monitor their child's progress and engagement within the app, promoting active involvement in their learning journey. Join us on this empowering adventure with ChildRightsQuest – where education meets entertainment for a brighter future!</Text>
            <TouchableOpacity style={styles.closeButton} onPress={toggleAboutModal}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
            
          </View>
        </View>
      </Modal>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

   // marginBottom:300,
    backgroundColor:"white"
    
  },
  header: {
    marginTop: 28,
    marginLeft: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mainContent: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#EAEAEA',
  },
  menuItemText: {
    marginLeft: 20,
    fontSize: 16,
    color: '#525252',
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  closeButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: '#06718D',
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

});
