import React, { useState, useRef } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Animated,
  TouchableOpacity,
  Text,
  Image,
  Dimensions,
  TextInput,
  ScrollView,
} from "react-native";
import { ONBOARDING_ARRAY } from "../constants/onboard_constant";
import OnboardingItem from "../components/OnboardingItem";
import Paginator from "../components/Paginator";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { MEDITATIONS } from "../constants/meditations_constant";
import HomePaginator from "../components/HomePaginator";
import { BlackMask, FOREST, YOGA } from "../constants/constant";
import HomeSliderItem from "../components/HomeSliderItem";
import SvgTriangle from "../components/svg/Triangle";
import SvgUncertain from "../components/svg/Uncertain";
import SvgSearch from "../components/icons/Search";
import SvgSetting from "../components/icons/Setting";
import { useNavigation } from "@react-navigation/native";
import SquareMeditationItem from "../components/SquareMeditationItem";
import SectionSeperator from "../components/SectionSeperator";
import BlogArticleItem from "../components/BlogArticleItem";
import { BLOGS } from "../constants/blogs_constant";

const { width } = Dimensions.get("window");
export default function DiscoverScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.titleText}>Keşfet</Text>
        <View
          style={{
            width: width - 48,
            marginHorizontal: 24,
            marginBottom: 40,
            marginTop: 20,
            position: "relative",
          }}
        >
          <SvgSearch
            style={{ position: "absolute", zIndex: 123, top: 12, left: 8 }}
          />
          <TouchableOpacity style={styles.settingsButton}>
            <SvgSetting />
          </TouchableOpacity>
          <TextInput style={styles.input} placeholder="Ara..." />
        </View>
        <View style={{ width: width - 48, marginHorizontal: 24 }}>
          <View
            style={{
              width: width - 48,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              style={styles.screenCard}
              onPress={() => navigation.navigate("Meditation")}
            >
              <Image source={FOREST} style={styles.screenCardImage} />
              <Text style={styles.screenCardText}>Meditasyon</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.screenCard}
              onPress={() => navigation.navigate("ArticleBlog")}
            >
              <Image source={YOGA} style={styles.screenCardImage} />
              <Text style={styles.screenCardText}>Bloglar</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: width - 48,
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
            }}
          >
            <TouchableOpacity
              style={styles.screenCard}
              onPress={() => navigation.navigate("TestList")}
            >
              <Image source={BlackMask} style={styles.screenCardImage} />
              <Text style={styles.screenCardText}>Test</Text>
            </TouchableOpacity>
          </View>
        </View>
        <SectionSeperator
          text="En İyi Meditasyonlar"
          show={true}
          path={"Meditation"}
        />
        <FlatList
          data={MEDITATIONS}
          renderItem={({ item }) => (
            <SquareMeditationItem
              photo={item.artwork}
              title={item.title}
              author={item.artist}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          contentContainerStyle={styles.flatListContent}
          ListHeaderComponent={<View style={{ width: 24 }} />}
          ListFooterComponent={<View style={{ width: 24 }} />}
          ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
          showsHorizontalScrollIndicator={false}
        />
        <View style={{ height: 30 }} />
        <SectionSeperator
          text="En İyi Makaleler"
          show={true}
          path={"ArticleBlog"}
        />
        <View>
          <BlogArticleItem
            image={BLOGS[0].blogImage}
            title={BLOGS[0].title}
            author={BLOGS[0].author}
            id={BLOGS[0].id}
          />
          <View style={{ height: 12 }} />
          <BlogArticleItem
            image={BLOGS[1].blogImage}
            title={BLOGS[1].title}
            author={BLOGS[1].author}
            id={BLOGS[1].id}
          />
          <View style={{ height: 12 }} />
          <BlogArticleItem
            image={BLOGS[2].blogImage}
            title={BLOGS[2].title}
            author={BLOGS[2].author}
            id={BLOGS[2].id}
          />
        </View>
        <View style={{ height: 90 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  },
  input: {
    width: width - 48,
    height: 50,
    borderRadius: 25,
    borderWidth: 0.5,
    borderColor: "#CACAD7",
    backgroundColor: "white",
    paddingLeft: 40,
    paddingStart: 55,
    fontSize: 16,
    color: "#0B1215",
  },
  settingsButton: {
    position: "absolute",
    zIndex: 122,
    right: 6,
    top: 4,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(238, 245, 255, 1)",
    width: 42,
    height: 42,
    borderRadius: 24,
  },
  titleText: {
    color: "#0B1215",
    fontSize: 32,
    fontWeight: "600",
    letterSpacing: -0.64,
    marginLeft: 24,
    marginTop: 60,
  },
  screenCard: {
    width: 163,
    borderRadius: 24,
    padding: 8,
    backgroundColor: "#FFFFFF",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
    shadowColor: "rgba(157, 157, 157, 0.15)",
    shadowOffset: { width: -1, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 6,
    elevation: 3,
    marginHorizontal: 8,
    marginVertical: -8,
  },
  screenCardImage: {
    width: 48,
    height: 48,
    borderRadius: 12,
    resizeMode: "cover",
  },
  screenCardText: {
    color: "#0B1215",
    fontSize: 14,
    fontWeight: "600",
    marginLeft: 8,
  },
});
