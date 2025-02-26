import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MenuScreen from './screens/MenuScreen';
import { createStackNavigator } from 'react-navigation';
import { createAppContainer } from 'react-navigation-stack';

export default function App() {
  return (
    <View style={styles.container}>
      <MenuScreen> </MenuScreen>
    </View>
  );
}

const navigator = createStackNavigator(
  {
    Menu: MenuScreen
  },
  {
    initialRouteName:"Menu",
    defaultNavigationOptions:{
      tittle:"App"
    }

  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
