import {
  Image,
  ScrollView,
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { FOREST } from "../constants/constant";
import { BLOGS } from "../constants/blogs_constant";
import SvgPlayIcon from "../components/tabs/PlayIcon";
import SvgRightIosArrow from "../components/icons/RightIosArrow";
import { useNavigation } from "@react-navigation/native";
import CenterButton from "../components/TabBarCenterButton";
import SvgHeart from "../components/icons/Heart";
import SvgShare from "../components/icons/Share";

const { width } = Dimensions.get("window");

const BlogDetailScreen = ({ route }) => {
  const { id } = route.params;
  const navigation = useNavigation();
  const blog = BLOGS.find((blog) => blog.id === id);

  return (
    <ScrollView>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={{ position: "absolute", top: 60, left: 20, zIndex: 100 }}
          onPress={() => navigation.goBack()}
        >
          <View style={styles.backButton}>
            <SvgRightIosArrow />
          </View>
        </TouchableOpacity>
        <Image source={blog.blogImage} style={styles.image} />
        <View
          style={{
            position: "absolute",
            width: width,
            height: 70,
            bottom: 0,
          }}
        >
          <View
            style={{
              position: "relative",
              width: "100%",
              height: 70,
              overflow: "hidden",
            }}
          >
            <View
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                width: width,
                height: 80,
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                zIndex: 12,
                paddingTop: 3,
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingHorizontal: 24,
                  paddingVertical: 10,
                  height: 80,
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Text style={styles.title}>{blog.title}</Text>
                  <Text style={styles.date}>{blog.date}</Text>
                </View>
                <View style={styles.playButton}>
                  <SvgPlayIcon color="#0B1215" width={24} height={24} />
                </View>
              </View>
            </View>
            <Image
              source={blog.blogImage}
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                width: width,
              }}
              blurRadius={10}
            />
          </View>
        </View>
      </View>
      <View style={{ padding: 14, marginBottom: 70 }}>
        <View style={styles.contentContainer}>
          <View style={styles.contentAuthor}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <CenterButton navigation={true} />
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  marginLeft: 12,
                }}
              >
                <Text
                  style={{ fontSize: 14, fontWeight: 300, color: "#0B1215" }}
                >
                  Yazar
                </Text>
                <Text
                  style={{ fontSize: 18, fontWeight: 600, color: "#0B1215" }}
                >
                  {blog.author}
                </Text>
              </View>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <TouchableOpacity>
                <View style={styles.iconButton}>
                  <SvgHeart />
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.iconButton}>
                  <SvgShare />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.content}>{blog.content}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default BlogDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: width,
    height: 350,
    resizeMode: "cover",
  },
  headerContainer: {
    position: "relative",
  },
  blurContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    justifyContent: "center",
    paddingHorizontal: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  imageBlur: {
    width: width,
    height: 100,
    resizeMode: "cover",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  title: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "600",
  },
  date: { color: "#ffffff", fontSize: 14, fontWeight: "300" },
  playButton: {
    width: 42,
    height: 42,
    backgroundColor: "#ffffff",
    borderRadius: 21,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  backButton: {
    display: "flex",
    transform: [{ rotate: "180deg" }],
    width: 48,
    height: 48,
    borderWidth: 1,
    borderColor: "#E7E7E7",
    borderRadius: 24,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  contentContainer: {
    borderRadius: 24,
    backgroundColor: "#FFFFFF",
    padding: 12,
    elevation: 6,
    shadowColor: "rgba(157, 157, 157, 1)",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },
  contentAuthor: {
    borderRadius: 24,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
    elevation: 6,
    shadowColor: "rgba(117, 117, 117, 1)",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  iconButton: {
    width: 48,
    height: 48,
    backgroundColor: "#F7F7F7",
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  content: {
    color: "#0B1215",
    fontWize: 16,
    fontWeight: "400",
    lineHeight: 24,
  },
});
