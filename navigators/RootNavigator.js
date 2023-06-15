import * as React from 'react';
import {View,StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import SubscribeScreen from '../screens/SubscribeScreen';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
   <View style={styles.container}>
        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{ headerStyle: { justifyContent: 'Center' } }}>
          <Stack.Screen name="Welcome" component={WelcomeScreen}  />
          <Stack.Screen name="Subscribe" component={SubscribeScreen} options={{title:'Subscribe'}} />
        </Stack.Navigator>
      </View>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
