import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MyTabs from "./src/screen/MyTabs";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <MyTabs />
    </NavigationContainer>
  );
}
