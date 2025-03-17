import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

const Profile = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileContainer}>
        <Image style={styles.avatar} source={{ uri: '' }} />
        <View style={styles.profileDetail}>
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.role}>UI/UX</Text>
          <Text style={styles.description}>John Doe is awesome</Text>
          <TouchableOpacity style={styles.hireButton}>
            <Text style={styles.hireText}>Hire John Doe</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.profileContainer}>
        <Image
          style={styles.projectImage}
          source={{ uri: 'https://ipma.world/app/uploads/2015/09/Dollarphotoclub_65655745-1-1.jpg' }}
        />
        <Image
          style={styles.projectImage}
          source={{ uri: 'https://ipma.world/app/uploads/2015/09/Dollarphotoclub_65655745-1-1.jpg' }}
        />
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  profileContainer: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f9fa',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  profileDetail: {
    alignItems: 'center',
    fontWeight: 'bold',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  role: {
    fontSize: 16,
    color: 'grey',
    marginVertical: 5,
  },
  description: {
    textAlign: 'center',
    fontSize: 14,
    marginBottom: 15,
  },
  hireButton: {
    backgroundColor: '#FFD700',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  hireText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  projectContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  projectImage: {
    width: 150,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
});

export default Profile;