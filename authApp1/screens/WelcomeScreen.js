import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

const Welcome = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const { username } = route.params;

    const handleLogout = () => {
        navigation.navigate("Login");
    };

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: "https://placekitten.com/200/200" }}
                style={styles.avatar}
            />
            <Text style={styles.welcomeText}>
                Welcome back, <Text style={styles.username}>{username}</Text>!
            </Text>

            <TouchableOpacity onPress={handleLogout} style={styles.button}>
                <Text style={styles.buttonText}>Log Out</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f0f8ff",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: "bold",
        marginVertical: 20,
        color: "#333",
        textAlign: "center",
    },
    username: {
        color: "#007AFF",
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    button: {
        marginTop: 30,
        paddingVertical: 10,
        paddingHorizontal: 30,
        backgroundColor: "#007AFF",
        borderRadius: 8,
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "600",
    },
});

export default Welcome;
