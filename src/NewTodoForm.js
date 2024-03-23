import { useState } from "react";

const NewTodoForm = ({ addTodo }) => {
    const [ todo, setTodo ] = useState("");

    const handleChange = (e) => {
        setTodo(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(69);
        addTodo(todo);
        e.target.value = "";
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="todo"></label>
            <input 
                id="todo" 
                placeholder="enter todo" 
                name="todo"
                value={todo}
                onChange={handleChange}
            />
            <button>Submit</button>
        </form>
    )
}

export default NewTodoForm;