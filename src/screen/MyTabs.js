import "react-native-gesture-handler";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Colors } from "../components/Colors";
import useAddTodo from "../customHooks/useAddTodo";
import HomeScreen from './HomeScreen';
import ActiveScreen from "./ActiveScreen";
import ComplectedScreen from "./CompletedScreen";

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  const [todo, addTodo, changeCheck] = useAddTodo("");

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
