import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import {UserContext } from "./Context";
import WelcomePage from './screens/WelcomePage';
import PregnantSurvey1 from './screens/PregnantSurvey1';
import PregnantSurvey2 from './screens/PregnantSurvey2';
import PregnantSurvey3 from './screens/PregnantSurvey3';
import Dashboard from './screens/Dashboard';

const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <UserContext.Provider value={"hello"}>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Signup" component={SignupScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Welcome" component={WelcomePage}/>
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Pregnant Survey1" component={PregnantSurvey1} options={{title:"Pregnant Survey"}}/>
        <Stack.Screen name="Pregnant Survey2" component={PregnantSurvey2} options={{title:"Pregnant Survey"}}/>
        <Stack.Screen name="Pregnant Survey3" component={PregnantSurvey3} options={{title:"Pregnant Survey"}}/>
        
      </Stack.Navigator>
      </UserContext.Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});