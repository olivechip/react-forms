const Todo = ({ todo, deleteTodo }) => {
    return (
        <li>{todo}<button onClick={() => deleteTodo(todo)}>X</button></li>
    );
};

export default Todo;