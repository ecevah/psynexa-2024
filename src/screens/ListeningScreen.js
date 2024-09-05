import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import Slider from "@react-native-community/slider";
import { Audio } from "expo-av";
import { MEDITATIONS } from "../constants/meditations_constant";
import SvgRightIosArrow from "../components/icons/RightIosArrow";
import { useNavigation } from "@react-navigation/native";
import SvgShare from "../components/icons/Share";
import SvgHeart from "../components/icons/Heart";
import SvgPlayIcon from "../components/tabs/PlayIcon";
import SvgPauseIcon from "../components/icons/PauseIcon";
import SvgForward15 from "../components/icons/Forward15";
import SvgSkipForward from "../components/icons/SkipForward";
import SvgSkipBack from "../components/icons/SkipBack";
import SvgReplay15 from "../components/icons/Replay15";
import SvgDownloadIcon from "../components/icons/DownloadIcon";

const { height, width } = Dimensions.get("window");

const ListeningScreen = ({ route }) => {
  const { id } = route.params;
  const [currentSong, setCurrentSong] = useState(id);
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState(null);
  const [playbackStatus, setPlaybackStatus] = useState(null);
  const ref = useRef();
  const navigation = useNavigation();

  useEffect(() => {
    loadSound();

    return () => {
      unloadSound();
    };
  }, []);

  useEffect(() => {
    loadSound();
  }, [currentSong]);

  const loadSound = async () => {
    if (sound) {
      await sound.unloadAsync();
    }

    const meditation = MEDITATIONS[currentSong];
    console.log("Loading audio from:", meditation.url);

    try {
      const { sound: newSound, status } = await Audio.Sound.createAsync(
        meditation.url,
        { shouldPlay: isPlaying },
        updateStatus
      );
      setSound(newSound);
      setPlaybackStatus(status);
    } catch (error) {
      console.error("Error loading sound:", error);
    }
  };

  const unloadSound = async () => {
    if (sound) {
      await sound.unloadAsync();
      setSound(null);
    }
  };

  const updateStatus = (status) => {
    setPlaybackStatus(status);
    if (status.didJustFinish) {
      handleNext();
    }
  };

  const togglePlayback = async () => {
    if (!sound) {
      console.warn("Sound is not loaded yet.");
      return;
    }

    if (isPlaying) {
      await sound.pauseAsync();
      setIsPlaying(false);
    } else {
      await sound.playAsync();
      setIsPlaying(true);
    }
  };

  const handleNext = async () => {
    if (currentSong < MEDITATIONS.length - 1) {
      setCurrentSong(currentSong + 1);
      ref.current.scrollToIndex({ animated: true, index: currentSong + 1 });
    }
  };

  const handlePrevious = async () => {
    if (currentSong > 0) {
      setCurrentSong(currentSong - 1);
      ref.current.scrollToIndex({ animated: true, index: currentSong - 1 });
    }
  };

  const seekBackward = async () => {
    if (sound && playbackStatus) {
      let newPosition = playbackStatus.positionMillis - 15000;
      if (newPosition < 0) newPosition = 0;
      await sound.setPositionAsync(newPosition);
    }
  };

  const seekForward = async () => {
    if (sound && playbackStatus) {
      let newPosition = playbackStatus.positionMillis + 15000;
      if (newPosition > playbackStatus.durationMillis)
        newPosition = playbackStatus.durationMillis;
      await sound.setPositionAsync(newPosition);
    }
  };

  const formatTime = (millis) => {
    const minutes = Math.floor(millis / 60000);
    const seconds = Math.floor((millis % 60000) / 1000);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <View style={styles.container}>
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
            justifyContent: "end",
            alignItems: "center",
          }}
        >
          <TouchableOpacity>
            <View style={styles.headerButton}>
              <SvgDownloadIcon />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.headerButton}>
              <SvgHeart />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.headerButton}>
              <SvgShare />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <FlatList
          data={MEDITATIONS}
          showsHorizontalScrollIndicator={false}
          ref={ref}
          pagingEnabled
          horizontal
          keyExtractor={(item) => item.id.toString()}
          onScroll={(e) => {
            const x = e.nativeEvent.contentOffset.x / width;
            const newIndex = parseInt(x.toFixed(0));
            if (newIndex !== currentSong) {
              setCurrentSong(newIndex);
              setIsPlaying(true);
            }
          }}
          renderItem={({ item }) => (
            <View style={styles.bannerView} key={item.id}>
              <Image source={item.artwork} style={styles.banner} />
              <Text style={styles.name}>{item.title}</Text>
              <Text style={styles.artist}>{item.artist}</Text>
            </View>
          )}
        />
      </View>
      <View style={styles.sliderContainer}>
        <Text style={styles.timeText}>
          {formatTime(playbackStatus?.positionMillis || 0)}
        </Text>
        <Slider
          style={styles.slider}
          value={playbackStatus?.positionMillis || 0}
          maximumValue={playbackStatus?.durationMillis || 1}
          thumbStyle={{ width: 20, height: 20 }}
          thumbTintColor="black"
          onSlidingComplete={async (value) => {
            if (sound) {
              await sound.setPositionAsync(value);
            }
          }}
        />
        <Text style={styles.timeText}>
          {formatTime(playbackStatus?.durationMillis || 0)}
        </Text>
      </View>

      <View style={styles.btnArea}>
        <TouchableOpacity onPress={seekBackward}>
          <SvgReplay15 />
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePrevious}>
          <SvgSkipBack />
        </TouchableOpacity>
        <TouchableOpacity onPress={togglePlayback}>
          <View style={styles.playButton}>
            {isPlaying ? <SvgPauseIcon /> : <SvgPlayIcon />}
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNext}>
          <SvgSkipForward />
        </TouchableOpacity>
        <TouchableOpacity onPress={seekForward}>
          <SvgForward15 />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ListeningScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bannerView: {
    width: width,
    height: height / 1.6,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  banner: {
    width: "90%",
    height: 300,
    marginTop: 50,
    borderRadius: 10,
  },
  name: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "700",
    color: "#000000",
    textAlign: "center",
  },
  artist: {
    fontSize: 18,
    color: "#666666",
    textAlign: "center",
  },
  sliderContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    alignSelf: "center",
    marginTop: 20,
  },
  timeText: {
    color: "#000",
    fontSize: 14,
    width: 40,
    textAlign: "center",
  },
  slider: {
    flex: 1,
    marginHorizontal: 10,
  },
  btnArea: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 50,
  },
  icon: {
    width: 35,
    height: 35,
    resizeMode: "contain",
  },
  playButton: {
    width: 60,
    height: 60,
    backgroundColor: "#0A6EBD",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
    marginBottom: 10,
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
  headerButton: {
    display: "flex",
    width: 48,
    height: 48,
    borderWidth: 1,
    borderColor: "#E7E7E7",
    borderRadius: 24,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 12,
  },
});
