import React, { useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomHeader from "../components/CustomHeader";
import { TICK_ICON } from "../constants/constant";
import { TESTS } from "../constants/test_constant";

const { width } = Dimensions.get("window");

export default function TestScreen({ route }) {
  const { id } = route.params;
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const navigation = useNavigation();
  const test = TESTS.find((test) => test.id === id); // Find the selected test

  const handleAnswerSelect = (questionId, answerIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: answerIndex,
    });
  };

  const renderQuestion = (item, questionIndex) => {
    return (
      <View style={styles.testQuestionCard} key={questionIndex}>
        <Text style={styles.questionNumber}>{`${questionIndex + 1}.`}</Text>
        <View style={{ width: width - 170 }}>
          <Text style={styles.questionText}>{item.question}</Text>
          <View style={styles.answersContainer}>
            {item.items.map((answer, idx) => (
              <TouchableOpacity
                key={idx}
                style={styles.answerButton}
                onPress={() => handleAnswerSelect(questionIndex, idx)}
              >
                <View style={styles.radioButton}>
                  {selectedAnswers[questionIndex] === idx && (
                    <Image
                      source={TICK_ICON}
                      style={styles.radioButtonSelected}
                    />
                  )}
                </View>
                <Text style={styles.answerText}>{answer.text}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <CustomHeader text={test.name} />
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image source={test.photo} style={styles.testImage} />
        </View>
        {test.questions.map((item, index) => renderQuestion(item, index))}
        <TouchableOpacity
          style={styles.solveTest}
          onPress={() => navigation.navigate("TestCompletedScreen")}
        >
          <Text style={styles.solveTestText}>Testi Bitir</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  },
  imageContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  testImage: {
    width: width - 48,
    height: 220,
    borderRadius: 10,
    resizeMode: "cover",
  },
  testQuestionCard: {
    display: "flex",
    flexDirection: "row",
    width: width - 48,
    paddingVertical: 16,
    paddingLeft: 18,
    paddingRight: 30,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    marginHorizontal: 24,
    shadowColor: "#9d9d9d",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 9,
    elevation: 5,
    marginTop: 20,
  },
  questionNumber: {
    width: 32,
    height: 32,
    lineHeight: 14,
    paddingVertical: 10,
    backgroundColor: "#E0F1FE",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "500",
    borderRadius: 16,
    marginRight: 14,
    color: "#0B1215",
  },
  questionText: {
    fontSize: 16,
    color: "#0B1215",
    fontWeight: "500",
    marginBottom: 20,
  },
  answersContainer: {
    display: "flex",
    flexDirection: "column",
  },
  answerButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  radioButton: {
    height: 20,
    width: 20,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#0B1215",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  radioButtonSelected: {
    height: 11,
    width: 15,
  },
  answerText: {
    fontSize: 14,
    fontWeight: "400",
    color: "#0B1215",
  },
  solveTest: {
    width: width - 48,
    marginHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: "#0A6EBD",
    borderRadius: 50,
    marginTop: 20,
    marginBottom: 40,
  },
  solveTestText: {
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "600",
  },
});
