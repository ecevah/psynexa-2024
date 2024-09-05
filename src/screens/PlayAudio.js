import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Audio } from "expo-av";

export default function PlayAudio() {
  const [recording, setRecording] = useState();
  const [recordings, setRecordings] = useState([]);
  const [currentPlayingIndex, setCurrentPlayingIndex] = useState(null); // Track the currently playing audio

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
      }
    } catch (err) {
      console.error("Failed to start recording", err);
    }
  }

  async function stopRecording() {
    try {
      setRecording(undefined);
      await recording.stopAndUnloadAsync();
      const { sound, status } = await recording.createNewLoadedSoundAsync();
      const newRecording = {
        sound: sound,
        duration: getDurationFormatted(status.durationMillis),
        file: recording.getURI(),
        isPlaying: false,
      };

      const updatedRecordings = [...recordings, newRecording];
      setRecordings(updatedRecordings);

      const index = updatedRecordings.length - 1;
      sound.setOnPlaybackStatusUpdate((playbackStatus) => {
        if (playbackStatus.didJustFinish) {
          handleStopPlay(index);
        }
      });
    } catch (error) {
      console.error("Failed to stop recording or load sound", error);
    }
  }

  function getDurationFormatted(milliseconds) {
    const minutes = Math.floor(milliseconds / 1000 / 60);
    const seconds = Math.floor((milliseconds / 1000) % 60);
    return seconds < 10 ? `${minutes}:0${seconds}` : `${minutes}:${seconds}`;
  }

  async function handlePlayPause(recording, index) {
    // Stop any currently playing audio
    if (currentPlayingIndex !== null && currentPlayingIndex !== index) {
      const currentRecording = recordings[currentPlayingIndex];
      await currentRecording.sound.pauseAsync();
      currentRecording.isPlaying = false;
    }

    const recordingsCopy = [...recordings];
    if (recording.isPlaying) {
      await recording.sound.pauseAsync();
      recordingsCopy[index].isPlaying = false;
    } else {
      await recording.sound.playFromPositionAsync(0); // Play from the beginning
      recordingsCopy[index].isPlaying = true;
      setCurrentPlayingIndex(index); // Track the currently playing audio
    }
    setRecordings(recordingsCopy);
  }

  async function handleSeek(recording, direction) {
    const status = await recording.sound.getStatusAsync();
    const newPosition =
      direction === "forward"
        ? status.positionMillis + 15000
        : status.positionMillis - 15000;
    await recording.sound.setPositionAsync(Math.max(newPosition, 0)); // Ensure position doesn't go negative
  }

  function handleStopPlay(index) {
    const recordingsCopy = [...recordings];
    recordingsCopy[index].isPlaying = false;
    setRecordings(recordingsCopy);
    setCurrentPlayingIndex(null);
  }

  function getRecordingLines() {
    return recordings.map((recording, index) => (
      <View key={index} style={styles.row}>
        <Text style={styles.fill}>
          Recording #{index + 1} - Duration: {recording.duration}
        </Text>
        <Button
          onPress={() => handlePlayPause(recording, index)}
          title={recording.isPlaying ? "Pause" : "Play"}
        />
        <Button
          onPress={() => handleSeek(recording, "backward")}
          title="Previous 15s"
        />
        <Button
          onPress={() => handleSeek(recording, "forward")}
          title="Next 15s"
        />
      </View>
    ));
  }

  function clearRecordings() {
    recordings.forEach(async (rec) => {
      await rec.sound.unloadAsync();
    });
    setRecordings([]);
  }

  return (
    <View style={styles.container}>
      <Button
        title={recording ? "Stop Recording" : "Start Recording"}
        onPress={recording ? stopRecording : startRecording}
      />
      {getRecordingLines()}
      {recordings.length > 0 && (
        <Button title="Clear Recordings" onPress={clearRecordings} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    padding: 10,
  },
  fill: {
    flex: 1,
    marginHorizontal: 10,
  },
});
