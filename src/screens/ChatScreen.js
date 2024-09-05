import React, { useRef, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Image,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import SvgRightIosArrow from "../components/icons/RightIosArrow";
import SvgMore from "../components/icons/More";
import SvgPaperPlane from "../components/icons/PaperPlane";
import { PSYCHOLOGIST } from "../constants/constant";

export default function ChatScreen() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [loadings, setLoadings] = useState(false);
  const scrollViewRef = useRef();
  const navigation = useNavigation();

  function getCurrentTime() {
    const now = new Date();
    now.setHours(now.getHours() + 3);
    let hours = now.getHours().toString();
    let minutes = now.getMinutes().toString();

    hours = hours.padStart(2, "0");
    minutes = minutes.padStart(2, "0");

    return `${hours}:${minutes}`;
  }

  const sendMessage = () => {
    if (text) {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          text,
          fromUser: true,
          time: getCurrentTime(),
        },
      ]);
      setText("");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={styles.backButton}>
            <SvgRightIosArrow />
          </View>
        </TouchableOpacity>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image source={PSYCHOLOGIST} width={48} height={48} />
          <Text style={styles.headerText}>Psk. Deniz Kayseri</Text>
        </View>
        <TouchableOpacity>
          <View style={styles.backButton}>
            <SvgMore style={styles.backButton} />
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView
        style={styles.messageContainer}
        ref={scrollViewRef}
        onContentSizeChange={() =>
          scrollViewRef.current.scrollToEnd({ animated: true })
        }
        showsVerticalScrollIndicator={false}
      >
        {messages.map((message) => (
          <View key={message.id} style={{ marginBottom: 10 }}>
            <View
              style={[
                styles.messageBubble,
                message.fromUser ? styles.userMessage : styles.botMessage,
              ]}
            >
              <Text style={styles.messageText}>{message.text}</Text>
            </View>
            <Text
              style={[
                styles.messageTime,
                message.fromUser
                  ? styles.userMessageTime
                  : styles.botMessageTime,
              ]}
            >
              {message.time}
            </Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <View style={{ position: "relative", width: "100%", height: 50 }}>
          <TextInput
            style={styles.input}
            value={text}
            onChangeText={setText}
            placeholder="Mesajınızı yazın"
          />
          {loadings ? (
            <View style={styles.sendButton}>
              <ActivityIndicator size="small" color="#000000" />
            </View>
          ) : (
            <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
              <SvgPaperPlane />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    paddingHorizontal: 5,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 55,
    height: 114,
    paddingBottom: 10,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  headerText: {
    color: "#000000",
    fontSize: 20,
    fontWeight: "bold",
  },
  messageContainer: {
    flex: 1,
    padding: 10,
  },
  messageBubble: {
    padding: 12,
    maxWidth: "80%",
  },
  userMessage: {
    backgroundColor: "#FFFFFF",
    marginLeft: "20%",
    alignSelf: "flex-end",
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 2,
  },
  botMessage: {
    backgroundColor: "#E0F1FE",
    alignSelf: "flex-start",
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 12,
  },
  messageText: {
    color: "#0B1215",
    fontSize: 16,
    fontWeight: "400",
  },
  inputContainer: {
    display: "flex",
    width: "100%",
    height: 75,
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
  },
  input: {
    flex: 1,
    height: 65,
    width: "100%",
    borderRadius: 25,
    paddingHorizontal: 15,
    backgroundColor: "#FFFFFF",
  },
  sendButton: {
    width: 42,
    height: 42,
    backgroundColor: "#E0F1FE",
    borderRadius: 20,
    position: "absolute",
    right: 6,
    top: 4,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  messageTime: {
    color: "#0B121580",
    fontSize: 14,
    fontWeight: "300",
  },
  userMessageTime: {
    marginLeft: "auto",
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
  voiceButton: {
    height: 50,
    width: 50,
    backgroundColor: "#E0F1FE",
    borderRadius: 23,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
});
