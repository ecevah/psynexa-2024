import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import SvgRafiki from "../components/images/Rafiki";
import { useNavigation } from "@react-navigation/native";
const { height, width } = Dimensions.get("window");

export default function TestCompletedScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View></View>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SvgRafiki />
        <Text
          style={{
            fontSize: 20,
            fontWeight: "500",
            textAlign: "center",
            color: "#0B1215",
            marginTop: 40,
          }}
        >
          Tebrikler, testi başarıyla tamamladınız.
        </Text>
      </View>
      <TouchableOpacity
        style={styles.solveTest}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.solveTestText}>Testi Bitir</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  solveTest: {
    width: width - 48,
    marginHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: "#0A6EBD",
    borderRadius: 50,
    marginTop: 20,
    marginBottom: 40,
  },
  solveTestText: {
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "600",
  },
});
