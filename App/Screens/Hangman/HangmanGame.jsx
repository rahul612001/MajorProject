import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Svg, { Ellipse, G, Line, Rect } from 'react-native-svg';
import { createAnimatableComponent } from 'react-native-animatable';

const AnimatableLine = createAnimatableComponent(Line);
const AnimatableRect = createAnimatableComponent(Rect);
const AnimatableEllipse = createAnimatableComponent(Ellipse);

const ManFigure = ({ wrongWord }) => {
  const colors = {
    shapeColor: '#06718D', // Color for shapes (e.g., head, body, etc.)
    frameColor: '#ccc', // Color for frame or background
  };

  const Rope = <AnimatableLine animation={'fadeIn'} x1="200" y1="0" x2="200" y2="140" stroke="brown" strokeWidth="5" />;
  const Head = <AnimatableEllipse animation={'fadeIn'} cx="200" cy="150" rx="40" ry="25" fill={colors.shapeColor} />;
  const Neck = <AnimatableRect animation={'fadeIn'} width="10" height="50" x="195" y="150" fill={colors.shapeColor} />;
  const Hands = (
    <AnimatableLine animation={'fadeIn'} x1="260" y1="200" x2="140" y2="200" stroke={colors.shapeColor} strokeLinecap="round" strokeWidth="10" />
  );
  const Body = <AnimatableRect animation={'fadeIn'} width="10" height="50" x="195" y="200" fill={colors.shapeColor} />;
  const Legs = (
    <G>
      <AnimatableLine animation={'fadeIn'} x1="200" y1="250" x2="150" y2="300" stroke={colors.shapeColor} strokeLinecap="round" strokeWidth="10" />
      <AnimatableLine animation={'fadeIn'} x1="200" y1="250" x2="250" y2="300" stroke={colors.shapeColor} strokeLinecap="round" strokeWidth="10" />
    </G>
  );

  return (
    <View style={styles.container}>
      <Svg version="1.1" viewBox="0 0 300 400" preserveAspectRatio="xMinYMin meet" className="svg-content" width="140" height="200">
        <Rect fill={colors.frameColor} width="250" height="10" x="5" y="15" />
        <Rect fill={colors.frameColor} width="10" height="350" x="20" y="0" />
        <Rect fill={colors.frameColor} width="250" height="40" x="0" y="350" />
        {wrongWord > 0 ? Rope : null}
        {wrongWord > 1 ? Head : null}
        {wrongWord > 2 ? Neck : null}
        {wrongWord > 3 ? Hands : null}
        {wrongWord > 4 ? Body : null}
        {wrongWord > 5 ? Legs : null}
      </Svg>
    </View>
  );
};

