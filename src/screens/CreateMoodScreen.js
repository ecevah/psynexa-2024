import {
  KeyboardAvoidingView,
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

const MOOD_LABELS = {
  happy: "Çok Mutlu",
  normal: "Mutlu",
  sad: "Üzgün",
  surprised: "Stresli",
  angry: "Kızgın",
};

export default function CreateMoodScreen({ route }) {
  const navigation = useNavigation();
  const { mood } = route.params;
  const [text, setText] = useState("");

  const selectedEmotion = EMOTION[mood.toLowerCase()] || EMOTION.default;
  const moodLabel = MOOD_LABELS[mood.toLowerCase()] || "Belirsiz";

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
        style={[styles.moodIcon, { backgroundColor: selectedEmotion.color }]}
      >
        {selectedEmotion.item}
        <Text style={styles.moodText}>{moodLabel}</Text>
      </View>

      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="Düşüncelerinizi yazın.."
        multiline={true}
      />
      <View style={{ height: 330 }}></View>
      {text === "" ? null : (
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.buttonText}>Kaydet</Text>
        </TouchableOpacity>
      )}
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
    width: 140,
    marginBottom: 20,
  },
  moodText: {
    fontSize: 14,
    fontWeight: "400",
    marginLeft: 6,
    textTransform: "capitalize",
    lineHeight: 14,
  },
  input: {
    height: 250,
    padding: 10,
    fontSize: 16,
    marginHorizontal: 24,
    marginTop: 20,
    marginBottom: 20,
    textAlignVertical: "top",
  },
  button: {
    height: 50,
    backgroundColor: "#0A6EBD",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    marginHorizontal: 20,
  },
  buttonText: {
    fontSize: 18,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});
