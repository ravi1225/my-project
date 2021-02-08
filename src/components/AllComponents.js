import React from "react";
import "react-native-gesture-handler";
import { StyleSheet, SafeAreaView, View } from "react-native";
import Heading from "./heading";
import Todo from "./todo";
import Constants from "expo-constants";
import { Colors } from "./Colors";

export default function AllComponents({ type, addTodo, changeCheck, todo }) {
  return (
    <SafeAreaView style={styles.container}>
      <Heading addTodo={addTodo} type={type} />
      <View>
        <Todo todo={todo} changeCheck={changeCheck} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    marginTop: Constants.statusBarHeight,
  },
});
