import { View } from "react-native";
import SvgAngry from "../components/emotions/Angry";
import SvgHappy from "../components/emotions/Happy";
import SvgNormal from "../components/emotions/Normal";
import SvgSurprised from "../components/emotions/Surprised";
import SvgTransparentHappy from "../components/emotions/TransparentHappy";
import SvgUnhappy from "../components/emotions/Unhappy";

export const EMOTION = {
  happy: {
    color: "#D0F49B",
    item: <SvgHappy />,
  },
  angry: {
    color: "#FF9090",
    item: <SvgAngry />,
  },
  normal: {
    color: "#FFEB9D",
    item: <SvgNormal />,
  },
  suprised: {
    color: "#D2A0FD",
    item: <SvgSurprised />,
  },
  sad: {
    color: "#8EDEFC",
    item: <SvgUnhappy />,
  },
  default: {
    color: "#FFFFFF",
    item: <SvgTransparentHappy />,
  },
};

export const EMOTIONS_WEEKLY = [
  {
    day: 2,
    dayName: "Pzt",
    emotion: EMOTION.happy,
  },
  { day: 3, dayName: "Sal", emotion: EMOTION.normal },
  {
    day: 4,
    dayName: "Çrş",
    emotion: EMOTION.angry,
  },
  { day: 5, dayName: "Prş", emotion: EMOTION.sad },
  {
    day: 6,
    dayName: "Cum",
    emotion: EMOTION.default,
  },
  { day: 7, dayName: "Cmt", emotion: EMOTION.default },
  { day: 8, dayName: "Paz", emotion: EMOTION.default },
];

export const EMOTIONS_MONTHLY = [
  {
    item: [
      { day: 26, emotion: <SvgHappy /> },
      { day: 27, emotion: <SvgAngry /> },
      { day: 28, emotion: <SvgNormal /> },
      { day: 29, emotion: <SvgHappy /> },
      { day: 30, emotion: <SvgAngry /> },
      { day: 31, emotion: <SvgNormal /> },
      { day: 1, emotion: <SvgHappy /> },
    ],
  },
  {
    item: [
      { day: 2, emotion: <SvgHappy /> },
      { day: 3, emotion: <SvgAngry /> },
      { day: 4, emotion: <SvgAngry /> },
      { day: 5, emotion: <SvgSurprised /> },
      { day: 6, emotion: <SvgSurprised /> },
      { day: 7, emotion: <SvgTransparentHappy /> },
      { day: 8, emotion: <SvgTransparentHappy /> },
    ],
  },
  {
    item: [
      { day: 9, emotion: <SvgTransparentHappy /> },
      { day: 10, emotion: <SvgTransparentHappy /> },
      { day: 11, emotion: <SvgTransparentHappy /> },
      { day: 12, emotion: <SvgTransparentHappy /> },
      { day: 13, emotion: <SvgTransparentHappy /> },
      { day: 14, emotion: <SvgTransparentHappy /> },
      { day: 15, emotion: <SvgTransparentHappy /> },
    ],
  },
  {
    item: [
      { day: 16, emotion: <SvgTransparentHappy /> },
      { day: 17, emotion: <SvgTransparentHappy /> },
      { day: 18, emotion: <SvgTransparentHappy /> },
      { day: 19, emotion: <SvgTransparentHappy /> },
      { day: 20, emotion: <SvgTransparentHappy /> },
      { day: 21, emotion: <SvgTransparentHappy /> },
      { day: 22, emotion: <SvgTransparentHappy /> },
    ],
  },
  {
    item: [
      { day: 23, emotion: <SvgTransparentHappy /> },
      { day: 24, emotion: <SvgTransparentHappy /> },
      { day: 25, emotion: <SvgTransparentHappy /> },
      { day: 26, emotion: <SvgTransparentHappy /> },
      { day: 27, emotion: <SvgTransparentHappy /> },
      { day: 28, emotion: <SvgTransparentHappy /> },
      { day: 29, emotion: <SvgTransparentHappy /> },
    ],
  },
  {
    item: [
      { day: 30, emotion: <SvgTransparentHappy /> },
      { day: "", emotion: <View /> },
      { day: "", emotion: <View /> },
      { day: "", emotion: <View /> },
      { day: "", emotion: <View /> },
      { day: "", emotion: <View /> },
      { day: "", emotion: <View /> },
    ],
  },
];
