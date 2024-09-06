import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import SvgRightIosArrow from "./icons/RightIosArrow";
import ProfileContentItem from "./ProfileContentItem";
const { width } = Dimensions.get("window");

export default function ProfileContentContant({
  title,
  data,
  isSwitch = false,
}) {
  return (
    <View style={styles.inclusive}>
      <Text style={styles.title}>{title}</Text>
      {data.map((data, index) => (
        <ProfileContentItem
          key={"ProfileContent" + index}
          icon={data.icon}
          title={data.title}
          isSwitch={isSwitch}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  inclusive: {
    width: width - 48,
    marginHorizontal: 24,
    borderRadius: 12,
    shadowColor: "#9d9d9d",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 2,
    backgroundColor: "#FFFFFF",
    padding: 12,
    marginVertical: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 12,
  },
});
