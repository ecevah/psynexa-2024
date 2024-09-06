import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import SvgPlusIcon from "../components/icons/PlusIcon";
import { useNavigation } from "@react-navigation/native";
import SvgAngry from "../components/emotions/Angry";
const { width } = Dimensions.get("window");
export default function SelectMoodScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={styles.backButton}>
            <SvgPlusIcon />
          </View>
        </TouchableOpacity>
        <Text style={styles.headerText}>Ruh Halinizi Seçin</Text>
        <View style={{ width: 48, height: 48 }} />
      </View>
      <View style={styles.content}>
        <View style={styles.itemContainer}>
          <SvgAngry />
          <Text style={styles.itemText}>Kötü</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  },
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
    transform: [{ rotate: "45deg" }],
    width: 48,
    height: 48,
    borderWidth: 1,
    borderColor: "#E7E7E7",
    borderRadius: 24,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    width: width - 48,
    paddingHorizontal: 12,
    paddingVertical: 20,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    marginHorizontal: 24,
    elevation: 9, // For Android shadow
    shadowColor: "#9d9d9d", // For iOS shadow
    shadowOffset: { width: 0, height: 1 }, // Offset for iOS
    shadowOpacity: 0.15, // Opacity for iOS
    shadowRadius: 9, // Blur radius for iOS
  },
});
