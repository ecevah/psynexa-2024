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
import SvgRightIosArrow from "./icons/RightIosArrow";
import { useNavigation } from "@react-navigation/native";
const { width } = Dimensions.get("window");

export default function BlogArticleItem({ image, title, id, author }) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.content}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.author}>{author}</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("BlogDetail", { id: id })}
        >
          <SvgRightIosArrow />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width - 48,
    padding: 12,
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    marginHorizontal: 24,
    shadowColor: "#9d9d9d",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5,
    borderRadius: 24,
  },
  image: {
    width: 74,
    height: 74,
    borderRadius: 12,
    shadowColor: "#9d9d9d",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5,
    marginRight: 12,
  },
  content: {
    width: 230,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#E1EFFD",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: "auto",
  },
  title: {
    width: 168,
    color: "#0B1215",
    fontSize: 16,
    fontWeight: "700",
  },
  author: {
    width: 168,
    color: "#0B1215",
    fontSize: 14,
    fontWeight: "400",
  },
});
