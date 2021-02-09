import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import MyTabs from "./src/screen/MyTabs";
import * as Font from "expo-font";
import { AppLoading } from "expo";

export default function App() {
  const [fontloaded, setFontLoaded] = useState(false);

  const loadedFonts = () => {
    return Font.loadAsync({
      "Nunito-ExtraLight": require("./assets/Fonts/Nunito-ExtraLight.ttf"),
      "Nunito-Italic" : require("./assets/Fonts/Nunito-Italic.ttf"),
    });
  };

  if (!fontloaded) {
    return (
      <AppLoading
        startAsync={loadedFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.error(err)}
      />
    );
  }

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <MyTabs />
    </NavigationContainer>
  );
}
