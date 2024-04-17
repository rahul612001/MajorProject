import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Board from "../Games/Board";
import { AntDesign } from '@expo/vector-icons';
import GameHeader from './GameHeader';

const TicTacToeScreen = () => {
  const [board, setBoard] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ]);
  const [playerNames, setPlayerNames] = useState({
    X: '',
    O: '',
  });
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWinner] = useState('');

  const handlePress = (row, col) => {
    if (board[row][col] === '' && !winner) {
      const newBoard = [...board];
      newBoard[row][col] = currentPlayer;
      setBoard(newBoard);
      checkWinner(newBoard);
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }
  };

  const checkWinner = (board) => {
    const lines = [
      [board[0][0], board[0][1], board[0][2]],
      [board[1][0], board[1][1], board[1][2]],
      [board[2][0], board[2][1], board[2][2]],
      [board[0][0], board[1][0], board[2][0]],
      [board[0][1], board[1][1], board[2][1]],
      [board[0][2], board[1][2], board[2][2]],
      [board[0][0], board[1][1], board[2][2]],
      [board[0][2], board[1][1], board[2][0]],
    ];

    for (let line of lines) {
      const [a, b, c] = line;
      if (a !== '' && a === b && a === c) {
        setWinner(a);
        return;
      }
    }

    if (isBoardFull(board)) {
      setWinner('Tie');
    }
  };

  const isBoardFull = (board) => {
    for (let row of board) {
      for (let cell of row) {
        if (cell === '') {
          return false;
        }
      }
    }
    return true;
  };

  const resetGame = () => {
    setBoard([
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ]);
    setCurrentPlayer('X');
    setWinner('');
    setPlayerNames({ X: '', O: '' }); // Reset player names
  };

  return (
    <View style={styles.container}>
      <GameHeader />
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter Player X's Name"
            value={playerNames.X}
            onChangeText={(text) => setPlayerNames({ ...playerNames, X: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter Player O's Name"
            value={playerNames.O}
            onChangeText={(text) => setPlayerNames({ ...playerNames, O: text })}
          />
          <Text style={styles.playerTurn}>Current Player: {playerNames[currentPlayer]}</Text> 
          {winner !== '' && (
            <Text style={styles.result}>
              {winner === 'Tie' ? "It's a tie!" : `${playerNames[winner]} wins!`}
            </Text>
          )}
          <Board board={board} onPress={handlePress} />
          <TouchableOpacity style={styles.button} onPress={resetGame}>
            <Text style={styles.buttonText}>Reset Game</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:16,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30,
    marginTop:-10
  },
  inputContainer: {
    alignItems: 'center',
  },
  input: {
    width: 300,
    height: 50,
    borderColor: 'gray',
    borderWidth: 2,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  playerTurn: {
    fontSize: 24,
    marginBottom: 10,
  },
  result: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    marginTop: 20,
    padding: 16,
    backgroundColor: '#3F4E6B',
    borderRadius: 20,
    width: 280,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default TicTacToeScreen;
