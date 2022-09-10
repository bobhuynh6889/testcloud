import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {primaryColor, colorffffff} from '../constants/colors';

export default function Button({onPress, text, viewStyle}) {
  return (
    <View style={viewStyle}>
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 56,
    width: '100%',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: primaryColor,
    marginTop: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: '700',
    color: colorffffff,
  },
});
