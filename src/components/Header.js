import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  NativeModules,
  Platform,
  StatusBar,
} from 'react-native';
import {primaryColor, colorffffff} from '../constants/colors';

export default function Header({title}) {
  const [h, setH] = useState(0);
  useEffect(() => {
    const {StatusBarManager} = NativeModules;
    setH(StatusBarManager.HEIGHT);
  }, []);
  return (
    <View style={heighNavi(h).fullView}>
      <StatusBar barStyle={'light-content'} backgroundColor="black" />
      {/* STATUS BAR */}
      {Platform.OS === 'ios' && <View style={[styles.header, {height: h}]} />}
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 60,
    backgroundColor: primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: '700',
    color: colorffffff,
  },
  header: {
    backgroundColor: primaryColor,
  },
});

const heighNavi = h =>
  StyleSheet.create({
    fullView: {
      width: '100%',
      height: Platform.OS === 'android' ? 40 + h : 60 + h,
    },
  });
