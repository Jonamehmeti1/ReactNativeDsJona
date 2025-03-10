import React from "react";
import {View, Text, Image, StyleSheet} from 'react-native';

const Projects = ({image}) => {
    return(
      <View style={styles.projectContainer}>
        <Text style={styles.projectTittle}>Projects</Text>
        <Image src="https://search.brave.com/images?q=jona" style={styles.projectImage}/>
      </View>
    );
};

const styles = StyleSheet.create({
    projectContainer: {
      alignItems: 'center',
      marginTop: 20,
    },
    projectTitle: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    projectImage: {
      width: 200,
      height: 200,
      marginTop: 10,
    },
  });
  

export default Projects;