import React, { Component, useEffect, useState } from 'react'
import { Text, Touchable, View ,StyleSheet,Image, ImageBackground} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Loading from "../../components/Loading";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Speech from 'expo-speech'
const shuffleArray=(array)=> {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}




const  Quiz= ({navigation})=>{
      const [questions,setQuestions]=useState();
      const  [ques,setQues]=useState(0)
      const [options,setOptions]=useState([])
      const [score,setScore]=useState(0)
      const [isLoading,setIsLoading]=useState(false)

      
       const getQuiz=async()=>{
        setIsLoading(true)
        const url='https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=multiple&encode=url3986';
        const res=await fetch(url);
        const data=await res.json();
        setQuestions(data.results);
        setOptions(generateOptionsandshuffle(data.results[0]))
        setIsLoading(false)
       };

  useEffect(()=>{
    getQuiz();
    return () => {
      Speech.stop();
    };
  },[])


   const handleNextPress=()=>{
      setQues(ques+1)
      setOptions(generateOptionsandshuffle(questions[ques+1]))
   }


   const generateOptionsandshuffle=(_question)=>{
    const options=[..._question.incorrect_answers]
        options.push(_question.correct_answer)
        shuffleArray(options)
        return options
   }

   const handleSelectedOption=(_option)=>{
    if (_option===questions[ques].correct_answer) {
      setScore(score+10)
    }
    if (ques!==9) {
      setQues(ques+1)
      setOptions(generateOptionsandshuffle(questions[ques+1]))
    }
    if (ques===9) {
      handleShowresult()
    }
  
  }
  
   const handleShowresult=()=>{
    navigation.navigate('Result',{score:score})
   }


   const onPress=() => {
    const question = decodeURIComponent(questions[ques].question);
    const option1 = decodeURIComponent(options[0]);
    const option2 = decodeURIComponent(options[1]);
    const option3 = decodeURIComponent(options[2]);
    const option4 = decodeURIComponent(options[3]);

    // Concatenate the question and options into a single string
    const textToSpeak = `${question}. Option 1: ${option1}. Option 2: ${option2}.Option 3: ${option3}. Option 4: ${option4}`;

    // Speak the combined string using Speech.speak
    Speech.speak(textToSpeak);
}



    return (
      <View>
       <View style={{ width: "100%" ,marginBottom:-400}}>
          <Image source={require("../../assets/images/questionmark.png")}
            style={{height:400}}
          />
        </View>
        <View style={{ marginTop: 24, flexDirection: "row", alignItems: "center", justifyContent: "flex-start", marginHorizontal: 20 }}>
        <TouchableOpacity style={styles.Backbutton} onPress={()=>navigation.navigate("Homeee")}>
          <AntDesign name="left" size={20} color="#343A40" />
        </TouchableOpacity>
        <Text style={{ fontFamily: "outfit-bold", fontSize: 24, textAlign: "center", marginLeft: 65,color:"#343A40" }}>History Quiz</Text>
      </View>
      
      <View style={styles.container}>
      <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
           <Text style={{ fontSize: 20, fontFamily: "outfit-bold" ,color:"#0B5FA5",marginTop:16}}>Question</Text>
           <TouchableOpacity style={styles.Backbutton2} onPress={onPress}>
              <MaterialCommunityIcons name="text-to-speech" size={24} color="#0B5FA5" />
           </TouchableOpacity>
        </View>
        {isLoading?<View style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",marginTop:-80}}><View><Loading/><Text style={{fontSize:30,fontWeight:"700",color:"#76C893",alignItems:"center",justifyContent:"center",}}>Loading.....</Text></View></View>:questions&&
        <View style={styles.parent} >
        <View style={styles.top}>
           <Text style={styles.question}>Q. {decodeURIComponent(questions[ques].question)}</Text>
        </View>
        <View style={styles.options}>
          <TouchableOpacity style={styles.optionButton} onPress={()=>handleSelectedOption(options[0])}>
            <Text style={styles.option}>{decodeURIComponent(options[0])}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionButton} onPress={()=>handleSelectedOption(options[1])}>
            <Text style={styles.option}>{decodeURIComponent(options[1])}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionButton} onPress={()=>handleSelectedOption(options[2])}>
            <Text style={styles.option}>{decodeURIComponent(options[2])}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionButton} onPress={()=>handleSelectedOption(options[3])}>
            <Text style={styles.option}>{decodeURIComponent(options[3])}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttom}>
           {/*<TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>PREV</Text>
        </TouchableOpacity>*/}


      {ques!==9&& <TouchableOpacity style={styles.button} onPress={handleNextPress} >
              <Text style={styles.buttonText}>SKIP</Text>
           </TouchableOpacity>}


           
      {ques===9&& <TouchableOpacity style={styles.button} onPress={handleShowresult}>
              <Text style={styles.buttonText}>SHOW RESULTS</Text>
           </TouchableOpacity>}
           

       
       
        </View>
        </View>}
        
      </View>
      <Image source={require("../../assets/images/science12345.png")} style={{width:"100%",height:130,marginTop:-30}}>
           
        </Image>
      </View>
    )
  }
export default Quiz


const styles =StyleSheet.create({
  container:{
    paddingTop:10,
    paddingHorizontal:20,
   
  },
  
  top:{
    marginVertical:16,

  },
  options:{
    
  },
  buttom:{
    marginBottom:12,
    paddingVertical:16,
    marginTop:-20
    
  },
  button:{
    marginTop: 20,
    backgroundColor: '#0B5FA5',
    padding: 17,
    borderRadius: 99,
    width:"100%"
 },
 buttonText:{
   fontSize:18,
   fontWeight:"600",
   color:"white",
   textAlign:"center"
 },
 question:{
  fontSize: 24,
  fontFamily: "outfit-medium",
 },
 option:{
  fontSize:18,
  fontWeight:"500",
  color:"black"
 },
 optionButton:{
  backgroundColor: 'white',
  padding: 20,
  borderRadius: 20,
  margin: 4,
  borderWidth: 3,
  borderColor: "#E4EAEF"
 },
 parent:{
  
 },
 Backbutton: {
  backgroundColor: "white",
  padding: 10,
  borderRadius: 99
},
Backbutton2: {
  backgroundColor: "white",
  padding: 10,
  borderRadius: 99,
  elevation:10
},


})