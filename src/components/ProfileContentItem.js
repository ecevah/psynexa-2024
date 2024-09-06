import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SvgRightIosArrow from "./icons/RightIosArrow";

export default function ProfileContentItem({ icon, isSwitch = false, title }) {
  return (
    <View style={styles.itemContainer}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View style={styles.icon}>{icon}</View>
        <Text
          style={{
            color: "#0B1215",
            fontSize: 17,
            fontWeight: "500",
            marginLeft: 12,
          }}
        >
          {title}
        </Text>
      </View>
      {isSwitch ? (
        <View style={styles.switch}>
          <View
            style={{
              width: 28,
              height: 28,
              borderRadius: 14,
              backgroundColor: "white",
            }}
          ></View>
        </View>
      ) : (
        <SvgRightIosArrow />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 12,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(225, 239, 253, 1)",
  },
  switch: {
    width: 64,
    height: 32,
    borderRadius: 16,
    padding: 2,
    backgroundColor: "#0B121533",
  },
});
