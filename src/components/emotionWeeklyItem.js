import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function EmotionWeeklyItem(props) {
  const containerStyle = [
    styles.emotionContainer,
    { backgroundColor: props.color },
    props.color === "#FFFFFF" && styles.borderStyle,
  ];

  return (
    <View style={containerStyle}>
      <Text style={styles.emotionText}>{props.number}</Text>
      <Text style={styles.emotionText}>{props.day}</Text>
      {props.icon}
    </View>
  );
}

const styles = StyleSheet.create({
  emotionContainer: {
    width: 50,
    height: 94,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 16,
    paddingTop: 8,
    marginRight: 10,
  },
  emotionText: {
    color: "#0B1215",
    fontSize: 14,
    fontWeight: "400",
  },
  borderStyle: {
    borderColor: "#0B1215",
    borderWidth: 1,
    borderStyle: "solid",
  },
});
