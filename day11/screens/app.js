import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <Image
          style={styles.profileImage}
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Imran_Khan_head.jpg' }}
        />
        <Text style={styles.name}>Elaine Alvarez</Text>
      </View>

      <ScrollView contentContainerStyle={styles.detailsContainer}>
        <View style={styles.detailBox}>
          <MaterialIcons name="email" size={24} color="#00ACC1" />
          <View style={styles.detailText}>
            <Text style={styles.label}>Email</Text>
            <Text style={styles.value}>salmanbutt@gmail.com</Text>
          </View>
        </View>

        <View style={styles.detailBox}>
          <FontAwesome5 name="graduation-cap" size={24} color="#00ACC1" />
          <View style={styles.detailText}>
            <Text style={styles.label}>Graduation Date</Text>
            <Text style={styles.value}>Dec 2018</Text>
          </View>
        </View>

        <View style={styles.detailBox}>
          <FontAwesome5 name="user-graduate" size={24} color="#00ACC1" />
          <View style={styles.detailText}>
            <Text style={styles.label}>Degrees</Text>
            <Text style={styles.value}>Bachelors</Text>
            <Text style={styles.value}>Masters</Text>
            <Text style={styles.value}>Post Graduate</Text>
            <Text style={styles.value}>PHD</Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.footerItem}>HomeScreen</Text>
        <Text style={styles.footerItem}>Settings</Text>
        <Text style={[styles.footerItem, styles.activeFooter]}>StudentsProfile</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    alignItems: 'center',
    backgroundColor: '#00ACC1',
    paddingVertical: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    marginTop: 15,
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
  },
  detailsContainer: {
    padding: 20,
  },
  detailBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  detailText: {
    marginLeft: 15,
  },
  label: {
    color: '#00ACC1',
    fontWeight: '600',
    fontSize: 16,
  },
  value: {
    fontSize: 16,
    marginTop: 5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  footerItem: {
    color: '#555',
    fontSize: 16,
  },
  activeFooter: {
    color: '#00ACC1',
    fontWeight: 'bold',
  },
});
