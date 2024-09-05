import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TrendMeditationItem from "../components/TrendMeditationItem";
import SquareMeditationItem from "../components/SquareMeditationItem";
import TestCardItem from "../components/TestCardItem";
import BlogArticleItem from "../components/BlogArticleItem";
import SolvedTestItem from "../components/SolvedTestItem";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <SolvedTestItem />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    alignItems: "center",
    justifyContent: "center",
  },
});
