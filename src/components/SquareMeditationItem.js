import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { FOREST } from "../constants/constant";
import SvgPlayIcon from "./tabs/PlayIcon";
import { useNavigation } from "@react-navigation/native";

export default function SquareMeditationItem({ photo, title, author, id }) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={photo} style={styles.image} />
        <TouchableOpacity
          onPress={() => navigation.navigate("ListeningScreen", { id: id })}
          style={{
            position: "absolute",
            top: 49,
            left: 61.5,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#FFFFFF",
            borderRadius: 21,
            width: 42,
            height: 42,
          }}
        >
          <SvgPlayIcon color="rgba(11, 18, 21, 1)" width={24} height={24} />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.author}>{author}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    width: 165,
  },
  imageContainer: {
    width: 165,
    height: 140,
    borderRadius: 20,
    overflow: "hidden",
    position: "relative",
  },
  image: {
    width: 165,
    height: 140,
    resizeMode: "cover",
  },
  title: {
    color: "rgba(11, 18, 21, 1)",
    fontSize: 16,
    fontWeight: "700",
    marginTop: 8,
  },
  text: {
    color: "rgba(11, 18, 21, 1)",
    fontSize: 14,
    fontWeight: "400",
    marginTop: 8,
  },
});
