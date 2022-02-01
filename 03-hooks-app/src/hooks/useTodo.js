import { useEffect, useReducer } from "react";
import todoReducer from "../components/use-reducer/todoReducer";
import useForm from "./useForm";

function useTodo() {

    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || [];
    }

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    const [{ description }, handleChange, reset] = useForm({
        description: ''
    });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    return [
        todos,
        dispatch,
        description,
        handleChange,
        reset
    ]
}

export default useTodo;