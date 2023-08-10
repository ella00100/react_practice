import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import Pictato from "../assets/pictato.png";

const deviceWidth = Dimensions.get("window").width;

const Main = () => {
    const [count, setCount] = useState(0);

    return (
        <View style={styles.container}>
            <View style={styles.card}>
            <Image source={Pictato} style={styles.image} />
            <View style={styles.cardContent}>
            <Text style={styles.title}>Pictato
            <Text style={styles.subtitle}> Playground</Text>
            </Text>
        <Text>
            React playground for Pictato
            {"\n"}
            with Amazon Web Services
        </Text>
        <View style={styles.buttonContainer}>
            <TouchableOpacity
                onPress={() => setCount((count) => count + 1)}
                style={styles.button}
            >
            <Text style={styles.buttonText}>count is {count}</Text>
            </TouchableOpacity>
            </View>
        </View>
        </View>
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    card: {
        width: deviceWidth - 40,
        backgroundColor: "#f0f0f0",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
        borderRadius: 10,
        overflow: "hidden",
        },
    image: {
        width: "100%",
        height: "50%",
    },
    cardContent: {
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
    },
    subtitle: {
        color: "#888",
    },
    buttonContainer: {
        marginTop: 10,
    },
    button: {
        backgroundColor: "#007bff",
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: "#fff",
    },
});

export default Main;
