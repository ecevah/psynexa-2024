import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import SvgRafiki from "./images/Rafiki";
import SvgDepression from "./images/Depression";
import { useNavigation } from "@react-navigation/native";

export default function TestCardItem({ color = 0, title, id }) {
  const navigation = useNavigation();
  const COLORS = ["#C6EEFF", "#D3FFC6", "#FACA2C", "#FF7A7A", "#C179FF"];
  const colorString = COLORS[color % 5];
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("TestDetailScreen", { id: id })}
    >
      <View style={[styles.container, { backgroundColor: colorString }]}>
        <View style={styles.icon}>
          <SvgDepression />
        </View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>Değerlendirme Testi</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    width: 163,
    height: 152,
    borderRadius: 20,
    elevation: 6,
    shadowColor: "#9d9d9d",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },
  icon: {
    width: 62,
    height: 62,
    borderRadius: 31,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "700",
    marginTop: 8,
  },
  text: {
    color: "#000000",
    fontSize: 14,
    fontWeight: "400",
  },
});
