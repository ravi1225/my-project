import React from "react";
import { SafeAreaView, Text, View, StyleSheet, Button } from "react-native";
import MyTabs from "./MyTabs";

export default function ProfileScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileHeader}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Welcome {props.navigation.getParam("username")}
        </Text>
        <Button
          title="Sign out"
          onPress={() => props.navigation.navigate("Login")}
        />
      </View>
      <MyTabs />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    marginTop: 20,
    backgroundColor: "#fff",
  },
  profileHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
