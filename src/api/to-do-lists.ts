import request from '@/lib/axios'

type body = {
    completed: boolean
}

export function getToDoLists() {
    return request({
        url: '/todos?limit=30&skip=0',
        method: 'get',
    })
}

export function getOneToDoList(id: number) {
    return request({
        url: `/todos/${id}`,
        method: 'get',
    })
}

export function updateToDoList(id: number, data: number) {
    return request({
        url: `/todos/${id}`,
        method: 'PATCH',
        data
    })
}


