import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function EmotionMonthlyItem(props) {
  return (
    <View style={styles.emotionContainer}>
      {props.icon}
      <Text style={styles.emotionText}>{props.number}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  emotionContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  emotionText: {
    color: "#0B1215",
    fontSize: 14,
    fontWeight: "400",
    marginTop: -8,
    marginBottom: 4,
  },
});
