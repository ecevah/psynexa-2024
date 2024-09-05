import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SvgRightIosArrow from "./icons/RightIosArrow";

const SeeAllButton = () => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "#00000080", fontSize: 14, fontWeight: "300" }}>
        Tümünü Gör
      </Text>
      <SvgRightIosArrow width={16} height={16} color="#00000080" />
    </View>
  );
};

export default SeeAllButton;

const styles = StyleSheet.create({});
