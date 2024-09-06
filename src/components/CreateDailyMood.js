import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import SvgDailyMood from "./images/DailyMood";
import { useNavigation } from "@react-navigation/native";
const { height, width } = Dimensions.get("window");
export default function CreateDailyMood() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.dailyMoodImage}>
        <SvgDailyMood />
      </View>
      <Text style={styles.title}>Günlük ruh halinizi yazın.</Text>
      <Text style={styles.text}>
        Bugünkü ruh halinizi kaydedin ve kendinizi daha iyi anlamaya başlayın.
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate("SelectMoodScreen")}>
        <Text style={styles.button}>Nasıl Hissediyorsun?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width - 48,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#E1EFFD",
    borderRadius: 20,
    marginHorizontal: 24,
    paddingHorizontal: 14,
    paddingVertical: 16,
    marginVertical: 30,
    position: "relative",
  },
  dailyMoodImage: {
    position: "absolute",
    right: 24,
    bottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 8,
  },
  text: {
    color: "black",
    width: 240,
    fontSize: 16,
    fontWeight: "300",
    marginBottom: 14,
  },
  button: {
    padding: 12,
    backgroundColor: "#0A6EBD",
    borderRadius: 30,
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 16,
    textAlign: "center",
    width: 200,
  },
});
