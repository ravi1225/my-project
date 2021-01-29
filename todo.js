import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Octicons from "react-native-vector-icons/Octicons";
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
                    <Icon
                      name="checkbox-marked-circle-outline"
                      size={30}
                      color={Colors.CornflowerBlue}
                    />
                  ) : (
                    <Icon
                      name="checkbox-blank-circle-outline"
                      size={30}
                      color={Colors.CornflowerBlue}
                    />
                  )}
                </TouchableOpacity>

                { item.check ? 
                (
                    <View style={styles.touchView}>
                      <Text style={styles.flatlistText1}> {item.text} </Text>
                      <Octicons name="primitive-dot" size={30} color={Colors.green} />
                    </View>
                ) : (
                  <View style={styles.touchView}>
                    <Text style={styles.flatlistText}> {item.text} </Text>
                    <Octicons name="primitive-dot" size={30} color={Colors.red} />
                  </View>
                )}
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
    justifyContent: "space-around",
    alignItems: 'center',
    paddingVertical: 20,
    marginHorizontal: 15,
    minHeight: 70,
    borderBottomWidth: 0.5,
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
  },

  touchView: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 15,
    marginBottom: 5,
  },
});
