import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import SeeAllButton from "./SeeAllButton";
import { useNavigation } from "@react-navigation/native";
const { width } = Dimensions.get("window");

export default function SectionSeperator({ text, path, style, show = false }) {
  const navigation = useNavigation();

  const handlePress = () => {
    // Eğer path doğru bir navigasyon ismi ise bu şekilde gitmeli.
    if (navigation && path) {
      navigation.navigate(path);
    } else {
      console.warn("Navigasyon yolu bulunamadı.");
    }
  };

  return (
    <View style={[styles.title, style]}>
      <Text style={{ fontSize: 18, fontWeight: "600", marginBottom: 25 }}>
        {text}
      </Text>
      {show && (
        <TouchableOpacity onPress={handlePress} style={{ paddingTop: 3 }}>
          <SeeAllButton />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: width - 48,
    marginHorizontal: 24,
  },
});
