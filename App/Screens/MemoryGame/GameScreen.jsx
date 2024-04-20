import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, FlatList, Button, Text, TouchableOpacity,Image } from 'react-native';
import Card from '../MemoryGame/Card';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const GameScreen = () => {
    const initialCards = [
        { id: 1, value: 'pers', isFlipped: false },
        { id: 2, value: 'Banana', isFlipped: false },
        { id: 3, value: 'Blueberry', isFlipped: false },
        { id: 4, value: 'Avocado', isFlipped: false },
        { id: 5, value: 'Mango', isFlipped: false },
        { id: 6, value: 'Orange', isFlipped: false },
        { id: 7, value: 'Strawberry', isFlipped: false },
        { id: 8, value: 'Pineapple', isFlipped: false },
        { id: 9, value: 'Watermelon', isFlipped: false },
        { id: 10, value: 'apples', isFlipped: false },
        { id: 11, value: 'pers', isFlipped: false },
        { id: 12, value: 'Banana', isFlipped: false },
        { id: 13, value: 'Blueberry', isFlipped: false },
        { id: 14, value: 'Avocado', isFlipped: false },
        { id: 15, value: 'Mango', isFlipped: false },
        { id: 16, value: 'Orange', isFlipped: false },
        { id: 17, value: 'Strawberry', isFlipped: false },
        { id: 18, value: 'Pineapple', isFlipped: false },
        { id: 19, value: 'Watermelon', isFlipped: false },
        { id: 20, value: 'apples', isFlipped: false },

    ];

    const [cards, setCards] = useState([]);
    const [moves, setMoves] = useState(0);
    const [timer, setTimer] = useState(0);
    const [score, setScore] = useState(0);
    const timerRef = useRef(null);
    const numPairs = initialCards.length / 2;
    const navigation = useNavigation(); // Access navigation object

    useEffect(() => {
        shuffleCards();
        startTimer();

        return () => {
            clearInterval(timerRef.current);
        };
    }, []);

    const shuffleCards = () => {
        const copiedCards = [...initialCards];
        for (let i = copiedCards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [copiedCards[i], copiedCards[j]] = [copiedCards[j], copiedCards[i]];
        }
        setCards(copiedCards);
    };

    const handleCardPress = (id) => {
        const updatedCards = cards.map((card) =>
            card.id === id ? { ...card, isFlipped: !card.isFlipped } : card
        );
        setCards(updatedCards);
        setMoves((prevMoves) => prevMoves + 1);

        const allFlipped = updatedCards.every((card) => card.isFlipped);
        if (allFlipped) {
            clearInterval(timerRef.current);
            const finalScore = calculateScore();
            setScore(finalScore);

            // Navigate to the 'Result' screen with the score as a parameter
            navigation.navigate('Result', { score: finalScore });
        }
    };

    const startTimer = () => {
        timerRef.current = setInterval(() => {
            setTimer((prevTimer) => prevTimer + 1);
        }, 1000);
    };

    const calculateScore = () => {
        // Basic scoring example: Score = (Total number of pairs * 100) - (Moves * 10) - (Time in seconds)
        const totalScore = numPairs * 100 - moves * 10 - timer;
        return totalScore > 0 ? totalScore : 0; // Ensure score is not negative
    };

    const renderCardItem = ({ item }) => (
        <Card
            value={item.value}
            isFlipped={item.isFlipped}
            onPress={() => handleCardPress(item.id)}
        />
    );

    return (
        <View style={styles.container}>
            <View style={styles.topRow}>
                <TouchableOpacity style={styles.Backbutton} onPress={() => navigation.goBack()}>
                    <AntDesign name="left" size={24} color="#333" />
                </TouchableOpacity>
                <View style={{backgroundColor:"white",paddingHorizontal:9,borderRadius:10,borderWidth:1.3,borderColor:"#F3F3F3"}}>
                  <Text style={styles.infoText}>Moves: {moves}</Text>
                </View>
                <View style={{backgroundColor:"white",paddingHorizontal:9,borderRadius:10,borderWidth:1.3,borderColor:"#F3F3F3",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                   <Image source={require("../../../assets/images/timer.png")} style={{width:40,height:40,marginTop:7}}>

                   </Image>
                    <Text style={styles.infoText}>Time: {timer} sec</Text>
                    
                </View>
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={cards}
                numColumns={4}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderCardItem}
                contentContainerStyle={styles.cardContainer}
            />
            
            <TouchableOpacity
                style={styles.start}
                onPress={() => {
                    clearInterval(timerRef.current);
                    shuffleCards();
                    setMoves(0);
                    setTimer(0);
                    startTimer();
                }}>
                <Text style={{color:"white",fontWeight:"700",fontSize:18}}>Restart Game</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5fcff',
        padding: 10,
       
    },
    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        marginTop: 20,
        marginRight: 16
    },
    backButton: {
        padding: 10,
    },
    infoText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginTop: 12,
    },
    cardContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: -6,
    },
    Backbutton: {
        backgroundColor: "white",
        padding: 10,
        borderRadius: 99
    },
    start: {
        backgroundColor: '#06718D',
        padding: 16,
        justifyContent:"center",
        alignItems:"center",
        width:"100%" ,
        borderRadius: 20,
        borderWidth: 2,
        borderRightWidth: 6,
        borderLeftColor: "red",
        borderRightColor: "#FFA615",
        borderTopColor: "#FFA615",
        borderBottomColor: "#FFA615",
        borderLeftWidth: 6,
        borderLeftColor: "#FFA615",
       
    }
});

export default GameScreen;