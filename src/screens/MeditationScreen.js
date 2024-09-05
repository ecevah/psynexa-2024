import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import CustomHeader from "../components/CustomHeader";
import { MEDITATIONS } from "../constants/meditations_constant";
import TrendMeditationItem from "../components/TrendMeditationItem";
import SquareMeditationItem from "../components/SquareMeditationItem";
import SleepMeditations from "../components/SleepMeditations";

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const MeditationScreen = () => {
  const shuffledMeditations = shuffleArray([...MEDITATIONS]);
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <CustomHeader text={"Meditasyonlar"} />
        <Text
          style={{
            fontSize: 18,
            fontWeight: "600",
            marginLeft: 24,
            marginBottom: 24,
            marginTop: 12,
          }}
        >
          Popüler Meditasyonlar
        </Text>
        <FlatList
          data={shuffledMeditations}
          renderItem={({ item }) => (
            <TrendMeditationItem
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
        <Text
          style={{
            fontSize: 18,
            fontWeight: "600",
            marginLeft: 24,
            marginBottom: 24,
            marginTop: 20,
          }}
        >
          Sizin İçin Önerilenler
        </Text>
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
        <SleepMeditations />
      </ScrollView>
    </View>
  );
};

export default MeditationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  },
});
