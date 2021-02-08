import React from 'react';
import { SafeAreaView } from 'react-native';
import AllComponents from '../AllComponents';


export default function HomeScreen({ addTodo, changeCheck, todo }) {
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