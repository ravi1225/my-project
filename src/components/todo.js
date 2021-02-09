import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Octicons from "react-native-vector-icons/Octicons";
import { Colors } from "./Colors";

export default function Todo(props) {
  return (
    <SafeAreaView style={styles.firstView}>
      <FlatList
        data={props.todo}
        renderItem={({ item }) => (
          <View style={styles.flatlistView}>
            <TouchableOpacity onPress={() => props.changeCheck(item.key)}>
              <Icon
                name={
                  item.check
                    ? "checkbox-marked-circle-outline"
                    : "checkbox-blank-circle-outline"
                }
                size={30}
                color={Colors.CornflowerBlue}
              />
            </TouchableOpacity>

            <View style={styles.touchView}>
              <Text
                style={item.check ? styles.flatlistText1 : styles.flatlistText}
              >
                {item.text}
              </Text>
              <Octicons
                name="primitive-dot"
                size={30}
                color={item.check ? Colors.green : Colors.red}
              />
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  firstView: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  flatlistView: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 20,
    marginHorizontal: 15,
    minHeight: 70,
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.lightgray,
  },

  flatlistText: {
    paddingRight: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 0.5,
    fontSize: 25,
    minWidth: 335,
    borderBottomColor: Colors.lightgray,
  },
  flatlistText1: {
    paddingRight: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 0.5,
    fontSize: 25,
    minWidth: 330,
    borderBottomColor: Colors.lightgray,
    textDecorationLine: "line-through",
    opacity: 0.5,
    fontFamily: 'Nunito-Italic'
  },

  touchView: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 15,
    marginBottom: 5,
  },
});
