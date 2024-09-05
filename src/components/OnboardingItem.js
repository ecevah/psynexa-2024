import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
} from "react-native";

export default function OnboardingItem({ item }) {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, { width }]}>
      <View
        style={{
          height: "100%",
          width: "100%",
          paddingHorizontal: 24,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flex: 0.4,
            paddingTop: 80,
            textAlign: "start",
            display: "flex",
            alignContent: "flex-start",
            justifyContent: "flex-start",
            width: "100%",
          }}
        >
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
        {item.image}
        <View />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 0.6,
    justifyContent: "center",
  },
  title: {
    fontWeight: "700",
    fontSize: 29,
    marginBottom: 10,
    color: "#FFFFFF",
  },
  description: {
    fontWeight: "400",
    color: "#FFFFFF",
    fontSize: 16,
    lineHeight: 19.2,
  },
});
