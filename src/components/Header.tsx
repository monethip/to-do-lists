import React from "react";
import { deleteCookie } from 'cookies-next';
import { useRouter } from "next/navigation";

export default function Header() {
    const router = useRouter();

    const handleLogout = () => {
        deleteCookie('user')
        router.push('/login')
        
    }
    return (
        <React.Fragment>
            <nav className="bg-white border-gray-200 border">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <p>To-Do</p>
                    <div className="w-full md:block md:w-auto">
                        <button onClick={handleLogout}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#4b56f7" d="M6 2h9a2 2 0 0 1 2 2v2h-2V4H6v16h9v-2h2v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2" /><path fill="#4b56f7" d="M16.09 15.59L17.5 17l5-5l-5-5l-1.41 1.41L18.67 11H9v2h9.67z" /></svg>                            </button>
                    </div>
                </div>
            </nav>

        </React.Fragment>
    )
}