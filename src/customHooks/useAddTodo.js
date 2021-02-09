import { useState } from "react";

export default function useAddTodo() {
  const [todo, setTodo] = useState([]);

  const addTodo = (text) => {
      try {
          if (text.trim().length > 0) {
              setTodo([
                ...todo,
                { text: text, key: Math.random().toString(), check: false },
              ]
            );
          } else {
            alert("List can't be empty");
          }
      } catch (error) {
          console.log(error);
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
