import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import CustomHeader from "../components/CustomHeader";
import { BLOGS } from "../constants/blogs_constant";
import ArticleItem from "../components/ArticleItem";

export default function ArticleBlogScreen() {
  return (
    <View style={styles.container}>
      <CustomHeader text="Blog ve Makaleler" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Popüler Makaleler</Text>
        {BLOGS.map((item, index) => (
          <ArticleItem
            key={"Articles " + index}
            time={item.time}
            photo={item.blogImage}
            title={item.title}
            author={item.author}
            id={item.id}
          />
        ))}
        <View style={{ height: 90, width: 1 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    paddingLeft: 24,
    marginBottom: 10,
    marginTop: 24,
  },
});
