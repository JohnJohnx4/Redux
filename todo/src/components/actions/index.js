export const ADD_TODO = 'ADD_TODO';
export const 


export const addTodo = todo => {
    return {
        type: ADD_TODO,
        payload: todo
    }
}