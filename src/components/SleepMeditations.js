import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { FOREST } from "../constants/constant";
import SvgPlayIcon from "./tabs/PlayIcon";
import SvgDownloadIcon from "./icons/DownloadIcon";
import SvgHeart from "./icons/Heart";
import SvgMore from "./icons/More";
const { width } = Dimensions.get("window");

export default function SleepMeditations() {
  return (
    <View style={styles.sleepContainer}>
      <View style={styles.sleepHeader}>
        <Image source={FOREST} style={styles.sleepImage} />
        <View style={styles.sleepHeaderContent}>
          <View>
            <Text style={styles.sleepHeaderText}>Nefes</Text>
            <Text style={styles.sleepHeaderText}>Meditasyonları</Text>
          </View>
          <View style={styles.sleepHeaderIconContainer}>
            <TouchableOpacity
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderRadius: 21,
                width: 42,
                height: 42,
              }}
            >
              <SvgPlayIcon color="rgba(11, 18, 21, 1)" width={24} height={24} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderRadius: 21,
                width: 42,
                height: 42,
              }}
            >
              <SvgDownloadIcon />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderRadius: 21,
                width: 42,
                height: 42,
              }}
            >
              <SvgHeart />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderRadius: 21,
                width: 42,
                height: 42,
              }}
            >
              <SvgMore />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Text style={styles.sleepText}>
        Daha fazla huzur ve denge için nefesinize odaklanarak derin ve bilinçli
        bir şekilde nefes alın.
      </Text>
      <View>
        <View style={styles.sleepItemContainer}>
          <Image source={FOREST} style={styles.sleepItemImage} />
          <View>
            <Text style={styles.sleepItemTitle}>Tranquil Sleep Journeys</Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                width: 250,
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.sleepItemText}>Time to sleep</Text>
              <Text style={styles.sleepItemText}>45 min</Text>
            </View>
          </View>
        </View>
        <View style={styles.sleepItemContainer}>
          <Image source={FOREST} style={styles.sleepItemImage} />
          <View>
            <Text style={styles.sleepItemTitle}>Tranquil Sleep Journeys</Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                width: 250,
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.sleepItemText}>Time to sleep</Text>
              <Text style={styles.sleepItemText}>45 min</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sleepContainer: {
    width: width - 48,
    marginHorizontal: 24,
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 24,
    borderRadius: 24,
    backgroundColor: "rgba(224, 241, 254, 1)",
    marginTop: 44,
    marginBottom: 100,
  },
  sleepHeader: {
    display: "flex",
    flexDirection: "row",
  },
  sleepImage: {
    width: 100,
    height: 112,
    borderRadius: 12,
    resizeMode: "cover",
    marginRight: 12,
  },
  sleepHeaderText: {
    color: "rgba(11, 18, 21, 1)",
    fontSize: 24,
    fontWeight: "800",
    lineHeight: 28,
  },
  sleepHeaderContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  sleepHeaderIconContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: 200,
  },
  sleepText: {
    color: "#0B1215",
    fontSize: 16,
    fontWeight: "400",
    marginTop: 24,
    marginBottom: 24,
  },
  sleepItemContainer: {
    display: "flex",
    flexDirection: "row",
    marginVertical: 10,
  },
  sleepItemImage: {
    width: 52,
    height: 52,
    borderRadius: 8,
    resizeMode: "cover",
    marginRight: 12,
  },
  sleepItemTitle: {
    color: "rgba(11, 18, 21, 1)",
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 20,
  },
  sleepItemText: {
    color: "rgba(11, 18, 21, 1)",
    fontSize: 14,
    fontWeight: "300",
    lineHeight: 20,
  },
});
