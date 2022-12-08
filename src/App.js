import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import { UserContext, createFetchUserProfile } from "./context/UserContext";
import WelcomePage from './screens/WelcomePage';
import PregnantSurvey1 from './screens/PregnantSurvey1';
import PregnantSurvey2 from './screens/PregnantSurvey2';
import PregnantSurvey3 from './screens/PregnantSurvey3';
import AppointmentScreen from './screens/AppointmentScreen';
import RelatedWords from './screens/relatedWordsScreen';
import RiskFetal from './screens/riskFetal';
import HealthCareProviders from './screens/healthcareProviders';

import UserDash from './screens/UserDash';
import WeightGainBP from './screens/WeightGainBP';

import FetalScreen from './screens/FetalScreen';

import { firebase } from './firebase'
import ExplorePage from './screens/ExplorePage';



const Stack = createNativeStackNavigator();

export default function App() {
  const [userProfile, setUserProfile] = useState(null);
  const refetchUserProfile = createFetchUserProfile(setUserProfile)

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        refetchUserProfile()
      }
      else{
        setUserProfile(null);
      }
    })
    return unsubscribe
  }, []);

  return (
    <NavigationContainer>
      <UserContext.Provider value={{ userProfile, refetchUserProfile }}>
        <Stack.Navigator>
          <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="Welcome" component={WelcomePage} options={{ headerShown: false }}/>
          {/* <Stack.Screen name="Dashboard" component={Dashboard} /> */}
          <Stack.Screen options={{ headerShown: false }} name="Pregnant Survey1" component={PregnantSurvey1}/>
          <Stack.Screen options={{ headerShown: false }} name="Pregnant Survey2" component={PregnantSurvey2}/>
          <Stack.Screen options={{ headerShown: false }} name="Pregnant Survey3" component={PregnantSurvey3}/>
          <Stack.Screen options={{ headerShown: false }} name="Dashboard" component={UserDash} />
          <Stack.Screen options={{ headerShown: false }} name="Summary" component={WeightGainBP}/>
          <Stack.Screen options={{ headerShown: false }} name="Fetal Screen" component={FetalScreen}/>
          <Stack.Screen name="Appointment" component={AppointmentScreen}/>
          <Stack.Screen name="Explore" component={ExplorePage} options={{ headerShown: false }}/>
          {/* <Stack.Screen options={{ headerShown: false }} name="Appointment" component={AppointmentScreen}/> */}
          <Stack.Screen name="related words screen" component={RelatedWords} options={{ headerShown: false }}/>
          <Stack.Screen name="Risk of fetal" component={RiskFetal} options={{ headerShown: false }}/>
          <Stack.Screen name="Health care providers" component={HealthCareProviders} options={{ headerShown: false }}/>
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