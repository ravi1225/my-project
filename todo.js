import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
import { Colors } from "./src/components/Colors";

export default function Todo(props) {
  return (
    <>
      <View>
        <View style={styles.firstView}>
          <FlatList
            data={props.todo}
            renderItem={({ item }) => (
              <View style={styles.flatlistView}>
                <TouchableOpacity onPress={() => props.changeCheck(item.key)}>
                  {item.check ? (
                    <View style={styles.touchView}>
                      <Icon
                        name="checkbox-marked-circle-outline"
                        size={30}
                        color={Colors.CornflowerBlue}
                      />
                      <Text style={styles.flatlistText1}> {item.text} </Text>
                      <Entypo
                        name="dot-single"
                        size={30}
                        color={Colors.green}
                      />
                    </View>
                  ) : (
                    <View style={styles.touchView}>
                      <Icon
                        name="checkbox-blank-circle-outline"
                        size={30}
                        color={Colors.CornflowerBlue}
                      />
                      <Text style={styles.flatlistText}> {item.text} </Text>
                      <Entypo name="dot-single" size={30} color={Colors.red} />
                    </View>
                  )}
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  firstView: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  flatlistView: {
    flexDirection: "row",
    marginLeft: 10,
    marginRight: 10,
  },

  flatlistText: {
    paddingRight: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 0.5,
    fontSize: 25,
    borderBottomWidth: 0.5,
    minWidth: 325,
    borderBottomColor: Colors.lightgray,
  },
  flatlistText1: {
    paddingRight: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 0.5,
    fontSize: 25,
    borderBottomWidth: 0.5,
    minWidth: 325,
    borderBottomColor: Colors.lightgray,
    textDecorationLine: "line-through",
    opacity: 0.5,
  },

  touchView: {
    flexDirection: "row",
    justifyContent: "space-around",
    minHeight: 70,
    paddingTop: 15,
  },
});
