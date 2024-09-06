import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

import HomeScreen from "./src/screens/HomeScreen";
import OnboardingScreen from "./src/screens/OnboardingScreen";
import LoginScreen from "./src/screens/LoginScreen";
import ChatBotScreen from "./src/screens/ChatbotScreen";
import ChatScreen from "./src/screens/ChatScreen";
import SvgHome from "./src/components/tabs/Home";
import DiscoverScreen from "./src/screens/DiscoverScreen";
import DailyScreen from "./src/screens/DailyScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import SvgCompass from "./src/components/tabs/Compass";
import SvgMagicWand from "./src/components/tabs/MagicWand";
import SvgProfile from "./src/components/tabs/Profile";
import CenterButton from "./src/components/TabBarCenterButton";
import MeditationScreen from "./src/screens/MeditationScreen";
import ListeningScreen from "./src/screens/ListeningScreen";
import PlayAudio from "./src/screens/PlayAudio";
import ArticleBlogScreen from "./src/screens/ArticleBlogScreen";
import BlogDetailScreen from "./src/screens/BlogDetailScreen";
import TestDetailScreen from "./src/screens/TestDetailScreen";
import TestScreen from "./src/screens/TestScreen";
import TestCompletedScreen from "./src/screens/TestCompletedScreen";
import TestListScreen from "./src/screens/TestListScreen";
import SelectMoodScreen from "./src/screens/SelectMoodScreen";
import CreateMoodScreen from "./src/screens/CreateMoodScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

SplashScreen.preventAutoHideAsync();

function Placeholder() {
  return null;
}

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeMain" component={HomeScreen} />
      <Stack.Screen name="Meditation" component={MeditationScreen} />
      <Stack.Screen name="ArticleBlog" component={ArticleBlogScreen} />
      <Stack.Screen name="BlogDetail" component={BlogDetailScreen} />
      <Stack.Screen name="TestList" component={TestListScreen} />
    </Stack.Navigator>
  );
}

function ExploreStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="DiscoverMain" component={DiscoverScreen} />
      <Stack.Screen name="Meditation" component={MeditationScreen} />
      <Stack.Screen name="ArticleBlog" component={ArticleBlogScreen} />
      <Stack.Screen name="BlogDetail" component={BlogDetailScreen} />
      <Stack.Screen name="TestList" component={TestListScreen} />
    </Stack.Navigator>
  );
}

function DailyStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="DailyMain" component={DailyScreen} />
      <Stack.Screen name="Meditation" component={MeditationScreen} />
    </Stack.Navigator>
  );
}

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#FAFAFA",
          height: 70,
          paddingBottom: 10,
          position: "absolute",
          paddingTop: 3,
        },
        tabBarItemStyle: {
          paddingTop: 7,
          paddingBottom: 9,
        },
        tabBarActiveTintColor: "#0A6EBD",
        tabBarInactiveTintColor: "#0B12154D",
      }}
    >
      <Tab.Screen
        name="Ana Sayfa"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <SvgHome color={color} size={size} />
          ),
          unmountOnBlur: true,
        }}
      />
      <Tab.Screen
        name="Keşfet"
        component={ExploreStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <SvgCompass color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Center"
        component={Placeholder}
        options={{
          tabBarButton: () => <CenterButton />,
        }}
      />
      <Tab.Screen
        name="Günlük"
        component={DailyStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <SvgMagicWand color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profil"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <SvgProfile color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      Urbanist: require("./assets/fonts/Urbanist.ttf"),
    });
    setFontsLoaded(true);
    SplashScreen.hideAsync();
  };

  useEffect(() => {
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Onboarding"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Home" component={HomeTabs} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="ChatBotScreen" component={ChatBotScreen} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
        <Stack.Screen name="ListeningScreen" component={ListeningScreen} />
        <Stack.Screen name="TestScreen" component={TestScreen} />
        <Stack.Screen name="TestDetailScreen" component={TestDetailScreen} />
        <Stack.Screen name="SelectMoodScreen" component={SelectMoodScreen} />
        <Stack.Screen name="CreateMoodScreen" component={CreateMoodScreen} />
        <Stack.Screen
          name="TestCompletedScreen"
          component={TestCompletedScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    fontStyle: "normal",
    fontFamily: "Urbanist",
  },
});
