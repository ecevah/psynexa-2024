import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import SvgShare from "../components/icons/Share";
import SvgNotification from "../components/icons/Notification";
import SvgMessage from "../components/icons/Message";
import SvgSearch from "../components/icons/Search";
import SvgSetting from "../components/icons/Setting";
import HomeCarousel from "../components/HomeCarousel";
import SectionSeperator from "../components/SectionSeperator";
import { MEDITATIONS } from "../constants/meditations_constant";
import SquareMeditationItem from "../components/SquareMeditationItem";
import BlogArticleItem from "../components/BlogArticleItem";
import { BLOGS } from "../constants/blogs_constant";
import TestCardItem from "../components/TestCardItem";
import { TESTS } from "../constants/test_constant";
const { width } = Dimensions.get("window");

export default function App() {
  const navigation = useNavigation();
  const [greeting, setGreeting] = useState("Günaydın");

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour >= 5 && currentHour < 12) {
      setGreeting("Günaydın"); // Günaydın
    } else if (currentHour >= 12 && currentHour < 17) {
      setGreeting("Tünaydın"); // Tünaydın
    } else if (currentHour >= 17 && currentHour < 21) {
      setGreeting("İyi Akşamlar"); // İyi Akşamlar
    } else {
      setGreeting("İyi Geceler"); // İyi Geceler
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text
            style={{
              color: "#0B1215",
              fontSize: 14,
              fontWeight: "400",
              letterSpacing: -0.28,
            }}
          >
            {greeting}
          </Text>
          <Text
            style={{
              color: "#0B1215",
              fontSize: 24,
              fontWeight: "600",
              letterSpacing: -0.48,
            }}
          >
            Fatmanur Deniz
          </Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <TouchableOpacity>
            <View style={styles.headerButton}>
              <SvgNotification />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.headerButton}>
              <SvgMessage />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
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
        <HomeCarousel />
        <SectionSeperator
          text="Popüler Meditasyonlar"
          show={true}
          style={{ marginTop: 25 }}
          path={"Meditation"}
        />
        <View>
          <FlatList
            data={MEDITATIONS}
            renderItem={({ item }) => (
              <SquareMeditationItem
                photo={item.artwork}
                title={item.title}
                author={item.artist}
                id={item.id}
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
        </View>
        <SectionSeperator
          text="Popüler Bloglar ve Makaleler"
          show={true}
          style={{ marginTop: 25 }}
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
        <SectionSeperator
          text="Popüler Testler"
          show={true}
          style={{ marginTop: 25 }}
          path={"TestList"}
        />
        <View
          style={{
            height: 180,
            overflow: "hidden",
            paddingVertical: 5,
            marginBottom: 80,
          }}
        >
          <FlatList
            data={TESTS}
            renderItem={({ item }) => (
              <TestCardItem color={item.id} title={item.name} id={item.id} />
            )}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            contentContainerStyle={styles.flatListContent}
            ListHeaderComponent={<View style={{ width: 24 }} />}
            ListFooterComponent={<View style={{ width: 24 }} />}
            ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  },
  header: {
    width: width - 48,
    marginHorizontal: 24,
    marginTop: 60,
    marginBottom: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerButton: {
    display: "flex",
    width: 48,
    height: 48,
    borderWidth: 1,
    borderColor: "#E7E7E7",
    borderRadius: 24,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
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
});
