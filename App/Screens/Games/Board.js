// components/Board.js
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import animationO from '../Games/animationO.json'; // Import 'X' animation
import animationX from '../Games/animationX.json'; // Import 'O' animation

const Board = ({ board, onPress }) => {
  const renderCell = (row, col) => {
    const cellValue = board[row][col];

    return (
      <TouchableOpacity
        key={`${row}-${col}`}
        style={styles.cell}
        onPress={() => onPress(row, col)}
        disabled={cellValue !== ''}
      >
        {cellValue === 'X' && (
          <LottieView
            source={animationX}
            autoPlay
            loop={true}
            style={styles.animationX}
          />
        )}
        {cellValue === 'O' && (
          <LottieView
            source={animationO}
            autoPlay
            loop={true}
            style={styles.animationO}
          />
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.board}>
      {board.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((cell, colIndex) => renderCell(rowIndex, colIndex))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  board: {
   
    borderColor: 'black',
    margin: 10,
    marginTop:-5,
    borderRadius:16,
    padding:16,
    backgroundColor:"#58CBC6"
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
   // borderWidth: 1,
    borderColor: 'black',
    borderRadius:16,
    margin:5,
    backgroundColor:"white"
    
    
  },
  animationX: {
    width: 80,
    height: 80,
    
  },
  animationO:{
    width: 120,
    height: 120,
  }
});

export default Board;
