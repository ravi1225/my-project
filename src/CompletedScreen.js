import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native";
import AllComponents from "../AllComponents";

export default function ComplectedScreen({ addTodo, changeCheck, todo }) {
    const [completed, setCompleted] = useState([]);
  
    useEffect(() => {
      completeList();
    }, [completeList]);
  
    const completeList = () => {
      let listData = todo.filter((item) => {
        if (item.check) {
          return item;
        }
      });
      setCompleted(listData);
    };
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
        <AllComponents
          type="Completed"
          addTodo={addTodo}
          changeCheck={changeCheck}
          todo={completed}
        />
      </SafeAreaView>
    );
  }