import React, {useEffect} from 'react';
import {StyleSheet, ImageBackground, StatusBar, Image} from 'react-native';
import img from '../../assets/images/splashview/index';
import Routes from '../navigation/Routes';
import NavigationService from '../navigation';

export default function SplashView() {
  useEffect(() => {
    setTimeout(() => {
      NavigationService.navigateAndReset(Routes.PERSONAL_INFO);
    }, 1000);
  }, []);

  return (
    <ImageBackground style={styles.container} source={img.background}>
      <StatusBar barStyle={'light-content'} backgroundColor="black" />
      <Image source={img.logo} style={styles.logoStyle} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoStyle: {
    height: 200,
    width: 200,
  },
});
