import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import AddTodo from "./AddTodo";
import { Colors } from "./Colors";

export default function heading(props) {
  const [modalVal, setModalVal] = useState(false);

  const handleClick = () => {
    setModalVal(!modalVal);
  };
  

  return (
    <>
      <View style={styles.headingView}>
        <Text style={styles.mainHeader}> {props.type} </Text>
        {props.type == "Today" ? (
          <TouchableOpacity
            style={styles.headerTouchable}
            onPress={handleClick}
          >
            <Icon name="pluscircleo" size={30} color={Colors.CornflowerBlue} />
          </TouchableOpacity>
        ) : null}
      </View>

      {modalVal ? (
        <AddTodo
          modalVal={modalVal}
          handleClick={handleClick}
          setModalVal={setModalVal}
          addTodo={props.addTodo}
        />
      ) : null}
    </>
  );
}

const styles = StyleSheet.create({
  headingView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: Colors.black,
    marginTop: 5,
    paddingHorizontal: 5,
    minHeight: 100,
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.lightgray,
  },
  mainHeader: {
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "Nunito-Italic",
  },
  headerTouchable: {
    fontWeight: "bold",
    marginRight: 10,
  },
});
