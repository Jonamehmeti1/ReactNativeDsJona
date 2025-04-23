import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import Contact from './screens/Contact';
import AboutUs from './screens/AboutUs';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
        // <NavigationContainer>
        //   <Tab.Navigator>
        //     <Tab.Screen name="Home" component ={Home}/>
        //     <Tab.Screen name="Contact" component ={Contact}/>
        //   </Tab.Navigator>
        // </NavigationContainer>
        <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Contact" component={Contact} />
          <Drawer.Screen name="AboutUs" component={AboutUs} />
        </Drawer.Navigator>
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
