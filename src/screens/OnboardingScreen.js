import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Animated,
  TouchableOpacity,
} from "react-native";
import { ONBOARDING_ARRAY } from "../constants/onboard_constant";
import OnboardingItem from "../components/OnboardingItem";
import Paginator from "../components/Paginator";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import SvgOnboardBackgroundGreen from "../components/images/OnboardBackgroundGreen";

export default function OnboardingScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);
  const navigation = useNavigation();

  const scrollTo = (index) => {
    slidesRef.current.scrollToIndex({ index });
  };

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  return (
    <View style={styles.container}>
      <View style={styles.bgBox}>
        <SvgOnboardBackgroundGreen></SvgOnboardBackgroundGreen>
      </View>
      <View style={styles.sliderContainer}>
        <FlatList
          data={ONBOARDING_ARRAY}
          renderItem={({ item }) => <OnboardingItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>
      {currentIndex < ONBOARDING_ARRAY.length - 1 ? (
        <View style={styles.footer}>
          <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
            <Text style={styles.skipText}>Geç</Text>
          </TouchableOpacity>
          <Paginator data={ONBOARDING_ARRAY} scrollX={scrollX} />
          <TouchableOpacity
            style={styles.nextButton}
            onPress={() => {
              scrollTo(currentIndex + 1);
            }}
          >
            <MaterialIcons name="arrow-forward-ios" size={24} color="#0A6EBD" />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={[styles.footer]}>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => navigation.navigate("LoginScreen")}
          >
            <Text style={{ color: "#FFFFFF", fontSize: 17, fontWeight: "600" }}>
              Başla
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0A6EBD",
  },
  bgBox: {
    position: "absolute",
    top: "30%",
    left: 0,
    width: 240,
    height: 460,
    borderTopRightRadius: 120,
    borderBottomRightRadius: 60,
    overflow: "hidden",
  },
  sliderContainer: {
    flex: 3,
  },
  footer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingHorizontal: 25,
  },
  skipText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "400",
    lineHeight: 18,
    marginTop: 9,
  },
  nextButton: {
    width: 32,
    height: 32,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
  },
  loginButton: {
    width: "100%",
    height: 56,
    backgroundColor: "#289FE1CC",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 27,
    marginBottom: 40,
  },
});
