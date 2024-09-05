import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import SvgPlayIcon from "./tabs/PlayIcon";
import { useNavigation } from "@react-navigation/native";
const { height, width } = Dimensions.get("window");

export default function ArticleItem({ time, photo, title, author, id }) {
  const navigation = useNavigation();
  return (
    <View style={styles.itemContainer}>
      <Image source={photo} style={styles.itemImage} />
      <Text style={styles.itemTime}>{`${time} Dk`}</Text>
      <View style={styles.itemTextContainer}>
        <View
          style={{
            width: width - 48,
            height: 58,
            position: "relative",
            overflow: "hidden",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 16,
            paddingVertical: 8,
          }}
        >
          <Image source={photo} style={styles.itemImageBlur} blurRadius={10} />
          <View
            style={{
              position: "absolute",
              width: width,
              height: 100,
              backgroundColor: "rgba(255, 255, 255, 0.14)",
            }}
          />
          <View style={{ display: "flex", flexDirection: "column" }}>
            <Text style={{ fontWeight: "600", fontSize: 16, color: "#FFFFFF" }}>
              {title}
            </Text>
            <Text style={{ fontWeight: "300", fontSize: 14, color: "#FFFFFF" }}>
              {author}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("BlogDetail", { id: id })}
          >
            <View
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
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    width: width - 48,
    height: 200,
    marginHorizontal: 24,
    position: "relative",
    borderRadius: 20,
    overflow: "hidden",
    marginVertical: 10,
    shadowColor: "#9d9d9d", // Shadow color
    shadowOffset: { width: 0, height: 1 }, // Offset for shadow (x, y)
    shadowOpacity: 0.15, // Opacity of shadow
    shadowRadius: 6, // Radius of shadow blur
    elevation: 5,
  },
  itemImage: {
    width: width - 48,
    height: 200,
    resizeMode: "cover",
  },
  itemTime: {
    position: "absolute",
    top: 16,
    left: 16,
    fontSize: 12,
    color: "#FFFFFF",
    backgroundColor: "rgba(11, 18, 21, 0.4)",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 14,
  },
  itemTextContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 58,
  },
  itemImageBlur: {
    width: width - 48,
    height: 200,
    resizeMode: "cover",
    position: "absolute",
    bottom: 0,
  },
});
