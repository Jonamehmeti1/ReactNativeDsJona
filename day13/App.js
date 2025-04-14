import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import ToDos from './screens/ToDo'; // make sure it's the default export

export default function App() {
  return (
    <View style={styles.container}>
      <ToDos />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
});