const HangmanGame = ({ navigation }) => {
  const [selectedWordObj, setSelectedWordObj] = useState({});
  const [guessedWord, setGuessedWord] = useState('');
  const [remainingAttempts, setRemainingAttempts] = useState(6);
  const [gameStatus, setGameStatus] = useState('playing');
  const [hintVisible, setHintVisible] = useState(false);

  const initializeGame = () => {
    const words = [
      { word: 'hangman', hint: 'A classic word guessing game' },
      { word: 'react', hint: 'A popular JavaScript library for building UI' },
      { word: 'native', hint: 'Used for developing mobile applications' },
      { word: 'javascript', hint: 'The language of the web' },
      { word: 'programming', hint: 'Writing code to create software' },
    ];
    const randomIndex = Math.floor(Math.random() * words.length);
    const wordObj = words[randomIndex];
    setSelectedWordObj(wordObj);
    setGuessedWord('_'.repeat(wordObj.word.length));
    setRemainingAttempts(6);
    setGameStatus('playing');
    setHintVisible(false);
  };

  const handleGuess = (letter) => {
    if (gameStatus !== 'playing' || guessedWord.includes(letter)) return;

    const newGuessedWord = [...guessedWord];
    let letterFound = false;

    for (let i = 0; i < selectedWordObj.word.length; i++) {
      if (selectedWordObj.word[i] === letter) {
        newGuessedWord[i] = letter;
        letterFound = true;
      }
    }

    if (!letterFound) {
      setRemainingAttempts((prev) => prev - 1);
    }

    setGuessedWord(newGuessedWord.join(''));

    if (newGuessedWord.join('') === selectedWordObj.word) {
      setGameStatus('won');
    }

    if (remainingAttempts === 1) {
      setGameStatus('lost');
    }
  };

  const handleHint = () => {
    setHintVisible(true);
  };

  useEffect(() => {
    initializeGame();
  }, []);

  const handlePlayAgain = () => {
    initializeGame();
  };

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <View style={{backgroundColor:"white",padding:10,borderRadius:99}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        </View>
        <Text style={styles.gameName}>Hangman</Text>
      </View>
      <ManFigure wrongWord={6 - remainingAttempts} />
      <Text style={styles.word}>{guessedWord}</Text>
      <Text style={styles.attempts}>Attempts left: {remainingAttempts}</Text>
      {hintVisible && <Text style={styles.hintText}>Hint: {selectedWordObj.hint}</Text>}
      <View style={styles.keyboard}>
        {Array.from('abcdefghijklmnopqrstuvwxyz').map((letter) => (
          <TouchableOpacity
            key={letter}
            style={styles.button}
            onPress={() => handleGuess(letter)}
            disabled={gameStatus !== 'playing' || guessedWord.includes(letter)}
          >
            <Text style={styles.buttonText}>{letter}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          style={[styles.button, styles.hintButton]}
          onPress={handleHint}
          disabled={gameStatus !== 'playing' || hintVisible}
        >
          <Text style={styles.buttonText}>Hint</Text>
        </TouchableOpacity>
      </View>
      {gameStatus !== 'playing' && (
        <Text style={styles.gameOverText}>
          {gameStatus === 'won' ? 'Congratulations! You won! 👍 🏆 🎉' : 'Oops! You lost! 👎'}
        </Text>
      )}
      <TouchableOpacity
        style={[styles.playAgainButton, gameStatus === 'playing' ? styles.disabledButton : null]}
        onPress={handlePlayAgain}
        disabled={gameStatus === 'playing'}
      >
        <Text style={styles.playAgainText}>Play Again</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f0f0f0',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  gameName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
    color:"#06718D"
  },
  word: {
    fontSize: 36,
    marginBottom: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    color:"#FFA615"
  },
  attempts: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  hintText: {
    fontSize: 16,
    fontStyle: 'italic',
    marginBottom: 10,
    textAlign: 'center',
  },
  keyboard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#06718D',
    paddingHorizontal: 20,
    paddingVertical: 15,
    margin: 6,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  hintButton: {
    backgroundColor: '#06718D',
    borderWidth: 2,
    borderRightWidth: 6,
    borderLeftColor: "red",
    borderRightColor: "#FFA615",
    borderTopColor: "#FFA615",
    borderBottomColor: "#FFA615",
    borderLeftWidth: 6,
    borderLeftColor: "#FFA615",

  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',

    
  },
  gameOverText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#ff0000',
  },
  playAgainButton: {
    backgroundColor: '#06718D',
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 8,
    padding: 16,
    marginHorizontal:20,
    borderWidth: 2,
    borderRightWidth: 6,
    borderLeftColor: "red",
    borderRightColor: "#FFA615",
    borderTopColor: "#FFA615",
    borderBottomColor: "#FFA615",
    borderLeftWidth: 6,
    borderLeftColor: "#FFA615",
    

  },
  playAgainText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  disabledButton: {
    backgroundColor: '#ccc', // Change to a different color or style for disabled state
    borderWidth: 2,
    borderRightWidth: 6,
    borderLeftColor: "red",
    borderRightColor: "white",
    borderTopColor: "white",
    borderBottomColor: "white",
    borderLeftWidth: 6,
    borderLeftColor: "white",
  },
});

export default HangmanGame;
