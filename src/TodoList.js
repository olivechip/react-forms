import { useState } from "react";
import Todo from "./Todo";

const TodoList = () => {
    const INITIAL_STATE = ["cut grass", "feed dog"];
    const [ todoList, setTodoList ] = useState(INITIAL_STATE);

    const deleteTodo = (itemRemove) => {
        setTodoList(todoList => {
            return todoList.filter(todo => todo !== itemRemove);
        })
    }
    return (
        <div>
            <h3>Todo List</h3>
            <ul>
                {todoList.map((todo, index) => (
                    <Todo key={index} todo={todo} deleteTodo={deleteTodo}/>
                ))}
            </ul>
        </div>
    )
}

export default TodoList;