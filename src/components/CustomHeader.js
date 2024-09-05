import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import SvgRightIosArrow from "./icons/RightIosArrow";
import { useNavigation } from "@react-navigation/native";

const CustomHeader = ({ text }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View style={styles.backButton}>
          <SvgRightIosArrow />
        </View>
      </TouchableOpacity>
      <Text style={styles.headerText}>{text}</Text>
      <View style={{ width: 48, height: 48 }} />
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 55,
    height: 114,
    paddingBottom: 10,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  headerText: {
    color: "#000000",
    fontSize: 20,
    fontWeight: "bold",
  },
  backButton: {
    display: "flex",
    transform: [{ rotate: "180deg" }],
    width: 48,
    height: 48,
    borderWidth: 1,
    borderColor: "#E7E7E7",
    borderRadius: 24,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
});
