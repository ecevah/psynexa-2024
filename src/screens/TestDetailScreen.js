import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import CustomHeader from "../components/CustomHeader";
import { useNavigation } from "@react-navigation/native";
import { TESTS } from "../constants/test_constant";
const { height, width } = Dimensions.get("window");

export default function TestDetailScreen({ route }) {
  const { id } = route.params;
  const navigation = useNavigation();
  const test = TESTS.find((test) => test.id === id); // Find the selected test

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.solveTest}
        onPress={() => navigation.navigate("TestScreen", { id: id })}
      >
        <Text style={styles.solveTestText}>Testi Çöz</Text>
      </TouchableOpacity>
      <CustomHeader text={test.name} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          source={test.photo}
          style={{
            width: width - 48,
            height: 220,
            overflow: "hidden",
            borderRadius: 20,
            marginHorizontal: 24,
            marginTop: 25,
          }}
        />
        <Text
          style={{
            marginLeft: 24,
            marginVertical: 22,
            fontSize: 20,
            fontWeight: "700",
          }}
        >
          Talimatlar
        </Text>
        <View style={styles.guides}>
          <View style={styles.guidesItem}>
            <Text style={styles.guidesText}>1.</Text>
            <Text style={styles.guidesText}>
              Teste başlamadan önce, sessiz ve rahat bir ortamda olduğunuzdan
              emin olun. Bu, odaklanmanıza ve daha doğru cevaplar vermenize
              yardımcı olacaktır.
            </Text>
          </View>
          <View style={styles.guidesItem}>
            <Text style={styles.guidesText}>2.</Text>
            <Text style={styles.guidesText}>
              Doğru veya yanlış cevap yoktur. Her soruyu şu anda nasıl
              hissettiğinize veya düşündüğünüze göre dürüstçe cevaplamak
              önemlidir. Dürüst cevaplarınız daha doğru içgörüler ve öneriler
              sağlamaya yardımcı olacaktır.
            </Text>
          </View>
          <View style={styles.guidesItem}>
            <Text style={styles.guidesText}>3.</Text>
            <Text style={styles.guidesText}>
              Testi aceleyle yapmanıza gerek yok. Her seçeneği değerlendirmek
              için zaman ayırın ve durumunuzu en iyi şekilde temsil edeni seçin.
              Test, kendi hızınızda tamamlanacak şekilde tasarlanmıştır.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    position: "relative",
  },
  guides: {
    width: width - 48,
    display: "flex",
    flexDirection: "column",
    paddingVertical: 16,
    paddingLeft: 18,
    paddingRight: 30,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    marginHorizontal: 24,
    shadowColor: "#9d9d9d", // Shadow color
    shadowOffset: { width: 0, height: 1 }, // Offset for shadow (x, y)
    shadowOpacity: 0.15, // Opacity of shadow
    shadowRadius: 9, // Radius of shadow blur
    elevation: 5,
    marginBottom: 110,
  },
  guidesItem: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 10,
  },
  guidesText: {
    color: "#0B1215",
    fontSize: 17,
    fontWeight: "400",
    marginRight: 8,
    lineHeight: 23,
  },
  solveTest: {
    position: "absolute",
    width: width - 48,
    marginHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: "#0A6EBD",
    borderRadius: 50,
    bottom: 40,
    zIndex: 100,
  },
  solveTestText: {
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "600",
  },
});
