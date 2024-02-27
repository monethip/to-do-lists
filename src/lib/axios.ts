import axios from 'axios'

export type Params = {
    limit: number,
    skip: number
}

export interface LoginType {
    username: string
    password: string
}


const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
});

//auth - login 
export const loginToDoList = async (user: LoginType) => {
    const res = await axiosInstance.post(`/auth/login`, user)
    return res;
}

//fetch to-do lists
export const getTodoLists = async (params: Params) => {
    const res = await axiosInstance.get(`/todos/?limit=${params.limit}&skip=${params.skip}`)
    return res.data
}

//fetch by id
export const getOneTodoList = async (id: number) => {
    const res = await axiosInstance.get(`/todos/${id}`)
    return res
}

//change status
export const update = async (id: number, completed: boolean) => {
    const res = await axiosInstance.patch(`/todos/${id}`, { completed: completed })
    return res
}