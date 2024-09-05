import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import CustomHeader from "../components/CustomHeader";
import SectionSeperator from "../components/SectionSeperator";
import { TESTS } from "../constants/test_constant";
import TestCardItem from "../components/TestCardItem";
import SolvedTestItem from "../components/SolvedTestItem";

const { width } = Dimensions.get("window");

export default function TestListScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "FAFAFA" }}>
      <CustomHeader text="Testler" />
      <ScrollView>
        <SectionSeperator text="Popüler Testler" style={{ marginTop: 20 }} />
        <View
          style={{
            height: 170,
            overflow: "hidden",
            paddingVertical: 5,
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
        <SectionSeperator text="Çözülmüş Testler" style={{ marginTop: 20 }} />
        <FlatList
          data={TESTS}
          renderItem={({ item }) => (
            <SolvedTestItem
              date={item.date}
              title={item.name}
              photo={item.photo}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.flatListContent}
          ListFooterComponent={<View style={{ height: 90 }} />}
          ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
          showsHorizontalScrollIndicator={false}
          scrollEnabled={false}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
