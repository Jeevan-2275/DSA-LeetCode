// Todo List App

// Add, delete, mark completed
// Persist data using localStorage

import { useState,useEffect } from "react";

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const[text,setText]=useState("");
    const [search,setSearch]=useState("");
    const [error,setError]=useState("");



     useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
setTodos(storedTodos);

    }, []);
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const addTodo = () => {
        if (text.trim() === "") {
            setError("Todo text cannot be empty");
            return;
        }
        setTodos([...todos, { id: Date.now(), text, completed: false }]);
        setText("");
        setError("");
    };

    const deleteTodo = (id) => {
        const newTodos = todos.filter(todo => todo.id !== id);
        setTodos(newTodos);
    };
    
    const toggleComplete = (id) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(todo => todo.id === id);
        if (todoIndex !== -1) {
            newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        }
        setTodos(newTodos);
    }

    const filteredTodos = todos.filter((todo) =>
        todo.text.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <div>
            <h1>Todo List</h1>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add a new todo"
            />
            <button onClick={addTodo}>Add Todo</button>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <br />
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)} 
                placeholder="Search todos"
            />
            <ul>
                {filteredTodos.map((todo, id) => (
                    <li key={todo.id} style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
                        {todo.text}
                        <button onClick={() => toggleComplete(todo.id)}>
                            {todo.completed ? "Undo" : "Complete"}
                        </button>
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default Todo;
