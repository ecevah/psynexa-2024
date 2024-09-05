import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import { MEDITATIONS } from "../constants/meditations_constant";
import HomeSliderItem from "./HomeSliderItem";
import HomePaginator from "./HomePaginator";
import SvgTriangle from "./svg/Triangle";
import SvgUncertain from "./svg/Uncertain";

const { width } = Dimensions.get("window");
export default function HomeCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const scrollTo = (index) => {
    slidesRef.current.scrollToIndex({ index });
  };

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const nextImage = (index) => {
    if (index === MEDITATIONS.length - 1) {
      return 0;
    }
    return index + 1;
  };
  return (
    <View
      style={{
        position: "relative",
        width: width - 48,
        height: 220,
        marginHorizontal: 24,
      }}
    >
      <View style={styles.sliderContainer}>
        <FlatList
          data={MEDITATIONS}
          renderItem={({ item }) => (
            <HomeSliderItem
              image={item.artwork}
              title={item.title}
              id={item.id}
            />
          )}
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
      <View style={styles.footer}>
        <HomePaginator data={MEDITATIONS} scrollX={scrollX} />
      </View>
      <SvgTriangle style={styles.bottomLeftSvg} />
      <SvgTriangle style={styles.bottomRightSvg} />
      <SvgTriangle style={styles.topLeftSvg} />
      <SvgUncertain style={styles.topRightSvg} />
      <TouchableOpacity
        style={styles.miniImageContainer}
        onPress={() => {
          scrollTo(nextImage(currentIndex));
        }}
      >
        <Image
          source={MEDITATIONS[nextImage(currentIndex)].artwork}
          style={styles.miniImage}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  sliderContainer: {
    width: width - 48,
    height: 220,
    position: "relative",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: (width - 195) / 2,
    backgroundColor: "#23262F",
    paddingHorizontal: 11,
    paddingTop: 8,
    paddingBottom: 8,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  nextButton: {
    width: 32,
    height: 32,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
  },
  bottomLeftSvg: { position: "absolute", bottom: 0, left: -1 },
  bottomRightSvg: {
    position: "absolute",
    bottom: -1,
    right: -1,
    transform: [{ rotate: "-90deg" }],
  },
  topLeftSvg: { position: "absolute", transform: [{ rotate: "90deg" }] },
  topRightSvg: { position: "absolute", right: -8, top: -1 },
  miniImageContainer: {
    position: "absolute",
    width: 52,
    height: 52,
    borderRadius: 16,
    overflow: "hidden",
    opacity: 0.8,
    right: 0,
  },
  miniImage: {
    width: 54,
    height: 54,
    resizeMode: "cover",
  },
});
