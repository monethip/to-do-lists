import request from '@/lib/axios'

export type User = {
    username: string,
    password: string
}

export async function login(data: User) {
  return request({
    url: '/auth/login',
    method: 'post',
    data,
  })
}