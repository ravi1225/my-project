import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { SafeAreaView, Alert } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AllComponents from "./AllComponents";
import { Colors } from "./src/components/Colors";

function HomeScreen({ addTodo, changeCheck, todo }) {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <AllComponents
        type="Today"
        addTodo={addTodo}
        changeCheck={changeCheck}
        todo={todo}
      />
    </SafeAreaView>
  );
}

function ActiveScreen({ addTodo, changeCheck, todo }) {
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

function ComplectedScreen({ addTodo, changeCheck, todo }) {
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

const Tab = createBottomTabNavigator();

function MyTabs() {
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
    const checkList = todo.map((e) => {
      if (e.key === key) {
        return { ...e, check: !e.check };
      } else {
        return { ...e };
      }
    });

    setTodo(checkList);
  };

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: Colors.red,
        inactiveTintColor: Colors.black,
        labelStyle: {
          fontSize: 20,
          fontWeight: "bold",
          padding: 1,
          marginBottom: 10,
        },
      }}
    >
      <Tab.Screen
        name="All"
        component={() => (
          <HomeScreen addTodo={addTodo} changeCheck={changeCheck} todo={todo} />
        )}
      />
      <Tab.Screen
        name="Active"
        component={() => (
          <ActiveScreen
            addTodo={addTodo}
            changeCheck={changeCheck}
            todo={todo}
          />
        )}
      />
      <Tab.Screen
        name="Completed"
        component={() => (
          <ComplectedScreen
            addTodo={addTodo}
            changeCheck={changeCheck}
            todo={todo}
          />
        )}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </>
  );
}
