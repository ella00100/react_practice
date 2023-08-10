import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, 
    StyleSheet, Dimensions } from "react-native";
import Pictato from "../assets/pictato.png";

const WIDTH = Dimensions.get("window").width;

const Main = () => {
    const [count, setCount] = useState(0);
    return (
        <View style={styles.container}>
            <Text>test</Text>
            <View style={styles.imageContainer}>
            <Image source={Pictato} style={styles.image} />
            </View>

            <View style={styles.buttonContainer}>
            <TouchableOpacity
                onPress={() => setCount((count) => count + 1)}
                style={styles.button}
            >
            <Text style={styles.buttonText}>count is {count}</Text>
            </TouchableOpacity>
            </View>
        </View>


    );
};

const styles = StyleSheet.create({
    container: {
        width: WIDTH,
        backgroundColor: "white",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    imageContainer: {
        flex: 0.5,
        width: WIDTH - 100,
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
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
