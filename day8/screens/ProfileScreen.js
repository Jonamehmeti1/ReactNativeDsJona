import React from 'react';
import StudentInfo from '../StudentInfo';
import Projects from '../Projects';
import { View , StyleSheet } from 'react-native-web';

const ProfileScreen = () => {
    const studentInfo = {
        fullName:"Jona Mehmeti",
        position:"Data Engineer",
        description:"Jona is very passionant about data",
        profileImage : "https://search.brave.com/images?q=jona",
    };

    const projectImage = "https://search.brave.com/images?q=jona";

    return(
       <View style={styles.container}>
        <StudentInfo {...studentInfo}/>
        <Projects image={projectImage}/>
       </View>
    );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
  });
export default ProfileScreen;