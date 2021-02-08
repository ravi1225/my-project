import { useState } from "react";

export default function useAddTodo() {
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
      alert("List can't be empty");
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

  return [todo, addTodo, changeCheck];
}
