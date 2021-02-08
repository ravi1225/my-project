import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native";
import AllComponents from "../AllComponents";

export default function ActiveScreen({ addTodo, changeCheck, todo }) {
  const [active, setActive] = useState([]);

  useEffect(() => {
    activeList();
  }, [activeList]);

  const activeList = () => {
    const listData = todo.filter((item) => {
      if (!item.check) {
        return item;
      }
    });
    setActive(listData);
  };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <AllComponents
        type="Active"
        addTodo={addTodo}
        changeCheck={changeCheck}
        todo={active}
      />
    </SafeAreaView>
  );
}
