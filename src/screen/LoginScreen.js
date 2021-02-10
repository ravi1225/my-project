import React from "react";
import { View, StyleSheet, Button, Image } from "react-native";
import * as Google from "expo-google-app-auth";
import { Colors } from "../components/Colors";

const ANDROID_CLIENT_ID =
  "454753209752-6578od7lakh8ou87m05jipa2a48bvpva.apps.googleusercontent.com";

export default function LoginScreen(props) {
  async function signInWithGoogleAsync() {
    try {
      const result = await Google.logInAsync({
        androidClientId: ANDROID_CLIENT_ID,
        scopes: ["profile", "email"],
      });
      if (result.type === "success") {
        props.navigation.navigate("Profile", {
          username: result.user.name,
        });

        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  }
  const signInWithGoogle = () => {
    signInWithGoogleAsync();
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/Welcome.png")}
        style={{ marginTop: 0, height: 200 }}
        resizeMode="contain"
      />
      <Button onPress={() => signInWithGoogle()} title="Sign in with Google" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.CornflowerBlue,
  },
});
