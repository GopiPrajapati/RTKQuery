import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import CRUDDemoRTKQuery from '../screens/CRUDDemoRTKQuery';
import {screens} from '../utility/screens';

const Stack = createNativeStackNavigator();

const AuthStack: FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={screens.CRUDDemoRTKQuery}
        component={CRUDDemoRTKQuery}
      />
    </Stack.Navigator>
  );
};
export default AuthStack;

const styles = StyleSheet.create({});
