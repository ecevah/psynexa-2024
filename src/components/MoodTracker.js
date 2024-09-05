import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import SvgRightIosArrow from "../components/icons/RightIosArrow";
import {
  EMOTIONS_MONTHLY,
  EMOTIONS_WEEKLY,
} from "../constants/emotion_constant";
import EmotionWeeklyItem from "../components/emotionWeeklyItem";
import EmotionMonthlyItem from "../components/EmotionMonthlyItem";

const { height, width } = Dimensions.get("window");

export default function MoodTracker() {
  const [isWeekly, setIsWeekly] = useState(true);
  const week = ["Pzt", "Sal", "Çrş", "Prş", "Cum", "Cmt", "Paz"];

  return (
    <View style={styles.moodTracker}>
      <View style={styles.moodTrackerHeader}>
        <Text style={styles.moodTrackerTitle}>
          {isWeekly
            ? "Haftalık Ruh Hali Takipçisi"
            : "Aylık Ruh Hali Takipçisi"}
        </Text>
        <TouchableOpacity onPress={() => setIsWeekly(!isWeekly)}>
          <View style={styles.pickerContainer}>
            <Text style={{ fontSize: 14, fontWeight: "500" }}>
              {isWeekly ? "Haftalık" : "Aylık"}
            </Text>
            <View style={styles.pickerArrow}>
              <SvgRightIosArrow />
            </View>
          </View>
        </TouchableOpacity>
      </View>
      {isWeekly ? (
        <FlatList
          data={EMOTIONS_WEEKLY}
          renderItem={({ item }) => (
            <EmotionWeeklyItem
              number={item.day}
              day={item.dayName}
              icon={item.emotion.item}
              color={item.emotion.color}
            />
          )}
          keyExtractor={(item, index) => item.dayName + index}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      ) : (
        <View style={styles.monthlyContainer}>
          <View style={[styles.calendarWeek]}>
            {week.map((day, index) => (
              <Text key={`${day} ${index}`} style={styles.calendarWeekDay}>
                {day}
              </Text>
            ))}
          </View>
          {EMOTIONS_MONTHLY.map((month, monthIndex) => (
            <View key={`month-${monthIndex}`} style={styles.calendarWeek}>
              {month.item.map((item, itemIndex) => (
                <EmotionMonthlyItem
                  key={`item-${itemIndex}`}
                  icon={item.emotion}
                  number={item.day}
                />
              ))}
            </View>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  moodTracker: {
    display: "flex",
    flexDirection: "column",
    elevation: 6,
    shadowColor: "rgba(157, 157, 157, 1)",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    width: width - 48,
    paddingHorizontal: 12,
    paddingVertical: 24,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    marginHorizontal: 24,
  },
  moodTrackerHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 15,
  },
  moodTrackerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000000",
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.30)",
    borderRadius: 16,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
  },
  pickerArrow: {
    transform: [{ rotate: "90deg" }],
  },
  monthlyContainer: {
    display: "flex",
    flexDirection: "col",
    width: "100%",
  },
  calendarWeek: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  calendarWeekDay: {
    fontSize: 14,
    fontWeight: "400",
    width: 43,
    textAlign: "center",
    marginBottom: 10,
  },
});
