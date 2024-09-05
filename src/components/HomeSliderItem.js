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

export default function HomeSliderItem({ image, title, id }) {
  const navigate = useNavigation();
  return (
    <View style={styles.itemComponent}>
      <Image source={image} style={styles.itemComponentImage} />
      <Text style={styles.itemComponentTitle}>{title}</Text>
      <TouchableOpacity
        onPress={() => navigate.navigate("ListeningScreen", { id: id })}
        style={{
          position: "absolute",
          top: 86,
          left: (width - 96) / 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(35, 38, 47, 0.75);",
          borderRadius: 24,
          width: 48,
          height: 48,
        }}
      >
        <SvgPlayIcon color="#FFFFFF" width={32} height={32} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  itemComponent: {
    width: width - 48,
    height: 220,
    position: "relative",
    justifyContent: "center",
    alignContent: "center",
  },
  itemComponentImage: {
    width: width - 48,
    height: 220,
    resizeMode: "cover",
  },
  itemComponentTitle: {
    position: "absolute",
    color: "white",
    fontSize: 17,
    width: 250,
    fontWeight: "700",
    left: 20,
    bottom: 30,
  },
});
