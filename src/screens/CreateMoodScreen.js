import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import SvgPlusIcon from "../components/icons/PlusIcon";
import { useNavigation } from "@react-navigation/native";
import { EMOTION } from "../constants/emotion_constant";

export default function CreateMoodScreen({ route }) {
  const navigation = useNavigation();
  const { mood } = route.params;
  const [text, setText] = useState("");
  const selectedEmotion = Object.values(EMOTION).find(
    (emotion) => emotion.name === mood.toLowerCase()
  );

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

      {/* Display the selected mood icon and name */}
      {selectedEmotion ? (
        <View
          style={[styles.moodIcon, { backgroundColor: selectedEmotion.color }]}
        >
          {selectedEmotion.item}
          <Text style={styles.moodText}>{mood}</Text>
        </View>
      ) : (
        <Text style={styles.errorText}>Geçersiz ruh hali seçimi</Text>
      )}
      <TextInput
        style={[styles.input, { height: "80%", backgroundColor: "red" }]}
        value={text}
        onChangeText={setText}
        placeholder="Mesajınızı yazın"
        multiline={true}
      />
      <Text>{mood}</Text>
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
  moodIcon: {
    paddingHorizontal: 8,
    borderRadius: 30,
    display: "flex",
    flexDirection: "row",
    marginLeft: 24,
    alignItems: "center",
    width: 120,
  },
  moodText: {
    fontSize: 14,
    fontWeight: "400",
    marginLeft: 6,
    textTransform: "capitalize",
    lineHeight: 14,
  },
  errorText: {
    fontSize: 16,
    color: "red",
    textAlign: "center",
    marginTop: 20,
  },
});
