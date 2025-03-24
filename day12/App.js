import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Main from './screens/Main';  // Correct import path

export default function App() {
  return (
    <View style={styles.container}>
      <Main />  {/* Render your Main component */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,  // optional: adds some space from the top
  },
});
