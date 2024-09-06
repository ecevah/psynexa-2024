import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import SvgNexaMiniLogoWhite from "./images/NexaMiniLogoWhite";
import { useNavigation } from "@react-navigation/native";

export default function CenterButton(props) {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const startChat = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://88.223.92.105:8000/start_chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ client_id: "100" }),
      });

      const data = await response.json();

      if (response.status === 200) {
        setLoading(false);
        navigation.navigate("ChatBotScreen", { session_id: data.session_id });
      } else {
        setLoading(false);
        // Handle error (you might want to show an error message to the user)
      }
    } catch (error) {
      setLoading(false);
      // Handle error (you might want to show an error message to the user)
    }
  };

  return (
    <TouchableOpacity
      style={styles.centerButton}
      onPress={startChat}
      disabled={loading}
    >
      {loading ? (
        <ActivityIndicator size="small" color="#FFFFFF" />
      ) : (
        <SvgNexaMiniLogoWhite />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  centerButton: {
    width: 48,
    height: 48,
    borderRadius: 35,
    backgroundColor: "#0A6EBD",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 3,
  },
});
