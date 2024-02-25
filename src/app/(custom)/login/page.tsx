"use client"

import "@/app/globals.css";
import React from 'react';
import { useRouter } from "next/navigation";
import { FormEvent } from 'react'
import { setCookie } from 'cookies-next';
import { loginToDoList } from "../../../lib/axios";

export default function LoginPage() {
    const router = useRouter();

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const username = formData.get('username') as string;
        const password = formData.get('password') as string;

        const user = {
            username: username,
            password: password
        }

        loginToDoList(user).then(res => {
            if (res.status === 200) {
                alert('Login Successful')
                localStorage.setItem("user", JSON.stringify(res.data));
                setCookie('user', JSON.stringify(res.data));
                router.push('/');
            }
        }).catch(error => {
            alert(error.response.data.message);    
        })

    }

    return (
        <div className="max-w-screen-xl mx-auto min-h-screen flex items-center justify-center">
            <div className="text-center p-4 w-9/12 md:w-6/12">
                <p>Login</p>
                <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-4">
                    <input type="text" name="username" className="bg-gray-50 border border-gray-300 rounded text-gray-900 text-sm block w-full p-2.5" placeholder="Username" required />
                    <input type="password" name="password" className="bg-gray-50 border border-gray-300 rounded text-gray-900 text-sm block w-full p-2.5" placeholder="Password" required />
                    <button type="submit" className="bg-primary text-white rounded px-4 py-2 block w-full mt-6">Login</button>
                </form>
            </div>
        </div>
    )
}