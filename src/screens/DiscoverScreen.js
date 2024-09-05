import React, { useState, useRef } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Animated,
  TouchableOpacity,
  Text,
  Image,
  Dimensions,
  TextInput,
} from "react-native";
import { ONBOARDING_ARRAY } from "../constants/onboard_constant";
import OnboardingItem from "../components/OnboardingItem";
import Paginator from "../components/Paginator";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { MEDITATIONS } from "../constants/meditations_constant";
import HomePaginator from "../components/HomePaginator";
import { FOREST } from "../constants/constant";
import HomeSliderItem from "../components/HomeSliderItem";
import SvgTriangle from "../components/svg/Triangle";
import SvgUncertain from "../components/svg/Uncertain";
import SvgSearch from "../components/icons/Search";
import SvgSetting from "../components/icons/Setting";

const { width } = Dimensions.get("window");
export default function DiscoverScreen() {
  return (
    <View style={styles.container}>
      <Text>Keşfet</Text>
      <View
        style={{
          width: width - 48,
          marginHorizontal: 24,
          marginBottom: 40,
          marginTop: 20,
          position: "relative",
        }}
      >
        <SvgSearch
          style={{ position: "absolute", zIndex: 123, top: 12, left: 8 }}
        />
        <TouchableOpacity style={styles.settingsButton}>
          <SvgSetting />
        </TouchableOpacity>
        <TextInput style={styles.input} placeholder="Ara..." />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  },
  input: {
    width: width - 48,
    height: 50,
    borderRadius: 25,
    borderWidth: 0.5,
    borderColor: "#CACAD7",
    backgroundColor: "white",
    paddingLeft: 40,
    paddingStart: 55,
    fontSize: 16,
    color: "#0B1215",
  },
  settingsButton: {
    position: "absolute",
    zIndex: 122,
    right: 6,
    top: 4,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(238, 245, 255, 1)",
    width: 42,
    height: 42,
    borderRadius: 24,
  },
});
