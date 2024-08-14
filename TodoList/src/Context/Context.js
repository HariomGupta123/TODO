import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Todo msg",
      completed: false,
    },
  ],
  addTodoList: (activitylist) => {},
  handleRemove: (id) => {},
  toggleComplete:(id)=>{},
  updatTodo: (id, change) => {},
});
export const useTodo=()=>{
    return useContext(TodoContext)
}
export const TodoProvider =TodoContext.Provider