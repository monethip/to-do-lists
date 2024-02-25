import { createSlice, Dispatch } from "@reduxjs/toolkit";
import { getTodoLists, getOneTodoList, Params, update } from "../lib/axios";

interface todo {
    id: number;
    todo: string;
    completed: boolean;
    userId: number;
}

interface TodoLits {
    limit: number;
    skip: number;
    todos: todo[];
    total: number;
}

interface state {
    params: {
        limit: number
        skip: number
    },
    data: TodoLits,
    todoTask: todo
}

const initialState: state = {
    params: { limit: 30, skip: 0 },
    data: {
        limit: 30,
        skip: 0,
        todos: [],
        total: 0
    },
    todoTask: {
        id: 0,
        todo: "",
        completed: false,
        userId: 0,
    }
};

const todoSlice = createSlice({
    name: "todolists",
    initialState, 
    reducers: {
        getTodoListsReducer(state, action) {
            const resources = action.payload;
            state.data = resources;
        },
        getOneTodoListReducer(state, action) {
            const resource = action.payload;
            state.todoTask = resource;
        },
        updateTodoListReducer(state, action) {
            const resource = action.payload;
            state.todoTask = resource;
        }
    },
});

export function getResources(params: Params) {
    return async (dispatch: Dispatch) => {
        try {
            const response = await getTodoLists(params)

            const resources: TodoLits = response;

            dispatch(getTodoListsReducer(resources));
        } catch (error) {
            console.error("Error", error);
        }
    };
}

export function getOneToDoListResources(id: number) {
    return async (dispatch: Dispatch) => {
        try {
            const response = await getOneTodoList(id)

            const resources: todo = response.data;

            dispatch(getOneTodoListReducer(resources));
        } catch (error) {
            console.error("Error:", error);
        }
    };
}

export function updateToDoListResources(id: number, status: boolean) {
    return async (dispatch: Dispatch) => {
        try {
            const response = await update(id, status)

            const resources: todo = response.data;

            console.log(response);

            if(response.status === 200){
                alert('Update Succesful')
            }

            dispatch(updateTodoListReducer(resources));
        } catch (error) {
            console.error("Error:", error);
        }
    };
}

export const { getTodoListsReducer, getOneTodoListReducer, updateTodoListReducer } = todoSlice.actions;
export default todoSlice.reducer;
