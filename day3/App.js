import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ExerciseScreen } from "./components/ExerciseScreen.js"; 

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.screen name="Home" component={ExerciseScreen}></Stack.screen>
      </Stack.Navigator>
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
