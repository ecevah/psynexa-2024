import React, { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import SvgPlusIcon from "../components/icons/PlusIcon";
import { useNavigation } from "@react-navigation/native";
import { EMOTION } from "../constants/emotion_constant";
const { width } = Dimensions.get("window");

export default function SelectMoodScreen() {
  const navigation = useNavigation();
  const [selectedMood, setSelectedMood] = useState(null); // State to track selected mood

  const handleSelectMood = (mood) => {
    setSelectedMood(mood); // Update selected mood
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <View style={styles.backButton}>
            <SvgPlusIcon />
          </View>
        </TouchableOpacity>
        <Text style={styles.headerText}>Ruh Halinizi Seçin</Text>
        <View style={{ width: 48, height: 48 }} />
      </View>

      <View
        style={{
          height: "85%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <View style={styles.content}>
          {/* Happy Mood */}
          <TouchableOpacity
            style={[
              styles.itemContainer,
              {
                backgroundColor: EMOTION.happy.color,
                borderWidth: selectedMood === "happy" ? 1 : 0,
                borderColor: selectedMood === "happy" ? "#000" : "transparent",
              },
            ]}
            onPress={() => handleSelectMood("happy")}
          >
            {EMOTION.happy.item}
            <Text style={styles.itemText}>Çok Mutlu</Text>
          </TouchableOpacity>

          {/* Normal Mood */}
          <TouchableOpacity
            style={[
              styles.itemContainer,
              {
                backgroundColor: EMOTION.normal.color,
                borderWidth: selectedMood === "normal" ? 1 : 0,
                borderColor: selectedMood === "normal" ? "#000" : "transparent",
              },
            ]}
            onPress={() => handleSelectMood("normal")}
          >
            {EMOTION.normal.item}
            <Text style={styles.itemText}>Mutlu</Text>
          </TouchableOpacity>

          {/* Sad Mood */}
          <TouchableOpacity
            style={[
              styles.itemContainer,
              {
                backgroundColor: EMOTION.sad.color,
                borderWidth: selectedMood === "sad" ? 1 : 0,
                borderColor: selectedMood === "sad" ? "#000" : "transparent",
              },
            ]}
            onPress={() => handleSelectMood("sad")}
          >
            {EMOTION.sad.item}
            <Text style={styles.itemText}>Üzgün</Text>
          </TouchableOpacity>

          {/* Surprised Mood */}
          <TouchableOpacity
            style={[
              styles.itemContainer,
              {
                backgroundColor: EMOTION.suprised.color,
                borderWidth: selectedMood === "suprised" ? 1 : 0,
                borderColor:
                  selectedMood === "suprised" ? "#000" : "transparent",
              },
            ]}
            onPress={() => handleSelectMood("suprised")}
          >
            {EMOTION.suprised.item}
            <Text style={styles.itemText}>Stresli</Text>
          </TouchableOpacity>

          {/* Angry Mood */}
          <TouchableOpacity
            style={[
              styles.itemContainer,
              {
                backgroundColor: EMOTION.angry.color,
                borderWidth: selectedMood === "angry" ? 1 : 0,
                borderColor: selectedMood === "angry" ? "#000" : "transparent",
              },
            ]}
            onPress={() => handleSelectMood("angry")}
          >
            {EMOTION.angry.item}
            <Text style={styles.itemText}>Sinirli</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate("CreateMoodScreen", { mood: selectedMood })
          }
        >
          <Text style={styles.buttonText}>Devam Et</Text>
        </TouchableOpacity>
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
  itemContainer: {
    marginVertical: 5,
    paddingHorizontal: 12,
    paddingVertical: 8,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 15,
  },
  itemText: {
    fontSize: 17,
    fontWeight: "500",
    color: "#000000",
    lineHeight: 18,
    marginLeft: 10,
  },
  button: {
    width: width - 48,
    marginHorizontal: 24,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
    backgroundColor: "#0A6EBD",
    borderRadius: 50,
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
  },
});
