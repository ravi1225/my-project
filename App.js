import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import LoginScreen from "./src/screen/LoginScreen";
import ProfileScreen from "./src/screen/ProfileScreen";

const MainNavigator = createSwitchNavigator({
  Login: { screen: LoginScreen },
  Profile: { screen: ProfileScreen },
});

const GoogleScreen = createAppContainer(MainNavigator);

export default function App() {
  const [fontloaded, setFontLoaded] = useState(false);

  const loadedFonts = () => {
    return Font.loadAsync({
      "Nunito-ExtraLight": require("./assets/Fonts/Nunito-ExtraLight.ttf"),
      "Nunito-Italic": require("./assets/Fonts/Nunito-Italic.ttf"),
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
      <GoogleScreen />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
