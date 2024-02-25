"use client"

import { redirect } from "next/navigation";
import { useEffect } from "react";
import { hasCookie } from 'cookies-next';

export default function withAuth(Component: any) {
    return function WithAuth(props: any) {
        useEffect(() => {
            if (!hasCookie("user")){
                redirect('/login');
            }
        }, [])

        if(!hasCookie("user")){
            return null;
        }

        return <Component {...props} />
    }
}