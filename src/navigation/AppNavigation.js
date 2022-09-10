import {NavigationContainer} from '@react-navigation/native';
import {navigationRef, isMountedRef} from './index';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import Routes from './Routes';

//screen
import SplashView from '../views/SplashView';
import PersonalInfo from '../views/personal_info';
import Home from '../views/home';
import AddPost from '../views/add_post';

export default function RootNavigation() {
  useEffect(() => {
    isMountedRef.current = true;
    return () => (isMountedRef.current = false);
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        headerMode="none"
        initialRouteName={Routes.SPLASH_SCREEN}>
        <Stack.Screen name={Routes.SPLASH_SCREEN} component={SplashView} />
        <Stack.Screen name={Routes.PERSONAL_INFO} component={PersonalInfo} />
        <Stack.Screen name={Routes.HOME_SCREEN} component={Home} />
        <Stack.Screen name={Routes.ADD_POST_SCREEN} component={AddPost} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();
