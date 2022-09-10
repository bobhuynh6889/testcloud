import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {primaryColor, colordcdde1} from '../constants/colors';

export default function TextInputCustom({
  title,
  placeholderText,
  onPress,
  value,
  onChangeTxt,
  multiline,
  viewStyle,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        placeholder={placeholderText}
        style={[styles.textInput, viewStyle]}
        value={value}
        onChangeText={text => onChangeTxt(text)}
        autoCapitalize={'none'}
        multiline={multiline}
      />
      {onPress && (
        <TouchableOpacity style={styles.fullView} onPress={onPress} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  textInput: {
    height: 48,
    backgroundColor: colordcdde1,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  title: {
    color: primaryColor,
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 6,
  },
  fullView: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});
