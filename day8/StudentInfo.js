import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const StudentInfo =({fullName, position, description, profileImage}) => {
    return(
        <View>
            <Image src="https://search.brave.com/images?q=jona" style={styles.profileImage} />
            <Text style={styles.name}>{fullName}</Text>
            <Text style={styles.position}>{position}</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    infoContainer: {
      alignItems: 'center',
      marginBottom: 20,
    },
    profileImage: {
      width: 100,
      height: 100,
      borderRadius: 50,
      marginBottom: 10,
    },
    name: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    position: {
      fontSize: 16,
      color: 'gray',
    },
    description: {
      textAlign: 'center',
      marginTop: 5,
    },
  });
  
export default StudentInfo;