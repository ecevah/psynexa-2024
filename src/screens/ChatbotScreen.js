import React, { useRef, useState, useEffect } from "react";
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
  Dimensions,
} from "react-native";
import { Audio } from "expo-av";
import { useNavigation } from "@react-navigation/native";
import SvgRightIosArrow from "../components/icons/RightIosArrow";
import SvgMore from "../components/icons/More";
import SvgMicrophone from "../components/icons/Microphone";
import SvgPaperPlane from "../components/icons/PaperPlane";
import SvgPlay from "../components/tabs/PlayIcon";
import SvgPause from "../components/icons/PauseIcon";
import { PSYNEXA_FULL_LOGO_BLUE } from "../constants/constant";
import SvgLogossvg from "../../assets/images/newResult/Logossvg";
import Markdown from "react-native-markdown-display";

const { width } = Dimensions.get("window");

export default function ChatBotScreen({ route }) {
  const { session_id } = route.params;
  const [messages, setMessages] = useState([]);
  const [inputHeight, setInputHeight] = useState(75);
  const [text, setText] = useState("");
  const [loadings, setLoadings] = useState(false);
  const [audioLoadings, setAudioLoadings] = useState(false);
  const [backLoadings, setBackLoadings] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingDuration, setRecordingDuration] = useState(0);
  const scrollViewRef = useRef();
  const navigation = useNavigation();
  const [recording, setRecording] = useState();
  const [currentPlayingIndex, setCurrentPlayingIndex] = useState(null);
  const API_BASE_URL = "http://88.223.92.105:8000";

  const customRecordingOptions = {
    android: {
      extension: ".wav",
      outputFormat: Audio.RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_DEFAULT,
      audioEncoder: Audio.RECORDING_OPTION_ANDROID_AUDIO_ENCODER_DEFAULT,
      sampleRate: 44100,
      numberOfChannels: 2,
      bitRate: 128000,
    },
    ios: {
      extension: ".wav",
      audioQuality: Audio.RECORDING_OPTION_IOS_AUDIO_QUALITY_MAX,
      sampleRate: 44100,
      numberOfChannels: 2,
      bitRate: 128000,
      linearPCMBitDepth: 16,
      linearPCMIsBigEndian: false,
      linearPCMIsFloat: false,
    },
  };

  useEffect(() => {
    let interval;
    if (isRecording) {
      interval = setInterval(() => {
        setRecordingDuration((prevDuration) => prevDuration + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRecording]);

  async function startRecording() {
    try {
      const perm = await Audio.requestPermissionsAsync();
      if (perm.status === "granted") {
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true,
        });
        const { recording } = await Audio.Recording.createAsync(
          customRecordingOptions
        );
        setRecording(recording);
        setIsRecording(true);
        setRecordingDuration(0);
      }
    } catch (err) {
      console.error("Failed to start recording", err);
    }
  }

  async function stopRecording() {
    setAudioLoadings(true);
    try {
      // Stop recording
      setRecording(undefined);
      await recording.stopAndUnloadAsync();
      const { sound, status } = await recording.createNewLoadedSoundAsync();
      let fileUri = await recording.getURI();

      console.log("File URI: ", fileUri);
      console.log("Session ID: ", session_id);

      // Add recorded message to messages list
      const newRecording = {
        id: messages.length + 1,
        text: null,
        sound: sound,
        duration: getDurationFormatted(status.durationMillis),
        file: fileUri,
        isPlaying: false,
        fromUser: true,
        time: getCurrentTime(),
      };
      setMessages([...messages, newRecording]);

      // Prepare form data
      const formData = new FormData();
      formData.append("client_id", "19");
      formData.append("session_id", session_id);
      formData.append("file", {
        uri: fileUri,
        name: "audio.wav",
        type: "audio/wav",
      });

      console.log("FormData prepared");
      setIsRecording(false);

      // Send request to server
      const response = await fetch("http://88.223.92.105:8000/audio_predict", {
        method: "POST",
        body: formData,
      });

      // Handle response
      if (!response.ok) {
        setAudioLoadings(false);
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }

      const data = await response.json();
      const { answer, meditation_status, meditation_id, meditation_text } =
        data;

      // Update messages with server response
      if (meditation_status) {
        setMessages((messages) => [
          ...messages,
          {
            id: messages.length + 1,
            text: meditation_text,
            meditation_id: meditation_id,
            fromUser: false,
            time: getCurrentTime(),
          },
        ]);
      } else {
        setMessages((messages) => [
          ...messages,
          {
            id: messages.length + 1,
            text: answer,
            fromUser: false,
            time: getCurrentTime(),
          },
        ]);
      }
      setAudioLoadings(false);
    } catch (error) {
      setAudioLoadings(false);
      console.error("Error uploading audio:", error.message);

      // Optional: Show an alert to the user for better UX
      alert("Failed to upload audio. Please try again.");
    }
  }

  function getDurationFormatted(milliseconds) {
    const minutes = Math.floor(milliseconds / 1000 / 60);
    const seconds = Math.floor((milliseconds / 1000) % 60);
    return seconds < 10 ? `${minutes}:0${seconds}` : `${minutes}:${seconds}`;
  }

  function getRecordingDurationFormatted(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return remainingSeconds < 10
      ? `${minutes}:0${remainingSeconds}`
      : `${minutes}:${remainingSeconds}`;
  }

  async function handlePlayPause(index) {
    const currentMessage = messages[index];

    if (currentPlayingIndex !== null && currentPlayingIndex !== index) {
      const playingMessage = messages[currentPlayingIndex];
      await playingMessage.sound.pauseAsync();
      playingMessage.isPlaying = false;
    }

    const updatedMessages = [...messages];
    if (currentMessage.isPlaying) {
      await currentMessage.sound.pauseAsync();
      updatedMessages[index].isPlaying = false;
    } else {
      await currentMessage.sound.playFromPositionAsync(0);
      updatedMessages[index].isPlaying = true;
      setCurrentPlayingIndex(index);
    }
    setMessages(updatedMessages);
  }

  function getCurrentTime() {
    const now = new Date();
    now.setHours(now.getHours());
    let hours = now.getHours().toString();
    let minutes = now.getMinutes().toString();

    hours = hours.padStart(2, "0");
    minutes = minutes.padStart(2, "0");

    return `${hours}:${minutes}`;
  }

  const sendMessage = async () => {
    if (text) {
      setLoadings(true);
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
      setInputHeight(75);

      try {
        const formData = new FormData();
        formData.append("client_id", "19");
        formData.append("session_id", session_id);
        formData.append("message", text);

        const response = await fetch("http://88.223.92.105:8000/text_predict", {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        const { answer, meditation_status, meditation_id, meditation_text } =
          data;

        if (meditation_status) {
          setMessages((messages) => [
            ...messages,
            {
              id: messages.length + 1,
              text: meditation_text,
              meditation_id: meditation_id,
              fromUser: false,
              time: getCurrentTime(),
            },
          ]);
        } else {
          setMessages((messages) => [
            ...messages,
            {
              id: messages.length + 1,
              text: answer,
              fromUser: false,
              time: getCurrentTime(),
            },
          ]);
        }
      } catch (error) {
        console.error("Error sending message:", error.message);
      } finally {
        setLoadings(false);
      }
    }
  };

  const endChatAndGoBack = async () => {
    try {
      setBackLoadings(true);
      const response = await fetch("http://88.223.92.105:8000/end_chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          client_id: "19",
          session_id: session_id,
        }),
      });

      if (response.ok) {
        // Show a success alert or toast if necessary
        console.log("Chat ended successfully.");
        navigation.goBack(); // Navigate back after successful POST request
      } else {
        // Handle errors here (e.g., status code not 200)
        console.log("Error", "Failed to end chat. Please try again.");
      }
    } catch (error) {
      // Handle any network errors
      console.log("Error", "Network error. Please try again.");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={endChatAndGoBack}>
          <View style={styles.backButton}>
            {backLoadings ? (
              <ActivityIndicator size="small" color="#000000" />
            ) : (
              <SvgRightIosArrow />
            )}
          </View>
        </TouchableOpacity>
        <Text style={styles.headerText}>NexaBot</Text>
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
        {messages.length > 0 ? null : (
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: 50,
            }}
          >
            <SvgLogossvg />
            <Text
              style={{
                color: "#000000",
                fontSize: 16,
                fontWeight: "500",
                marginTop: 15,
              }}
            >
              Bugün size nasıl yardımcı olabilirim?
            </Text>
          </View>
        )}

        {messages.map((message, index) => (
          <View key={message.id} style={{ marginBottom: 10 }}>
            {message.meditation_id ? (
              <>
                <View
                  style={[
                    styles.messageBubble,
                    message.fromUser
                      ? styles.userMessage
                      : styles.meditationMessage,
                  ]}
                >
                  <Markdown style={styles.meditationText}>
                    {message.text}
                  </Markdown>
                </View>
                <Text
                  style={[
                    styles.messageTime,
                    message.fromUser
                      ? styles.userMessageTime
                      : styles.meditationMessageTime,
                  ]}
                >
                  {message.time}
                </Text>
              </>
            ) : message.text ? (
              <>
                <View
                  style={[
                    styles.messageBubble,
                    message.fromUser ? styles.userMessage : styles.botMessage,
                  ]}
                >
                  <Markdown style={styles.messageText}>{message.text}</Markdown>
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
              </>
            ) : (
              <>
                <View
                  style={[
                    styles.messageBubble,
                    message.fromUser ? styles.userMessage : styles.botMessage,
                    { flexDirection: "row", alignItems: "center" },
                  ]}
                >
                  <TouchableOpacity
                    onPress={() => handlePlayPause(index)}
                    style={styles.playPauseButton}
                  >
                    {message.isPlaying ? (
                      <SvgPause color="#000" />
                    ) : (
                      <SvgPlay color="#000" />
                    )}
                  </TouchableOpacity>
                  <Text style={styles.messageText}>{message.duration}</Text>
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
              </>
            )}
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        {isRecording ? (
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              width: width - 24,
            }}
          >
            <View style={styles.recordingContainer}>
              <Text style={styles.recordingText}>
                {getRecordingDurationFormatted(recordingDuration)}
              </Text>
            </View>
            <TouchableOpacity
              onPress={recording ? stopRecording : startRecording}
            >
              <View
                style={[
                  styles.voiceButton,
                  {
                    backgroundColor: "white",
                    borderWidth: 1,
                    borderColor: "#E7E7E7",
                  },
                ]}
              >
                <View
                  style={{ width: 16, height: 16, backgroundColor: "red" }}
                />
              </View>
            </TouchableOpacity>
          </View>
        ) : (
          <>
            <View
              style={{
                position: "relative",
                width: "100%",
                height: Math.min(Math.max(50, inputHeight), 150),
              }}
            >
              <TextInput
                style={[
                  styles.input,
                  { height: Math.min(Math.max(50, inputHeight), 150) },
                ]}
                value={text}
                onChangeText={setText}
                placeholder="Mesajınızı yazın"
                multiline={true} // allows multiline text input
                onContentSizeChange={(e) =>
                  setInputHeight(e.nativeEvent.contentSize.height)
                }
              />
              {text === "" && !loadings ? (
                audioLoadings ? (
                  <View style={styles.sendButton}>
                    <ActivityIndicator size="small" color="#000000" />
                  </View>
                ) : (
                  <TouchableOpacity
                    style={styles.sendButton}
                    onPress={recording ? stopRecording : startRecording}
                  >
                    <SvgMicrophone />
                  </TouchableOpacity>
                )
              ) : loadings ? (
                <View style={styles.sendButton}>
                  <ActivityIndicator size="small" color="#000000" />
                </View>
              ) : (
                <TouchableOpacity
                  style={styles.sendButton}
                  onPress={sendMessage}
                >
                  <SvgPaperPlane />
                </TouchableOpacity>
              )}
            </View>
          </>
        )}
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
    width: width - 8,
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
    elevation: 9, // For Android shadow
    shadowColor: "#9d9d9d", // For iOS shadow
    shadowOffset: { width: 0, height: 1 }, // Offset for iOS
    shadowOpacity: 0.15, // Opacity for iOS
    shadowRadius: 9, // Blur radius for iOS
  },
  input: {
    flex: 1,
    width: "100%",
    borderRadius: 25,
    paddingLeft: 15,
    paddingRight: 60,
    backgroundColor: "#FFFFFF",
  },
  sendButton: {
    width: 42,
    height: 42,
    backgroundColor: "#E0F1FE",
    borderRadius: 20,
    position: "absolute",
    right: 6,
    bottom: 4,
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
    marginLeft: 8,
  },
  playPauseButton: {
    marginRight: 10,
  },
  recordingContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    backgroundColor: "#E0F1FE",
    borderRadius: 25,
    marginLeft: 10,
    paddingHorizontal: "auto",
    width: 100,
  },
  recordingText: {
    color: "#0B1215",
    fontSize: 16,
    fontWeight: "400",
  },
  meditationMessage: {
    backgroundColor: "#E3FFE1",
    alignSelf: "flex-start",
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 12,
  },
  meditationText: {
    color: "#0B1215",
    fontSize: 16,
    fontWeight: "400",
    fontStyle: "italic",
  },
  meditationMessageTime: {
    marginLeft: "auto",
    color: "#0B121580",
    fontSize: 14,
    fontWeight: "300",
  },
});
