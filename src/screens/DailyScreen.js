import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import MoodTracker from "../components/MoodTracker";
import CreateDailyMood from "../components/CreateDailyMood";
import SeeAllButton from "../components/SeeAllButton";
import { MEDITATIONS } from "../constants/meditations_constant";
import TrendMeditationItem from "../components/TrendMeditationItem";
import { useNavigation } from "@react-navigation/native";

const { height, width } = Dimensions.get("window");

const DailyScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.headerTitle}>Şükran Günlüğü</Text>
        <MoodTracker />
        <CreateDailyMood />
        <View style={styles.meditationsTitle}>
          <Text style={{ fontSize: 18, fontWeight: "600", marginBottom: 25 }}>
            Önerilen Meditasyonlar
          </Text>
          <TouchableOpacity
            style={{ paddingTop: 3 }}
            onPress={() => navigation.navigate("Meditation")}
          >
            <SeeAllButton />
          </TouchableOpacity>
        </View>
        <FlatList
          data={MEDITATIONS}
          renderItem={({ item }) => (
            <TrendMeditationItem
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
      </ScrollView>
    </View>
  );
};

export default DailyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  },
  scrollViewContent: {
    paddingBottom: 100,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#0B1215",
    textAlign: "center",
    marginTop: 60,
    marginBottom: 25,
  },
  meditationsTitle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: width - 48,
    marginHorizontal: 24,
  },
});
