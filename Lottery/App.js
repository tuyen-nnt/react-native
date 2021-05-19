import { StatusBar } from "react-native";
import React from "react";
import {
  StyleSheet,
  Text,
  Platform,
  SafeAreaView,
  View,
  Dimensions,
} from "react-native";

import WelcomeScreen from "./app/screens/WelcomeScreen.js";

export default function App() {
  return <WelcomeScreen />;
}
