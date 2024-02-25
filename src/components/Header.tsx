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
                    <a href="/" className="text-primary text-lg font-bold">ToDo</a>
                    <div className="w-full md:block md:w-auto">
                        <button onClick={handleLogout}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#2a54cf" d="M20.944 18.432a2.577 2.577 0 0 1-2.729 2.5c-2.153.012-4.307 0-6.46 0a.5.5 0 0 1 0-1c2.2 0 4.4.032 6.6 0c1.107-.016 1.589-.848 1.589-1.838V5.63a1.545 1.545 0 0 0-.969-1.471a3.027 3.027 0 0 0-1.061-.095h-6.159a.5.5 0 0 1 0-1c2.225 0 4.465-.085 6.688 0a2.566 2.566 0 0 1 2.5 2.67Z"/><path fill="#2a54cf" d="M15.794 12.354a.459.459 0 0 0 .138-.312a.3.3 0 0 0 .006-.042a.29.29 0 0 0-.006-.041a.455.455 0 0 0-.138-.313l-3.669-3.668a.5.5 0 0 0-.707.707l2.816 2.815H3.492a.5.5 0 0 0 0 1h10.742l-2.816 2.815a.5.5 0 0 0 .707.707Z"/></svg>                          </button>
                    </div>
                </div>
            </nav>

        </React.Fragment>
    )
}