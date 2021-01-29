import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, SafeAreaView, View, Alert } from "react-native";
import Heading from "./heading";
import Todo from "./todo";
import Constants from "expo-constants";
import { Colors } from "./src/components/Colors";

export default function App() {
  const [todo, setTodo] = useState([]);

  const addTodo = (text) => {
    if (text.trim().length > 0) {
      setTodo((prevValue) => {
        return [
          ...prevValue,
          { text: text.trim(), key: Math.random().toString(), check: false },
        ];
      });
    } else {
      Alert.alert("error!", "List can't be empty", [
        { text: "Ok", onPress: () => console.log("Alert Closed") },
      ]);
    }
  };

  const changeCheck = (key) => {
    const filterList = todo.map((e) => {
      if (e.key === key) {
        return { ...e, check: !e.check };
      } else {
        return { ...e };
      }
    });

    setTodo(filterList);
  };

  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.container}>
        <Heading addTodo={addTodo} />
        <View>
          <Todo todo={todo} changeCheck={changeCheck} />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    marginTop: Constants.statusBarHeight,
  },
});
