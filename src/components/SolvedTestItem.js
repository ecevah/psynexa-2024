import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { HEALTH_ORANGE } from "../constants/constant";
const { width } = Dimensions.get("window");

export default function SolvedTestItem({ title, date, photo }) {
  return (
    <View style={styles.container}>
      <View style={{ position: "relative", width: 120, height: 112 }}>
        <Image source={photo} style={styles.image} />
        <Text style={styles.imageText}>Tamamlandı</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>Değerlendirme Testi</Text>
        <View style={styles.buttonContainer}>
          <Text style={styles.text}>{date}</Text>
          <View style={styles.arrowItem}>
            <AntDesign
              name="arrowright"
              size={24}
              color="black"
              style={{ transform: [{ rotate: "-45deg" }] }}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width - 48,
    marginHorizontal: 24,
    backgroundColor: "#FFFFFF",
    shadowColor: "#9d9d9d",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5,
    borderRadius: 24,
    padding: 12,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    width: 120,
    height: 112,
    borderRadius: 12,
    resizeMode: "cover",
  },
  imageText: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "600",
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: "rgba(35, 38, 47, 0.30)",
    borderRadius: 15,
    position: "absolute",
    bottom: 5,
    left: 5,
  },
  content: {
    width: width - 200,
  },
  title: { color: "#0B1215", fontSize: 16, fontWeight: "700" },
  text: { color: "#0B1215", fontSize: 14, fontWeight: "400" },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 8,
  },
  arrowItem: {
    width: 32,
    height: 32,
    backgroundColor: "rgba(189, 223, 250, 1)",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});
