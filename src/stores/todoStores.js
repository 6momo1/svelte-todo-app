// @ts-nocheck
import { writable } from 'svelte/store';

export const todos = writable([]);

// @ts-ignore
export const addTodo = async (text) => {
    // @ts-ignore
    todos.update((cur) => {
        const newTodos = [...cur, { text, completed: false, id: Date.now() }]
        return newTodos
    })
};


export const deleteTodo = (id) => {
    todos.update(todos => todos.filter(todo => todo.id !== id))
}

export const toggleTodoCompleted = (id) => {
    todos.update(todos => {
        let index = -1
        for (let i = 0; i < todos.length; i++) {
            const todo = todos[i];
            if (todo.id == id) {
                index = i
                break
            }
        }
        if (index != -1) {
            todos[index].completed = !todos[index].completed
        }
        return todos;
    })
}